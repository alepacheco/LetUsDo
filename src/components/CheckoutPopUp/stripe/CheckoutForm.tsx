/* eslint-disable no-console */
import React from 'react';
import { bindActionCreators } from 'redux';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { connect } from 'react-redux';
import { CardElement, injectStripe } from 'react-stripe-elements';
import 'src/styles/components/stripe.css';
import axios from 'axios';
// @ts-ignore
import * as actions from 'src/actions/taskModalActions';

type SubmitProps = {
  email: string;
  stripe: any;
  taskText: string;
  setDialog: (state: string) => void;
};
const submit = async ({ email, stripe, taskText, setDialog }: SubmitProps) => {
  try {
    const { paymentMethod, error } = await stripe.createPaymentMethod('card', {
      billing_details: {}
    });

    if (error) {
      throw error;
    }

    const response = await axios.post('/api/createPayment', {
      payment_method_id: paymentMethod.id,
      taskText,
      email
    });

    console.log(response);
    const {
      data: { requires_action, payment_intent_client_secret }
    } = response;

    if (requires_action) {
      const { error, paymentIntent } = await stripe.handleCardAction(payment_intent_client_secret);

      if (error) {
        throw error;
      }

      const {
        body: { requires_action }
      } = await axios.post('/api/createPayment', {
        payment_intent_id: paymentIntent.id,
        taskText,
        email
      });

      if (requires_action) {
        throw new Error('Try payment in a loop');
      }
    } else {
      setDialog('purchaseCompleted');
    }
  } catch (error) {
    console.log('set dialog to error');
    console.log(error);
  }
};

export const CheckoutForm: React.FC<{
  email: string;
  taskText: string;
  stripe?: any;
  validEmail: boolean;
  actions: { setDialog: (state: string) => void };
}> = ({ email, stripe, taskText, actions: { setDialog }, validEmail }) => {
  const onClick = () =>
    submit({
      email,
      stripe,
      taskText,
      setDialog
    });

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
