/* eslint-disable no-global-assign */
import { handler } from '../../../api/createPayment/index';
process.env.STRIPE_SERVER = 'sk_test_Fe8VrGftldFe2Vy3e38I65Gv00qN5qwLa5';

const mockPaymentIntentCreate = jest.fn();
const mockPaymentIntentConfirm = jest.fn();

const constantDate = new Date('Tue Jun 13 2017 04:41:20');
constantDate.setUTCHours(0, 0, 0, 0);

// @ts-ignore
global.console = { log: jest.fn() };

// @ts-ignore
Date = class extends Date {
  constructor() {
    super();
    return constantDate;
  }
};

const mockStripeModule = {
  paymentIntents: {
    create: mockPaymentIntentCreate,
    confirm: mockPaymentIntentConfirm
  }
};

jest.mock('stripe', () => () => mockStripeModule);

jest.resetModules();

describe('/createPayment', () => {
  beforeEach(() => {
    mockPaymentIntentConfirm.mockReset();
    mockPaymentIntentCreate.mockReset();
  });

  const req: any = {
    method: 'POST',
    body: {
      payment_intent_id: 'tok_fr',
      email: 'email@email.com',
      taskText: 'taskText'
    },
    connection: {
      remoteAddress: '127.0.0.1'
    }
  };
  const res: any = {
    send: jest.fn(),
    status: jest.fn(),
    json: jest.fn()
  };
  res.status.mockReturnValue(res);

  it('returns ok, no 2fa', async () => {
    mockPaymentIntentConfirm.mockReturnValueOnce({
      status: 'succeeded',
      next_action: false,
      client_secret: null
    });

    await handler(req, res);
    expect(res.json).toHaveBeenLastCalledWith({ success: true });
    expect(res.status).toHaveBeenLastCalledWith(200);
    expect(mockPaymentIntentCreate).not.toHaveBeenCalled();
    expect(mockPaymentIntentConfirm).toHaveBeenLastCalledWith('tok_fr');
  });

  it('returns 2fa', async () => {
    mockPaymentIntentConfirm.mockReturnValueOnce({
      status: 'requires_action',
      next_action: { type: 'use_stripe_sdk' },
      client_secret: 'clientSecret'
    });

    await handler(req, res);
    expect(res.json).toHaveBeenLastCalledWith({
      payment_intent_client_secret: 'clientSecret',
      requires_action: true
    });
    expect(res.status).toHaveBeenLastCalledWith(200);
    expect(mockPaymentIntentCreate).not.toHaveBeenCalled();
    expect(mockPaymentIntentConfirm).toHaveBeenLastCalledWith('tok_fr');
  });

  it('returns ok for second 2fa', async () => {
    mockPaymentIntentCreate.mockReturnValueOnce({ status: 'succeeded' });

    const req: any = {
      method: 'POST',
      body: {
        payment_method_id: 'payment_method_id_tok_fr',
        taskText: 'taskText',
        metadata: {
          email: 'email@email.com'
        }
      },
      connection: {
        remoteAddress: '127.0.0.1'
      }
    };

    await handler(req, res);
    expect(res.json).toHaveBeenLastCalledWith({ success: true });
    expect(res.status).toHaveBeenLastCalledWith(200);
    expect(mockPaymentIntentCreate).toHaveBeenLastCalledWith({
      amount: 2000,
      confirm: true,
      confirmation_method: 'manual',
      currency: 'gbp',
      description: 'Task details: taskText',
      metadata: {
        email: 'email@email.com',
        remoteAddress: '127.0.0.1'
      },
      payment_method: 'payment_method_id_tok_fr',
      receipt_email: 'email@email.com'
    });
    expect(mockPaymentIntentConfirm).not.toHaveBeenCalled();
  });

  it('returns ok for second 2fa and needs more verification', async () => {
    mockPaymentIntentCreate.mockReturnValueOnce({
      status: 'requires_action',
      next_action: { type: 'use_stripe_sdk' },
      client_secret: 'clientSecret'
    });

    const req: any = {
      method: 'POST',
      body: {
        payment_method_id: 'payment_method_id_tok_fr',
        metadata: { email: 'email@email.com' },
        taskText: 'taskText'
      },
      connection: {
        remoteAddress: '127.0.0.1'
      }
    };

    await handler(req, res);
    expect(res.json).toHaveBeenLastCalledWith({
      payment_intent_client_secret: 'clientSecret',
      requires_action: true
    });
    expect(res.status).toHaveBeenLastCalledWith(200);
    expect(mockPaymentIntentCreate).toHaveBeenLastCalledWith({
      amount: 2000,
      confirm: true,
      confirmation_method: 'manual',
      currency: 'gbp',
      description: 'Task details: taskText',
      metadata: {
        email: 'email@email.com',
        remoteAddress: '127.0.0.1'
      },
      payment_method: 'payment_method_id_tok_fr',
      receipt_email: 'email@email.com'
    });
    expect(mockPaymentIntentConfirm).not.toHaveBeenCalled();
  });

  it('returns an catched error', async () => {
    mockPaymentIntentConfirm.mockReturnValueOnce(Promise.reject(new Error('Connection lost')));

    await handler(req, res);

    expect(res.status).toHaveBeenLastCalledWith(500);
    expect(res.json).toHaveBeenLastCalledWith({ error: new Error('Connection lost') });
  });
});
