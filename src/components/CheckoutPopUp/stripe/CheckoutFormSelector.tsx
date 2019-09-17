/* eslint-disable no-console */
import React, { useState } from 'react';
import 'src/styles/components/stripe.scss';
import CheckoutForm from './CheckoutForm';
import CheckoutApplePay from './CheckoutApplePay';
import { connect } from 'react-redux';

export const CheckoutFormSelector: React.FC<{ applePayAvailable: boolean; loading: boolean }> = ({
  applePayAvailable,
  loading
}) => {
  if (applePayAvailable || applePayAvailable === null) {
    return <CheckoutApplePay />;
  }
  return <CheckoutForm loading={loading} />;
};

const mapStateToProps = (state: any) => ({
  applePayAvailable: state.taskModal.applePayAvailable
});

export default connect(mapStateToProps)(CheckoutFormSelector);
