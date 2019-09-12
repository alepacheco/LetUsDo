import React from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import CheckoutFormWrapper from './stripe/CheckoutFormWrapper';
import { connect } from 'react-redux';

const EmailForm = ({ onChangeEmail, email }: any) => (
  <Form>
    <Form.Group controlId="formBasicEmail" className="email-form">
      <Form.Control type="email" placeholder="Enter email" onChange={onChangeEmail} value={email} />
    </Form.Group>
  </Form>
);

const applePayNotAvailable = (applePayAvailable: any) =>
  applePayAvailable === false || applePayAvailable === null;

type CheckoutContentProps = {
  taskText: string;
  onChangeEmail: (value: any) => void;
  email: string;
  applePayAvailable?: any;
};
export const CheckoutContent = ({
  taskText,
  onChangeEmail,
  email,
  applePayAvailable
}: CheckoutContentProps) => (
  <>
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">Confirm order</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className="task-description-title">Task description</div>
      <div className="task-description-content">{taskText || 'No description specified'}</div>
      {applePayNotAvailable(applePayAvailable) && (
        <EmailForm onChangeEmail={onChangeEmail} email={email} />
      )}
      <CheckoutFormWrapper />
    </Modal.Body>
  </>
);

const mapStateToProps = (state: any) => ({
  applePayAvailable: state.taskModal.applePayAvailable
});

export default connect(mapStateToProps)(CheckoutContent);
