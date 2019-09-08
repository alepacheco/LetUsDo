import { handler } from '../../../api/createPayment/index';

jest.mock(
  'stripe',
  () =>
    class Stripe {
      charges = {
        create: jest
          .fn()
          .mockReturnValueOnce({ status: 'succeeded', livemode: true })
          .mockReturnValueOnce({ status: 'error', livemode: true })
          .mockReturnValueOnce(Promise.reject(new Error('Connection lost')))
      };
    }
);

describe('/createPayment', () => {
  const req = {
    method: 'POST',
    body: {
      token: { id: 'purchaseIdToken' },
      email: 'email@email.com',
      taskText: 'taskText'
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
});
