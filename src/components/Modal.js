import React from 'react';
import { Article } from './Article';

export const Modal = ({ modalOpen, closeModal, article }) => {
  if (!modalOpen) {
    return null;
  }

  return (
    <div className="modal-overlay">

      <button className="close-modal-btn" onClick={closeModal}>Close</button>
      <Article article={article} />
    </div>
  )
}