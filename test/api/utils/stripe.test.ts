import { executePaymentMethod, handleError } from '../../../api/utils/stripe';
process.env.STRIPE_SERVER = 'sk_test_Fe8VrGftldFe2Vy3e38I65Gv00qN5qwLa5';

const mockPaymentIntentCreate = jest.fn();
const mockPaymentIntentConfirm = jest.fn();

const mockStripeModule = {
    paymentIntents: {
        create: mockPaymentIntentCreate,
        confirm: mockPaymentIntentConfirm
    }
};

jest.mock('stripe', () => () => mockStripeModule);

jest.resetModules();

describe('executePaymentMethod', () => {
    const demoData = {
        payment_method_id: '1234',
        amount: 100,
        taskText: 'This is my task',
        email: 'test@example.com',
        remoteAddress: '127.0.0.1',
        stripe: mockStripeModule
    };

    it('resturns ok', async () => {
        mockPaymentIntentCreate.mockReturnValueOnce({ status: 'succeeded' });

        const paymentCompleted = await executePaymentMethod(demoData);

        expect(paymentCompleted).toEqual({ response: { success: true }, status: 200 });

        expect(mockPaymentIntentCreate).toHaveBeenLastCalledWith({
            amount: 100,
            confirm: true,
            confirmation_method: 'manual',
            currency: 'gbp',
            payment_method: '1234'
        });
    });

    it('resturns error', async () => {
        mockPaymentIntentCreate.mockReturnValueOnce(Promise.reject(new Error('Connection lost')));

        const paymentCompleted = await executePaymentMethod(demoData);

        expect(paymentCompleted).toEqual({
            response: {
                error: new Error('Connection lost')
            },
            status: 500
        });
    });
});


describe('handleError', () => {
    it('returns true if all good', async () => {
        const result = await handleError(() => Promise.resolve(({
            status: 'succeeded',
            next_action: {
                type: '123'
            },
            client_secret: '123432'
        })));

        expect(result).toEqual({
            response: {
                success: true
            },
            status: 200
        });
    });

    it('returns false if func breaks', async () => {
        const result = await handleError(() => Promise.reject(new Error('Connection lost')));

        expect(result).toEqual({
            response: {
                error: new Error('Connection lost')
            },
            status: 500
        });
    });

    it('returns false if func returns empty', async () => {
        const result = await handleError(() => Promise.resolve(({
            status: 'error',
        })));

        expect(result).toEqual({
            error: 'Unknown error while executing payment',
            status: 500
        });
    });
});