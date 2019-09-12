/* eslint-disable no-console */
import React from 'react';
import { bindActionCreators } from 'redux';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { connect } from 'react-redux';
import { CardElement, injectStripe, ReactStripeElements } from 'react-stripe-elements';
import { trackEvent } from 'src/utils/analytics';
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
    return;
  }

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

  paymentRequest.on('paymentmethod', async ev => {
    // @ts-ignore
    const { error: confirmError, paymentIntent } = await stripe.confirmPaymentIntent(
      process.env.STRIPE_FRONT,
      {
        payment_method: ev.paymentMethod.id
      }
    );

    if (confirmError || !process.env.STRIPE_FRONT) {
      // Report to the browser that the payment failed, prompting it to
      // re-show the payment interface, or show an error message and close
      // the payment interface.
      console.log('apple pay failed');
      ev.complete('fail');
    } else {
      // Report to the browser that the confirmation was successful, prompting
      // it to close the browser payment method collection interface.
      console.log('apple pay collected');
      ev.complete('success');
      // Let Stripe.js handle the rest of the payment flow.
      const { error } = await stripe.handleCardPayment(process.env.STRIPE_FRONT);
      if (error) {
        console.log('apple pay failed');
        // The payment failed -- ask your customer for a new payment method.
      } else {
        console.log('apple pay payed');
        // The payment has succeeded.
      }
    }
  });
};

export const CheckoutForm: React.FC<{
  email: string;
  taskText: string;
  stripe?: ReactStripeElements.StripeProps;
  validEmail: boolean;
  actions: { setDialog: (state: string) => void };
}> = ({ email, stripe, taskText, actions: { setDialog }, validEmail }) => {
  if (stripe) {
    // tryApplePay({ stripe });
  }

  const onClick = async () => {
    console.log('Set loading here but keep the element alive.');
    trackEvent({
      category: 'click',
      action: 'pay button clicked'
    });
    trackEvent({
      category: 'purchase',
      action: 'purchase initiated'
    });

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
      trackEvent({
        category: 'purchase',
        action: 'purchase completed'
      });
    } else {
      setDialog('purchaseFailed');
      trackEvent({
        category: 'purchase',
        action: 'purchase failed'
      });
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
