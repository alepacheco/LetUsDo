import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CheckoutFormWrapper from './stripe/CheckoutFormWrapper';
import '../styles/components/CheckoutPopUp.css';

class CheckoutPopUp extends React.Component {
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
          <div>
            Task description: {this.props.taskText || 'No description specified'}
          </div>
          <Form>
            <Form.Group controlId="formBasicEmail" className="email-form">
            <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>
          </Form>

          <CheckoutFormWrapper />
        </Modal.Body>

      </Modal>
    );
  }
}

const mapStateToProps = (state) => ({
  taskText: state.taskModal.taskText
});

export default connect(
  mapStateToProps
)(CheckoutPopUp);

CheckoutPopUp.propTypes = {
  onHide: PropTypes.func,
  taskText: PropTypes.string
};