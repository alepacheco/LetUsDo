import React from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import CheckoutFormWrapper from './stripe/CheckoutFormWrapper';

export const CheckoutContent = ({ taskText, onChangeEmail, email }) => (
  <>
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">Confirm order</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className="task-description-title">Task description</div>
      <div className="task-description-content">{taskText || 'No description specified'}</div>
      <Form>
        <Form.Group controlId="formBasicEmail" className="email-form">
          <Form.Control
            type="email"
            placeholder="Enter email"
            onChange={onChangeEmail}
            value={email}
          />
        </Form.Group>
      </Form>
      <CheckoutFormWrapper />
    </Modal.Body>
  </>
);

export default CheckoutContent;
