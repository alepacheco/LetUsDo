import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../../styles/components/CheckoutPopUp.css';
import * as checkoutPopUpActions from '../../actions/checkoutPopUpActions';
import * as taskModalActions from '../../actions/taskModalActions';
import { CheckoutContent } from './CheckoutContent';
import { PurchaseCompletedContent } from './PurchaseCompletedContent';
import { validateEmail } from '../../utils/generic';

type GetContentByTypeProps = {
  type: 'open' | 'purchaseCompleted' | 'closed';
  taskText: string;
  onChangeEmail: (email: string) => void;
  email: string;
}
const GetContentByType = ({ type, taskText, onChangeEmail, email }: GetContentByTypeProps) => {
  if (type === 'open') {
    return <CheckoutContent taskText={taskText} onChangeEmail={onChangeEmail} email={email} />;
  }
  if (type === 'purchaseCompleted') {
    return <PurchaseCompletedContent />;
  }

  return <div />;
};

type CheckoutPopUpProps = {
  actions: {
    setCheckoutEmailValid: (valid: boolean) => void;
    setCheckoutEmail: (email: string) => void;
    setDialog: (state: string) => void;
  }
  checkoutPopupState: 'open' | 'closed' | 'purchaseCompleted';
  taskText: string;
  email: string;
};
export const CheckoutPopUp: React.FC<CheckoutPopUpProps> = ({ actions, checkoutPopupState, taskText, email }) => {
  const onChangeEmail = (event: any) => {
    const emailValid = validateEmail(event.target.value);

    actions.setCheckoutEmailValid(emailValid);
    actions.setCheckoutEmail(event.target.value);
  }

  const onHideCheckoutPopUp = () => {
    actions.setDialog('closed');
  }

  return (
    <Modal
      show={checkoutPopupState !== 'closed'}
      onHide={onHideCheckoutPopUp}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <GetContentByType
        type={checkoutPopupState}
        taskText={taskText}
        onChangeEmail={onChangeEmail}
        email={email}
      />
    </Modal>
  );
}

const mapStateToProps = (state: any) => ({
  taskText: state.taskModal.taskText,
  email: state.checkoutPopUp.email,
  purchaseCompleted: state.checkoutPopUp.purchaseCompleted,
  checkoutPopupState: state.taskModal.checkoutPopupState
});

function mapDispatchToProps(dispatch: (action: any) => any) {
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
