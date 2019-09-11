import { NowRequest, NowResponse } from '@now/node';
import { methodFilter } from '../utils/middleware';
import * as Stripe from 'stripe';

const StripeFactory: any = require('stripe');

type ExecutePayment = {
  token: {
    id: string;
  };
  amount?: number;
  taskText: string;
  email: string;
  remoteAddress?: string;
};

export const executePayment = async ({
  token,
  amount = 50,
  taskText,
  email,
  remoteAddress = ''
}: ExecutePayment) => {
  try {
    const stripe: Stripe = StripeFactory(process.env.STRIPE_SERVER);

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
        timeStamp: new Date().toISOString()
      }
    });

    if (status === 'succeeded') {
      return livemode ? status : 'succeeded not live';
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
