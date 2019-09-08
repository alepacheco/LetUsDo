import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import CheckoutFormWrapper from './stripe/CheckoutFormWrapper';
import '../styles/components/CheckoutPopUp.css';
import * as checkoutPopUpActions from '../actions/checkoutPopUpActions';
import * as taskModalActions from '../actions/taskModalActions';

const validateEmail = email => {
  // eslint-disable-next-line no-useless-escape
  const validEmailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return validEmailRegex.test(String(email).toLowerCase());
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
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Confirm order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="task-description-title">Task description</div>
          <div className="task-description-content">
            {this.props.taskText || 'No description specified'}
          </div>
          <Form>
            <Form.Group controlId="formBasicEmail" className="email-form">
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={this.onChangeEmail}
                value={this.props.email}
              />
            </Form.Group>
          </Form>

          <CheckoutFormWrapper />
        </Modal.Body>
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
