/* eslint-disable no-console */
import React from 'react';
import 'src/styles/components/stripe.scss';
import { connect } from 'react-redux';
import CheckoutForm from './CheckoutForm';
import CheckoutApplePay from './CheckoutApplePay';

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
