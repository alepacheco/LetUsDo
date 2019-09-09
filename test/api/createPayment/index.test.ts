import { handler, executePayment } from '../../../api/createPayment/index';

const stripe = require('stripe');

jest.mock('stripe', () => () => ({
  charges: {
    create: jest
      .fn()
      .mockReturnValueOnce({ status: 'succeeded', livemode: true })
      .mockReturnValueOnce({ status: 'error', livemode: true })
      .mockReturnValueOnce(Promise.reject(new Error('Connection lost')))
      .mockReturnValueOnce({ status: 'succeeded', livemode: true })
      .mockReturnValueOnce({ status: 'error', livemode: true })
      .mockReturnValueOnce(Promise.reject(new Error('Connection lost')))
  }
}));

describe('/createPayment', () => {
  const req = {
    method: 'POST',
    body: {
      token: { id: 'purchaseIdToken' },
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
    await handler(<any>req, <any>res);

    expect(res.status).toHaveBeenLastCalledWith(200);
    expect(res.json).toHaveBeenLastCalledWith({ status: 'ok' });
  });

  it('returns an Unknown error', async () => {
    await handler(<any>req, <any>res);

    expect(res.status).toHaveBeenLastCalledWith(500);
    expect(res.json).toHaveBeenLastCalledWith({ error: 'Unknown error while executing payment' });
  });

  it('returns an catched error', async () => {
    await handler(<any>req, <any>res);

    expect(res.status).toHaveBeenLastCalledWith(500);
    expect(res.json).toHaveBeenLastCalledWith({ error: 'Connection lost' });
  });

  describe('executePayment', () => {
    const demoData = {
      token: { id: 1234 },
      amount: 100,
      taskText: 'This is my task',
      email: 'test@example.com',
      remoteAddress: '127.0.0.1'
    };

    it('resturns ok', async () => {
      const paymentCompleted = await executePayment(demoData);

      expect(paymentCompleted).toEqual('succeeded');
    });

    it('resturns false', async () => {
      const paymentCompleted = await executePayment(demoData);

      expect(paymentCompleted).toEqual('Unknown error while executing payment');
    });

    it('resturns error', async () => {
      const paymentCompleted = await executePayment(demoData);

      expect(paymentCompleted).toEqual('Connection lost');
    });
  });
});
