/* eslint-disable no-console */
import React, { useState } from 'react';
import 'src/styles/components/stripe.css';
import CheckoutForm from './CheckoutForm';
import CheckoutApplePay from './CheckoutApplePay';
import { connect } from 'react-redux';

export const CheckoutFormSelector: React.FC<{ applePayAvailable: boolean }> = ({
  applePayAvailable
}) => {
  if (applePayAvailable || applePayAvailable === null) {
    return <CheckoutApplePay />;
  }
  return <CheckoutForm />;
};

const mapStateToProps = (state: any) => ({
  applePayAvailable: state.taskModal.applePayAvailable
});

export default connect(mapStateToProps)(CheckoutFormSelector);
