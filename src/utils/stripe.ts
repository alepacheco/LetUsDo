import axios from 'axios';

type TryPayment = {
  taskText: string;
  email: string;
  payment_method_id?: string;
  payment_intent_id?: string;
  stripe: any;
};

const tryPayment = async ({
  taskText,
  email,
  payment_method_id,
  payment_intent_id,
  stripe
}: TryPayment): Promise<boolean | undefined> => {
  const {
    data: { requires_action, payment_intent_client_secret, success, error }
  } = await axios.post('/api/createPayment', {
    payment_method_id,
    payment_intent_id,
    taskText,
    email
  });

  if (error) {
    throw new Error(error);
  }

  if (success) {
    return true;
  }

  if (requires_action) {
    const { error, paymentIntent } = await stripe.handleCardAction(payment_intent_client_secret);

    if (error) {
      throw error;
    }

    return tryPayment({
      taskText,
      email,
      payment_intent_id: paymentIntent.id,
      stripe
    });
  }
};

type SubmitProps = {
  email: string;
  stripe: any;
  taskText: string;
};
export const submitPayment = async ({ email, stripe, taskText }: SubmitProps): Promise<boolean> => {
  try {
    const { paymentMethod, error } = await stripe.createPaymentMethod('card', {
      billing_details: {}
    });

    if (error) {
      throw error;
    }

    return (
      (await tryPayment({
        taskText,
        email,
        payment_method_id: paymentMethod.id,
        stripe
      })) || false
    );
  } catch (error) {
    console.log('set dialog to error');
    console.log(error);
    return false;
  }
};
