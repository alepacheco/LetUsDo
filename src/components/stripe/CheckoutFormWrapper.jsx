import React from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

const CheckoutFormWrapper = () => (
  <StripeProvider
    apiKey={console.log({ key: process.env.STRIPE_FRONT }) || process.env.STRIPE_FRONT}
  >
    <Elements>
      <CheckoutForm />
    </Elements>
  </StripeProvider>
);

export default CheckoutFormWrapper;
