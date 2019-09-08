import { NowRequest, NowResponse } from '@now/node';
import { methodFilter } from '../utils/middleware';
import * as Stripe from 'stripe';

const stripe: Stripe = require('stripe')(process.env.STRIPE_SERVER);

export const executePayment = async ({ token, amount = 50, taskText, email }) => {
  try {
    const { status, livemode } = await stripe.charges.create({
      amount, // in cents 100cents == 1gbp
      currency: 'gbp',
      description: 'Let Us Do Ltd.',
      source: token.id,
      receipt_email: email,
      metadata: {
        task: taskText.slice(0, 500),
        email
      }
    });

    if (status === 'succeeded' && livemode) {
      return status;
    }
  } catch (error) {
    return error.message;
  }

  return 'Unknown error while executing payment';
};

export const handler = async (req: NowRequest, res: NowResponse) => {
  const { token, email, taskText } = req.body || {};
  const paymentCompleted = await executePayment({ token, taskText, email });

  if (paymentCompleted !== 'succeeded') {
    res.status(500).json({ error: paymentCompleted });
    return;
  }

  if (paymentCompleted === 'succeeded') {
    res.status(200).json({ status: 'ok' });
  }
};

export default methodFilter(handler, 'POST');
