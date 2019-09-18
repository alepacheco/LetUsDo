import { NowRequest, NowResponse } from '@now/node';
import { methodFilter } from '../utils/middleware';
import { executePaymentMethod, executePaymentIntent } from '../utils/stripe';
import * as Stripe from 'stripe';

type StripeFactory = (key: string | undefined) => Stripe;
const StripeFactory: StripeFactory = require('stripe');

export const handler = async (req: NowRequest, res: NowResponse) => {
  const { payment_method_id, payment_intent_id, taskText, metadata } = req.body || {};
  const forwardedHeader = req.headers && (req.headers['x-forwarded-for'] as string);
  const remoteAddress = forwardedHeader
    ? forwardedHeader.split(',')[0].trim()
    : req.connection.remoteAddress;
  const serializedData = {
    remoteAddress,
    metadata,
    payment_method_id,
    payment_intent_id,
    taskText
  };

  console.log(`Recevied payment: ${JSON.stringify(serializedData)}`);

  const stripe = StripeFactory(process.env.STRIPE_SERVER);

  if (payment_method_id) {
    const { status, response } = await executePaymentMethod({
      amount: 50, // cents
      payment_method_id,
      taskText,
      metadata: {
        ...metadata,
        remoteAddress
      },
      stripe
    });

    if (status) {
      res.status(status).json(response);
    }
    return;
  }

  if (payment_intent_id) {
    const { status, response } = await executePaymentIntent({ stripe, payment_intent_id });
    if (status) {
      res.status(status).json(response);
    }
    return;
  }
};

export default methodFilter(handler, 'POST');
