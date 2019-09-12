import React from 'react';
import { injectStripe, PaymentRequestButtonElement } from 'react-stripe-elements';
import * as actions from 'src/actions/taskModalActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class CheckoutApplePay extends React.Component<any, any> {
  constructor(props: any) {
    super(props);

    const paymentRequest = props.stripe.paymentRequest({
      country: 'GB',
      currency: 'gbp',
      total: {
        label: 'Task fixed price',
        amount: 99
      },
      requestPayerName: true,
      requestPayerEmail: true,
      requestPayerPhone: true
    });

    paymentRequest.on('token', ({ complete, token, ...data }: any) => {
      console.log('Received Stripe token: ', token);
      console.log('Received customer information: ', data);
      complete('success');
    });

    paymentRequest.canMakePayment().then((result: any) => {
      this.setState({ canMakePayment: !!result });
      this.props.actions.setApplePayAvailable(!!result);

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
      />
    ) : null;
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  () => ({}),
  mapDispatchToProps
)(injectStripe(CheckoutApplePay));
