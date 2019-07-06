import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { CardElement, injectStripe } from 'react-stripe-elements';
import '../../styles/components/stripe.css';

class CheckoutForm extends Component {
  constructor(props) {
    super(props);
    this.state = { complete: false };
    this.submit = this.submit.bind(this);
  }

  async submit(ev) {
    let { token } = await this.props.stripe.createToken({ name: "Name" });
    let response = await fetch("/charge", {
      method: "POST",
      headers: { "Content-Type": "text/plain" },
      body: token.id
    });

    if (response.ok) console.log("Purchase Complete!")
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