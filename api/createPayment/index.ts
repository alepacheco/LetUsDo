import { NowRequest, NowResponse } from '@now/node';
import { methodFilter } from '../utils/middleware';
import { executePaymentMethod, executePaymentIntent } from '../utils/stripe';
import * as Stripe from 'stripe';

type StripeFactory = (key: string | undefined) => Stripe;

const StripeFactory: StripeFactory = require('stripe');

export const handler = async (req: NowRequest, res: NowResponse) => {
  const { payment_method_id, payment_intent_id, taskText, metadata } = req.body || {};
  const forwardedHeader = req.headers && req.headers['x-forwarded-for']
  const remoteAddress = forwardedHeader ? forwardedHeader[0] : req.connection.remoteAddress

  console.log(`Recevied payment from: ${remoteAddress}`);
  console.log(`With contents:`);
  console.log(`payment_method_id: ${payment_method_id}`);
  console.log(`payment_intent_id: ${payment_intent_id}`);
  console.log(`taskText: ${taskText}`);
  console.log(`metadata: ${JSON.stringify(metadata)}`);

  const stripe: Stripe = StripeFactory(process.env.STRIPE_SERVER);

  if (payment_method_id) {
    const { status, response } = await executePaymentMethod({
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
