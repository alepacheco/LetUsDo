import React from 'react';
import { injectStripe, PaymentRequestButtonElement } from 'react-stripe-elements';
import * as actions from 'src/actions/taskModalActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { tryPayment } from 'src/utils/stripe';
import { trackEvent } from 'src/utils/analytics';
import { ReactStripeElements } from 'react-stripe-elements';

type CheckoutApplePayProps = {
  actions: any;
  stripe?: ReactStripeElements.StripeProps;
  taskText: string;
};
type CheckoutApplePayState = {
  canMakePayment: boolean;
  paymentRequest: any;
};
export class CheckoutApplePay extends React.Component<
  CheckoutApplePayProps,
  CheckoutApplePayState
> {
  constructor(props: CheckoutApplePayProps) {
    super(props);

    const paymentRequest = props.stripe!.paymentRequest({
      country: 'GB',
      currency: 'gbp',
      total: {
        label: 'Task',
        amount: 2000 // Upper bound comfirmed by user, charged amount defined by server
      },
      requestPayerName: true,
      requestPayerEmail: true,
      requestPayerPhone: true
    });

    paymentRequest.on('paymentmethod', async event => {
      const purchaseCompleted = await tryPayment({
        payment_method_id: event.paymentMethod.id,
        stripe: this.props.stripe!,
        taskText: this.props.taskText,
        email: event.payerEmail,
        name: event.payerName,
        phone: event.payerPhone
      });

      if (purchaseCompleted) {
        event.complete('success');

        this.props.actions.setDialog('purchaseCompleted');
        trackEvent({
          category: 'purchase',
          action: 'purchase completed',
          label: 'apple pay'
        });
      } else {
        event.complete('fail');

        this.props.actions.setDialog('purchaseFailed');
        trackEvent({
          category: 'purchase',
          action: 'purchase failed',
          label: 'apple pay'
        });
      }
    });

    paymentRequest.canMakePayment().then((result: any) => {
      this.setState({ canMakePayment: !!result });
      this.props.actions.setApplePayAvailable(!!result);
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

const mapStateToProps = (state: any) => ({
  email: state.checkoutPopUp.email,
  taskText: state.taskModal.taskText
});

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(injectStripe(CheckoutApplePay));
