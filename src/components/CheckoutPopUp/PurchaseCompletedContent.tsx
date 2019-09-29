import React from 'react';
import Modal from 'react-bootstrap/Modal';

export const PurchaseCompletedContent = () => (
  <>
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">Purchase confirmed</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className="task-description-title">
        We have received your task and the paymnent has been confirmed.
      </div>
      <div className="task-description-content">
        You will receive an update when it&apos;s completed. If you have any inquiries in the
        meantime contact us at: <a href="mailto:support@letusdo.app">support@letusdo.app</a>
      </div>
    </Modal.Body>
  </>
);

export default PurchaseCompletedContent;
