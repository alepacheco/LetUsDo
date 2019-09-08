import React from 'react';
import { Elements, StripeProvider } from 'react-stripe-elements';
import CheckoutForm from './CheckoutForm';

const CheckoutFormWrapper = () => (
  <StripeProvider apiKey="pk_test_TYooMQauvdEDq54NiTphI7jx">
    <Elements>
      <CheckoutForm />
    </Elements>
  </StripeProvider>
);

export default CheckoutFormWrapper;
