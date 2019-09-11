import React from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

export const CheckoutFormWrapper = () => (
  // @ts-ignore
  <StripeProvider apiKey={process.env.STRIPE_FRONT}>
    <Elements>
      <CheckoutForm />
    </Elements>
  </StripeProvider>
);

export default CheckoutFormWrapper;
