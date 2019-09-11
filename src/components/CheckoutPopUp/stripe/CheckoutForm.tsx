/* eslint-disable no-console */
import React from 'react';
import { bindActionCreators } from 'redux';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { connect } from 'react-redux';
import { CardElement, injectStripe } from 'react-stripe-elements';
import 'src/styles/components/stripe.css';
import { submitPayment } from 'src/utils/stripe';
// @ts-ignore
import * as actions from 'src/actions/taskModalActions';

export const CheckoutForm: React.FC<{
  email: string;
  taskText: string;
  stripe?: any;
  validEmail: boolean;
  actions: { setDialog: (state: string) => void };
}> = ({ email, stripe, taskText, actions: { setDialog }, validEmail }) => {
  const onClick = async () => {
    console.log('Set loading here but keep the element alive.');
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
