import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CheckoutFormWrapper from './stripe/CheckoutFormWrapper';
import { bindActionCreators } from 'redux';

import '../styles/components/CheckoutPopUp.css';
import * as actions from '../actions/checkoutPopUpActions';

const validateEmail = email => {
  // eslint-disable-next-line no-useless-escape
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

class CheckoutPopUp extends React.Component {
  constructor(props) {
    super(props);

    this.onChangeEmail = this.onChangeEmail.bind(this);
  }

  onChangeEmail(event) {
    const emailValid = validateEmail(event.target.value);

    this.props.actions.setCheckoutEmailValid(emailValid);
    this.props.actions.setCheckoutEmail(event.target.value);
  }

  render() {
    return (
      <Modal
        show={this.props.show}
        onHide={this.props.onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Confirm order
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="task-description-title">
            Task description
          </div>
          <div className="task-description-content">
            {this.props.taskText || 'No description specified'}
          </div>
          <Form>
            <Form.Group controlId="formBasicEmail" className="email-form">
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={this.onChangeEmail}
                value={this.props.email} />
            </Form.Group>
          </Form>

          <CheckoutFormWrapper />
        </Modal.Body>

      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  taskText: state.taskModal.taskText,
  email: state.checkoutPopUp.email
});

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CheckoutPopUp);

CheckoutPopUp.propTypes = {
  onHide: PropTypes.func,
  taskText: PropTypes.string,
  email: PropTypes.string,
  show: PropTypes.bool,
  actions: PropTypes.shape({
    setCheckoutEmailValid: PropTypes.func,
    setCheckoutEmail: PropTypes.func
  }),
};