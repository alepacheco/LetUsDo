/* eslint-disable no-console */
import React, { useState } from 'react';
import {
  injectStripe,
  ReactStripeElements,
  PaymentRequestButtonElement
} from 'react-stripe-elements';
import 'src/styles/components/stripe.css';
import CheckoutForm from './CheckoutForm';
import CheckoutApplePay from './CheckoutApplePay';

export const CheckoutFormSelector: React.FC<{ stripe?: ReactStripeElements.StripeProps }> = ({
  stripe
}) => {
  return (
    <>
      <CheckoutForm />
      <CheckoutApplePay />
    </>
  );
};

export default injectStripe(CheckoutFormSelector);
