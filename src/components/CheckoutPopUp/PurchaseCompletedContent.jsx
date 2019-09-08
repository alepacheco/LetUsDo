import React from 'react';
import Modal from 'react-bootstrap/Modal';

export const PurchaseCompletedContent = () => (
  <>
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">Purchase confirmed</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className="task-description-title">Task description</div>
      <div className="task-description-content">Complete</div>
    </Modal.Body>
  </>
);

export default PurchaseCompletedContent;
