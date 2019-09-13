import { NowRequest, NowResponse } from '@now/node';
import { methodFilter } from '../utils/middleware';
import { executePaymentMethod, executePaymentIntent } from '../utils/stripe';
import * as Stripe from 'stripe';

const StripeFactory: any = require('stripe');

export const handler = async (req: NowRequest, res: NowResponse) => {
  const { payment_method_id, payment_intent_id, taskText, metadata } = req.body || {};
  const { remoteAddress } = req.connection;
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
