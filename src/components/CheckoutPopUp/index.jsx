import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import '../../styles/components/CheckoutPopUp.css';
import * as checkoutPopUpActions from '../../actions/checkoutPopUpActions';
import * as taskModalActions from '../../actions/taskModalActions';
import { CheckoutContent } from './CheckoutContent';
import { PurchaseCompletedContent } from './PurchaseCompletedContent';
import { validateEmail } from '../../utils/generic';

const GetContentByType = ({ type, taskText, onChangeEmail, email }) => {
  if (type === 'open') {
    return <CheckoutContent taskText={taskText} onChangeEmail={onChangeEmail} email={email} />;
  }
  if (type === 'purchaseCompleted') {
    return <PurchaseCompletedContent />;
  }

  return <div />;
};

export class CheckoutPopUp extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onHideCheckoutPopUp = this.onHideCheckoutPopUp.bind(this);
  }

  onChangeEmail(event) {
    const emailValid = validateEmail(event.target.value);

    this.props.actions.setCheckoutEmailValid(emailValid);
    this.props.actions.setCheckoutEmail(event.target.value);
  }

  onHideCheckoutPopUp() {
    this.props.actions.setDialog('closed');
  }

  render() {
    return (
      <Modal
        show={this.props.checkoutPopupState !== 'closed'}
        onHide={this.onHideCheckoutPopUp}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <GetContentByType
          type={this.props.checkoutPopupState}
          taskText={this.props.taskText}
          onChangeEmail={this.onChangeEmail}
          email={this.props.email}
        />
      </Modal>
    );
  }
}

const mapStateToProps = state => ({
  taskText: state.taskModal.taskText,
  email: state.checkoutPopUp.email,
  purchaseCompleted: state.checkoutPopUp.purchaseCompleted,
  checkoutPopupState: state.taskModal.checkoutPopupState
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(
      {
        ...taskModalActions,
        ...checkoutPopUpActions
      },
      dispatch
    )
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutPopUp);

CheckoutPopUp.propTypes = {
  taskText: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  checkoutPopupState: PropTypes.string.isRequired,
  actions: PropTypes.shape({
    setCheckoutEmailValid: PropTypes.func,
    setCheckoutEmail: PropTypes.func,
    setDialog: PropTypes.func
  }).isRequired
};
