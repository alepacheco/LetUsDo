import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import '../../styles/components/CheckoutPopUp.scss';
import { validateEmail } from '../../utils/generic';
import * as checkoutPopUpActions from '../../actions/checkoutPopUpActions';
import * as taskModalActions from '../../actions/taskModalActions';

import CheckoutContent from './CheckoutContent';
import PurchaseCompletedContent from './PurchaseCompletedContent';
import PurchaseErrorContent from './PurchaseErrorContent';

type GetContentByTypeProps = {
  type: 'open' | 'purchaseCompleted' | 'closed' | 'purchaseError' | 'purchaseLoading';
  taskText: string;
  onChangeEmail: (email: string) => void;
  email: string;
};
const GetContentByType = ({ type, taskText, onChangeEmail, email }: GetContentByTypeProps) => {
  if (type === 'open') {
    return <CheckoutContent taskText={taskText} onChangeEmail={onChangeEmail} email={email} />;
  }
  if (type === 'purchaseCompleted') {
    return <PurchaseCompletedContent />;
  }
  if (type === 'purchaseError') {
    return <PurchaseErrorContent />;
  }
  if (type === 'purchaseLoading') {
    return (
      <CheckoutContent taskText={taskText} onChangeEmail={onChangeEmail} email={email} loading />
    );
  }

  return <PurchaseErrorContent />;
};

type CheckoutPopUpByTypeProps = {
  actions: {
    setCheckoutEmailValid: (valid: boolean) => void;
    setCheckoutEmail: (email: string) => void;
    setDialog: (
      state: 'open' | 'purchaseCompleted' | 'closed' | 'purchaseError' | 'purchaseLoading'
    ) => void;
  };
  checkoutPopupState: 'open' | 'purchaseCompleted' | 'closed' | 'purchaseError' | 'purchaseLoading';
  taskText: string;
  email: string;
};
export const CheckoutPopUpByType: React.FC<CheckoutPopUpByTypeProps> = ({
  actions,
  checkoutPopupState,
  taskText,
  email
}) => {
  const onChangeEmail = (event: any) => {
    const emailValid = validateEmail(event.target.value);

    actions.setCheckoutEmailValid(emailValid);
    actions.setCheckoutEmail(event.target.value);
  };

  const onHideCheckoutPopUp = () => {
    actions.setDialog('closed');
  };

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
};

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
)(CheckoutPopUpByType);
