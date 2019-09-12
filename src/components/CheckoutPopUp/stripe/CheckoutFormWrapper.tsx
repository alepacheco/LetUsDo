import React from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutFormSelector from './CheckoutFormSelector';

export const CheckoutFormWrapper = () => (
  // @ts-ignore
  <StripeProvider apiKey={process.env.STRIPE_FRONT}>
    <Elements>
      <CheckoutFormSelector />
    </Elements>
  </StripeProvider>
);

export default CheckoutFormWrapper;
