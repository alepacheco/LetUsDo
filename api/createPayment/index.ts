import { NowRequest, NowResponse } from '@now/node';
import { methodFilter } from '../utils/middleware';
import * as Stripe from 'stripe';

const stripe: Stripe = require('stripe')(process.env.STRIPE_SERVER);

export const executePayment = async ({ token, amount = 50, taskText, email, remoteAddress }) => {
  try {
    const { status, livemode } = await stripe.charges.create({
      amount, // in cents 100cents == 1gbp
      currency: 'gbp',
      description: `Let Us Do task : ${taskText}`,
      source: token.id,
      receipt_email: email,
      metadata: {
        email,
        amount,
        remoteAddress,
        timeStamp: new Date().toString()
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
  const { remoteAddress } = req.connection;

  const paymentCompleted = await executePayment({ token, taskText, email, remoteAddress });

  if (paymentCompleted !== 'succeeded') {
    res.status(500).json({ error: paymentCompleted });
    return;
  }

  if (paymentCompleted === 'succeeded') {
    res.status(200).json({ status: 'ok' });
  }
};

export default methodFilter(handler, 'POST');
