import React from 'react';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { connect } from 'react-redux';
import CheckoutFormWrapper from './stripe/CheckoutFormWrapper';

const EmailForm = ({ onChangeEmail, email }: any) => (
  <Form>
    <Form.Group controlId="formBasicEmail" className="email-form">
      <Form.Control type="email" placeholder="Enter email" onChange={onChangeEmail} value={email} />
    </Form.Group>
  </Form>
);

type CheckoutContentProps = {
  taskText: string;
  onChangeEmail: (value: any) => void;
  email: string;
  applePayAvailable?: any;
  loading?: boolean;
};
export const CheckoutContent = ({
  taskText,
  onChangeEmail,
  email,
  applePayAvailable,
  loading
}: CheckoutContentProps) => (
  <>
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        {loading ? 'Waiting confirmation' : 'Confirm order'}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className="task-description-title">
        {loading ? 'Give us a moment while we confirm your payment' : 'Task description'}
      </div>
      <div className="task-description-content">
        {loading ? '' : taskText || 'No description specified'}
      </div>

      {!applePayAvailable && <EmailForm onChangeEmail={onChangeEmail} email={email} />}

      <CheckoutFormWrapper loading={loading || false} />
    </Modal.Body>
  </>
);

const mapStateToProps = (state: any) => ({
  applePayAvailable: state.taskModal.applePayAvailable
});

export default connect(mapStateToProps)(CheckoutContent);
