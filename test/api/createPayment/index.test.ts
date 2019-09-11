import { handler, executePaymentMethod } from '../../../api/createPayment/index';
process.env.STRIPE_SERVER = 'sk_test_Fe8VrGftldFe2Vy3e38I65Gv00qN5qwLa5';

const stripe = require('stripe');
const mockPaymentIntentCreate = jest.fn();
const mockPaymentIntentConfirm = jest.fn();

const constantDate = new Date('Tue Jun 13 2017 04:41:20');
constantDate.setUTCHours(0, 0, 0, 0);

// @ts-ignore
Date = class extends Date {
  constructor() {
    super();
    return constantDate;
  }
};

jest.mock('stripe', () => () => ({
  paymentIntents: {
    create: mockPaymentIntentCreate,
    confirm: mockPaymentIntentConfirm
  }
}));

jest.resetModules();

xdescribe('/createPayment', () => {
  const req = {
    method: 'POST',
    body: {
      token: { id: 'tok_fr' },
      email: 'email@email.com',
      taskText: 'taskText'
    },
    connection: {
      remoteAddress: '127.0.0.1'
    }
  };
  const res = {
    send: jest.fn(),
    status: jest.fn(),
    json: jest.fn()
  };
  res.status.mockReturnValue(res);

  it('returns ok', async () => {
    mockPaymentIntentCreate.mockReturnValueOnce({ status: 'succeeded', livemode: true });

    await handler(<any>req, <any>res);

    expect(res.json).toHaveBeenLastCalledWith({ status: 'ok' });
    expect(res.status).toHaveBeenLastCalledWith(200);
    expect(mockPaymentIntentCreate).toHaveBeenLastCalledWith({
      amount: 50,
      currency: 'gbp',
      description: 'Let Us Do task : taskText',
      metadata: {
        amount: 50,
        email: 'email@email.com',
        remoteAddress: '127.0.0.1',
        timeStamp: '2017-06-13T00:00:00.000Z'
      },
      receipt_email: 'email@email.com',
      source: 'tok_fr'
    });
  });

  it('returns an Unknown error', async () => {
    mockPaymentIntentCreate.mockReturnValueOnce({ status: 'error', livemode: true });

    await handler(<any>req, <any>res);

    expect(res.status).toHaveBeenLastCalledWith(500);
    expect(res.json).toHaveBeenLastCalledWith({ error: 'Unknown error while executing payment' });
  });

  it('returns an catched error', async () => {
    mockPaymentIntentCreate.mockReturnValueOnce(Promise.reject(new Error('Connection lost')));

    await handler(<any>req, <any>res);

    expect(res.status).toHaveBeenLastCalledWith(500);
    expect(res.json).toHaveBeenLastCalledWith({ error: 'Connection lost' });
  });

  describe('executePaymentMethod', () => {
    const demoData = {
      payment_method_id: '1234',
      amount: 100,
      taskText: 'This is my task',
      email: 'test@example.com',
      remoteAddress: '127.0.0.1',
      stripe
    };

    it('resturns ok', async () => {
      mockPaymentIntentCreate.mockReturnValueOnce({ status: 'succeeded', livemode: true });

      const paymentCompleted = await executePaymentMethod(demoData);

      expect(paymentCompleted).toEqual('succeeded');

      expect(mockPaymentIntentCreate).toHaveBeenLastCalledWith({
        amount: 100,
        currency: 'gbp',
        description: 'Let Us Do task : This is my task',
        metadata: {
          amount: 100,
          email: 'test@example.com',
          remoteAddress: '127.0.0.1',
          timeStamp: '2017-06-13T00:00:00.000Z'
        },
        receipt_email: 'test@example.com',
        source: '1234'
      });
    });

    it('resturns false', async () => {
      mockPaymentIntentCreate.mockReturnValueOnce({ status: 'error', livemode: true });

      const paymentCompleted = await executePaymentMethod(demoData);

      expect(paymentCompleted).toEqual('Unknown error while executing payment');
    });

    it('resturns error', async () => {
      mockPaymentIntentCreate.mockReturnValueOnce(Promise.reject(new Error('Connection lost')));

      const paymentCompleted = await executePaymentMethod(demoData);

      expect(paymentCompleted).toEqual('Connection lost');
    });
  });
});
