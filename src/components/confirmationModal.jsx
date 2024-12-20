import React from 'react';

const ConfirmationModal = ({ message, onConfirm, onCancel }) => {
  return (
    <>
      <div className="confirmation-menu">
        <div className="confirmation-menu__content">
          <p>{message}</p>
          <div className="confirmation-menu__content-buttons">
            <button onClick={onConfirm}>Yes</button>
            <button onClick={onCancel}>No</button>
          </div>
        </div>
      </div>
      <div className="overlay" onClick={onCancel}></div>
    </>
  );
};

export default ConfirmationModal;