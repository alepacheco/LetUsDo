import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import CheckoutFormWrapper from './stripe/CheckoutFormWrapper';

export default class CheckoutPopUp extends React.Component {
  render() {
    return (
      <Modal
        {...this.props}
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
          Details: fkmfkdfkdfkj
          <CheckoutFormWrapper />
        </Modal.Body>

      </Modal>
    );
  }
}

CheckoutPopUp.propTypes = {
  onHide: PropTypes.func
};