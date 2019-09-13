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

export const CheckoutForm: React.FC<{
  email: string;
  taskText: string;
  stripe?: ReactStripeElements.StripeProps;
  validEmail: boolean;
  actions: { setDialog: (state: string) => void };
}> = ({ email, stripe, taskText, actions: { setDialog }, validEmail }) => {
  const onClick = async () => {
    if (!stripe) {
      setDialog('purchaseFailed');
      return;
    }

    // TODO Set loading here but keep the element alive.
    
    trackEvent({
      category: 'click',
      action: 'pay button clicked'
    });
    trackEvent({
      category: 'purchase',
      action: 'purchase initiated'
    });

    const completed = await submitPayment({
      email,
      stripe,
      taskText
    });

    if (completed) {
      setDialog('purchaseCompleted');
      trackEvent({
        category: 'purchase',
        action: 'purchase completed',
        label: 'credit card'
      });
    } else {
      setDialog('purchaseFailed');
      trackEvent({
        category: 'purchase',
        action: 'purchase failed',
        label: 'credit card'
      });
    }
  };

  return (
    <div className="checkout">
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
