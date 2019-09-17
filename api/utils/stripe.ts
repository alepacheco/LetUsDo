import * as Stripe from 'stripe';

type HandleErrorArgs = {
    status?: string;
    next_action?: {
        type: string;
    };
    client_secret?: string;
};

export const handleError = async (func: () => Promise<HandleErrorArgs>) => {
    try {
        const { status, next_action, client_secret } = await func();

        if (status === 'requires_action' && next_action && next_action.type === 'use_stripe_sdk') {
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

type ExecutePaymentMethod = {
    payment_method_id: string;
    amount: number;
    taskText: string;
    metadata: {
        email: string;
        remoteAddress: string;
        name: string;
        phone: string;
    };

    stripe: Stripe;
};
export const executePaymentMethod = async ({
    payment_method_id,
    amount,
    taskText,
    metadata,
    stripe
}: ExecutePaymentMethod) => handleError(() => stripe.paymentIntents.create({
    payment_method: payment_method_id,
    amount,
    description: `Task details: ${taskText}`,
    currency: 'gbp',
    receipt_email: metadata.email,
    confirmation_method: 'manual',
    confirm: true,
    metadata
}));


type ExecutePaymentIntent = {
    payment_intent_id: string;
    stripe: Stripe;
};
export const executePaymentIntent = async ({ stripe, payment_intent_id }: ExecutePaymentIntent) =>
    handleError(() => stripe.paymentIntents.confirm(
        payment_intent_id
    ));
