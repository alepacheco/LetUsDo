import React from 'react';
import Modal from 'react-bootstrap/Modal';

export const PurchaseErrorContent = () => (
  <>
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">An error has occurred</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className="task-description-title">
        Something went wrong and your payment has not been executed.
      </div>
      <div className="task-description-content">
        Please try again, if you still have issues send us an email at:{' '}
        <a href="mailto:support@letusdo.app">support@letusdo.app</a>
      </div>
    </Modal.Body>
  </>
);

export default PurchaseErrorContent;
