import React from 'react';

const ViewTask = ({ task, onClose }) => {
  if (!task) return null;

  return (
    <>
      <div className="modal">
        <div className="modal__content">
          <input id="viewTitleInput" value={task.title} readOnly />
          <textarea id="viewDescriptionInput" readOnly value={task.description}></textarea>
          <button id="closeModal" onClick={onClose}>Close</button>
        </div>
      </div>
      <div className="overlay" onClick={onClose}></div>
    </>
  );
};

export default ViewTask;