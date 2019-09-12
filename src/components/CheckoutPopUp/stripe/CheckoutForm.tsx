/* eslint-disable no-console */
import React from 'react';
import { bindActionCreators } from 'redux';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { connect } from 'react-redux';
import { CardElement, injectStripe, ReactStripeElements } from 'react-stripe-elements';

import 'src/styles/components/stripe.css';
import { submitPayment } from 'src/utils/stripe';
// @ts-ignore
import * as actions from 'src/actions/taskModalActions';

const tryApplePay = async ({ stripe }: { stripe: ReactStripeElements.StripeProps }) => {
  const paymentRequest = stripe.paymentRequest({
    country: 'GB', // TODO check
    currency: 'gbp',
    total: {
      label: 'Price',
      amount: 50
    },
    requestPayerName: true,
    requestPayerEmail: true
  });

  const canUsePayBotton = await paymentRequest.canMakePayment();

  if (canUsePayBotton) {
    // @ts-ignore
    const elements = stripe.elements();

    const prButton = elements.create('paymentRequestButton', {
      paymentRequest
    });

    prButton.mount('#checkout-bottom');

    const element = document.getElementById('checkout-form');
    if (element) {
      element.style.display = 'none';
    }
  } else {
    const element = document.getElementById('checkout-bottom');
    if (element) {
      element.style.display = 'none';
    }
  }
};

export const CheckoutForm: React.FC<{
  email: string;
  taskText: string;
  stripe?: ReactStripeElements.StripeProps;
  validEmail: boolean;
  actions: { setDialog: (state: string) => void };
}> = ({ email, stripe, taskText, actions: { setDialog }, validEmail }) => {
  if (stripe) {
    tryApplePay({ stripe });
  }

  const onClick = async () => {
    console.log('Set loading here but keep the element alive.');
    if (!stripe) {
      setDialog('purchaseFailed');
      return;
    }

    const completed = await submitPayment({
      email,
      stripe,
      taskText
    });
    if (completed) {
      setDialog('purchaseCompleted');
    } else {
      setDialog('purchaseFailed');
    }
  };

  return (
    <div className="checkout">
      <div id="checkout-bottom" />
      <div id="checkout-form">
        <div className="card-numer-field">
          <CardElement />
        </div>
        <div className="pay-button-wrapper">
          <Button className="pay-button" onClick={onClick} disabled={!validEmail}>
            Pay{' '}
            <Badge pill variant="light">
              20£
            </Badge>
          </Button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state: any) => ({
  validEmail: state.checkoutPopUp.validEmail,
  email: state.checkoutPopUp.email,
  taskText: state.taskModal.taskText
});
const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectStripe(CheckoutForm));
