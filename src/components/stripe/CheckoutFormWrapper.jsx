import React from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

const debug = () => {
  window.process = process;
  return process.env.STRIPE_FRONT;
};

const CheckoutFormWrapper = () => (
  <StripeProvider apiKey={debug()}>
    <Elements>
      <CheckoutForm />
    </Elements>
  </StripeProvider>
);

export default CheckoutFormWrapper;
