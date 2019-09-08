/* eslint-disable no-console */
import React from 'react';
import { bindActionCreators } from 'redux';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { connect } from 'react-redux';
import { CardElement, injectStripe } from 'react-stripe-elements';
import '../../../styles/components/stripe.css';
import PropTypes from 'prop-types';
import axios from 'axios';
import * as actions from '../../../actions/taskModalActions';

const submit = async ({ email, stripe, taskText, setDialog }) => {
  const { token, error: createTokenError } = await stripe.createToken({
    name: 'Let Us Do'
  });
  if (!token) {
    console.log(createTokenError);
    return;
  }

  try {
    await axios.post('/api/createPayment', {
      token,
      email,
      taskText
    });

    setDialog('purchaseCompleted');
  } catch (error) {
    console.log(error.message);
  }
};

export const CheckoutForm = ({ email, stripe, taskText, actions: { setDialog }, validEmail }) => {
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

const mapStateToProps = state => ({
  validEmail: state.checkoutPopUp.validEmail,
  email: state.checkoutPopUp.email,
  taskText: state.taskModal.taskText
});
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectStripe(CheckoutForm));

CheckoutForm.propTypes = {
  validEmail: PropTypes.bool.isRequired,
  email: PropTypes.string.isRequired,
  taskText: PropTypes.string.isRequired,
  stripe: PropTypes.object.isRequired,
  actions: PropTypes.shape({
    setDialog: PropTypes.func
  }).isRequired
};
