import React from 'react';
import PropTypes from 'prop-types';

export const Modal = ({ modalOpen, closeModal, children }) => {
  if (!modalOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">
      <div className="modal-wrapper">
        <button className="close-modal-btn" onClick={closeModal}>Close</button>
        <div className='modal'>
          {children}
        </div>
      </div>
    </div>
  )
}

Modal.propTypes = {
  modalOpen: PropTypes.bool.isRequired,
  closeModal: PropTypes.func.isRequired,
  children: PropTypes.node,
};