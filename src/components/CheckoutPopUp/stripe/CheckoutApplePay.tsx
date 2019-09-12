import React from 'react';
import { injectStripe, PaymentRequestButtonElement } from 'react-stripe-elements';

class CheckoutApplePay extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    const paymentRequest = props.stripe.paymentRequest({
      country: 'GB',
      currency: 'gbp',
      total: {
        label: 'Demo total',
        amount: 1000
      }
    });

    paymentRequest.on('token', ({ complete, token, ...data }: any) => {
      console.log('Received Stripe token: ', token);
      console.log('Received customer information: ', data);
      complete('success');
    });

    paymentRequest.canMakePayment().then((result: any) => {
      this.setState({ canMakePayment: !!result });
      console.log({ canMakePayment: !!result });
    });

    this.state = {
      canMakePayment: false,
      paymentRequest
    };
  }

  render() {
    return this.state.canMakePayment ? (
      <PaymentRequestButtonElement
        paymentRequest={this.state.paymentRequest}
        className="PaymentRequestButton"
        style={{
          paymentRequestButton: {
            theme: 'light',
            height: '64px'
          }
        }}
      />
    ) : null;
  }
}
export default injectStripe(CheckoutApplePay);
