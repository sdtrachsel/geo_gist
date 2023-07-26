import React from 'react';
import { Article } from './Article';

export const Modal = ({ modalOpen, closeModal, children }) => {
  console.log('modal rendered')
  if (!modalOpen) {
    return null;
  }

  return (

    <div className="modal-overlay">
      <div className='modal'>
        <button className="close-modal-btn" onClick={closeModal}>Close</button>
        {children}
      </div>

    </div>
  )
}