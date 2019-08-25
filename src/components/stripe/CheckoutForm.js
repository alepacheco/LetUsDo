/* eslint-disable no-console */
import React from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { connect } from 'react-redux';
import { CardElement, injectStripe } from 'react-stripe-elements';
import '../../styles/components/stripe.css';
import PropTypes from 'prop-types';
import axios from 'axios';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { complete: false };
    this.submit = this.submit.bind(this);
  }

  async submit() {
    const { token } = await this.props.stripe.createToken({ name: "Let Us Do" });
    
    if (!token) {
      // No card present
      console.log('no card');
      return;
    }

    try {
      // eslint-disable-next-line no-unused-vars
      const response = await axios.post('/api/createPayment', {
        token,
        email: this.props.email,
        taskText: this.props.taskText
      })
      this.setState({ complete: true });
    } catch (error) {
      console.log(error.message);
    }
  }

  render() {
    // TODO improve
    if (this.state.complete) return <h1>Purchase Complete</h1>;

    return (
      <div className="checkout">
        <div className="card-numer-field">
          <CardElement />
        </div>
        <div className="pay-button-wrapper">
          <Button
            className="pay-button"
            onClick={this.submit}
            disabled={!this.props.validEmail}>
              Pay <Badge pill variant="light"> 20£</Badge>
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  validEmail: state.checkoutPopUp.validEmail,
  email: state.checkoutPopUp.email,
  taskText: state.taskModal.taskText
});

export default connect(
  mapStateToProps
)(injectStripe(CheckoutForm));

CheckoutForm.propTypes = {
  validEmail: PropTypes.bool,
  email: PropTypes.string,
  taskText: PropTypes.string,
  stripe: PropTypes.object
};