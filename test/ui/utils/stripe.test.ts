/* eslint-disable no-undef */
import { submitPayment } from 'src/utils/stripe';

jest.mock('axios', () => ({
  post: jest.fn()
    .mockReturnValueOnce(Promise.resolve({
      data: {
        success: true
      }
    }))
    .mockReturnValueOnce(Promise.resolve({
      data: {
        requires_action: true,
        payment_intent_client_secret: 344324
      }
    }))
    .mockReturnValueOnce(Promise.resolve({
      data: {
        success: true
      }
    }))
}));

jest.resetModules();

// @ts-ignore
global.console = { log: jest.fn() };

const mockCreatePaymentMethod = jest.fn();
const mockHandleCardAction = jest.fn();

describe('stripe utils', () => {
  describe('submitPayment', () => {
    beforeEach(() => {
      mockCreatePaymentMethod.mockReset();
    });

    const stripeMock: any = {
      createPaymentMethod: mockCreatePaymentMethod,
      handleCardAction: mockHandleCardAction
    }

    const props = {
      email: 'email@example.com',
      stripe: stripeMock,
      taskText: 'this is my task'
    };

    it('breaks if CreatePaymentMethod fails', async () => {
      mockCreatePaymentMethod.mockReturnValueOnce({
        paymentMethod: { id: 123 }, error: new Error('Connection lost')
      });

      const result = await submitPayment(props);
      expect(result).toEqual(false);

      expect(mockCreatePaymentMethod).toHaveBeenLastCalledWith("card");
    });

    it('returns true if completed simply', async () => {
      mockCreatePaymentMethod.mockReturnValueOnce({
        paymentMethod: { id: 123 }, error: false
      });

      const result = await submitPayment(props);
      expect(result).toEqual(true);
      expect(mockCreatePaymentMethod).toHaveBeenLastCalledWith("card");
    });

    it('returns true if completed with 2fa', async () => {
      mockCreatePaymentMethod.mockReturnValueOnce({
        paymentMethod: { id: 123 }, error: false
      });

      mockHandleCardAction.mockReturnValueOnce({ error: null, paymentIntent: { id: 4321 } })

      const result = await submitPayment(props);
      expect(mockHandleCardAction).toHaveBeenLastCalledWith(344324)
      expect(result).toEqual(true);
      expect(mockCreatePaymentMethod).toHaveBeenLastCalledWith('card');
    });
  });


});

