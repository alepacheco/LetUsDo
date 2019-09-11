import { NowRequest, NowResponse } from '@now/node';
import { methodFilter } from '../utils/middleware';
import * as Stripe from 'stripe';

const StripeFactory: any = require('stripe');

type ExecutePaymentMethod = {
  payment_method_id: string;
  amount?: number;
  taskText: string;
  email: string;
  remoteAddress?: string;
  stripe: any;
};

export const executePaymentMethod = async ({
  payment_method_id,
  amount = 50,
  taskText,
  email,
  remoteAddress = '',
  stripe
}: ExecutePaymentMethod) => {
  try {
    const { status, next_action, client_secret } = await stripe.paymentIntents.create({
      payment_method: payment_method_id,
      amount,
      currency: 'gbp',
      confirmation_method: 'manual',
      confirm: true
    });

    if (status === 'requires_action' && next_action.type === 'use_stripe_sdk') {
      return {
        status: 200,
        response: {
          requires_action: true,
          payment_intent_client_secret: client_secret
        }
      };
    }
    if (status === 'succeeded') {
      return {
        status: 200,
        response: {
          success: true
        }
      };
    }
  } catch (error) {
    return {
      status: 500,
      response: {
        error
      }
    };
  }

  return {
    status: 500,
    error: 'Unknown error while executing payment'
  };
};

type ExecutePaymentIntent = {
  payment_intent_id: string;
  stripe: any;
};

export const executePaymentIntent = async ({ stripe, payment_intent_id }: ExecutePaymentIntent) => {
  try {
    const { status, next_action, client_secret } = await stripe.paymentIntents.confirm(
      payment_intent_id
    );

    if (status === 'requires_action' && next_action.type === 'use_stripe_sdk') {
      return {
        status: 200,
        response: {
          requires_action: true,
          payment_intent_client_secret: client_secret
        }
      };
    }
    if (status === 'succeeded') {
      return {
        status: 200,
        response: {
          success: true
        }
      };
    }
  } catch (error) {
    return {
      status: 500,
      response: {
        error
      }
    };
  }

  return {
    status: 500,
    error: 'Unknown error while executing payment'
  };
};

export const handler = async (req: NowRequest, res: NowResponse) => {
  const { payment_method_id, payment_intent_id, email, taskText } = req.body || {};
  const { remoteAddress } = req.connection;
  const stripe: Stripe = StripeFactory(process.env.STRIPE_SERVER);

  if (payment_method_id) {
    const { status, response } = await executePaymentMethod({
      payment_method_id,
      taskText,
      email,
      remoteAddress,
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
