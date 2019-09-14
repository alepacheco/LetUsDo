import React from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutFormSelector from './CheckoutFormSelector';

export const CheckoutFormWrapper = ({ loading }: { loading?: boolean }) => (
  // @ts-ignore
  <StripeProvider apiKey={process.env.STRIPE_FRONT}>
    <Elements>
      <CheckoutFormSelector loading={loading || false} />
    </Elements>
  </StripeProvider>
);

export default CheckoutFormWrapper;
