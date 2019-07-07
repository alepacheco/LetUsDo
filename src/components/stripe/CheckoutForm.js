import React from 'react';
import Button from 'react-bootstrap/Button';
import { CardElement, injectStripe } from 'react-stripe-elements';
import '../../styles/components/stripe.css';

class CheckoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { complete: false };
    this.submit = this.submit.bind(this);
  }

  async submit() {
    const { token } = await this.props.stripe.createToken({ name: "Name" });

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
          <Button className="pay-button" onClick={this.submit}>Pay</Button>
        </div>
      </div>
    );
  }
}

export default injectStripe(CheckoutForm);