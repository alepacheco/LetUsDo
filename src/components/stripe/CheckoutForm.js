import React from 'react';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { connect } from 'react-redux';
import { CardElement, injectStripe } from 'react-stripe-elements';
import '../../styles/components/stripe.css';
import PropTypes from 'prop-types';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { complete: false };
    this.submit = this.submit.bind(this);
  }

  async submit() {
    const { token } = await this.props.stripe.createToken({ name: "We Do" });
    
    if (!token) {
      console.log("No card!");
      return;
    }

    const response = await fetch("/api/createPayment", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: JSON.stringify(token)
    });

    if (response.ok) console.log("Purchase Complete!")
    if (!response.ok) console.log("Error!")
    if (response.ok) this.setState({ complete: true });

  }

  render() {
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
            disabled={!this.props.validateEmail}>
              Pay <Badge pill variant="light"> 20£</Badge>
          </Button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  validateEmail: state.checkoutPopUp.validateEmail
});

export default connect(
  mapStateToProps
)(injectStripe(CheckoutForm));

CheckoutForm.propTypes = {
  validateEmail: PropTypes.string
};