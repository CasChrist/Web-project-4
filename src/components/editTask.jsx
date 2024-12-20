import React, { useEffect, useState } from 'react';
import storage from '../storage.js';

const EditTask = ({ task, onClose, onSave }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
    }
  }, [task]);

  const handleSave = () => {
    const updatedTask = {
      id: task.id,
      title,
      description,
    };
    storage.updateTask(task.id, updatedTask);
    onSave(updatedTask);
    onClose();
  };

  return (
    <>
      <div className="modal">
        <div className="modal__content">
          <input
            id="editTitleInput"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            id="editDescriptionInput"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div id="modalButtons">
            <button id="saveButton" onClick={handleSave}>Save</button>
            <button id="closeModal" onClick={onClose}>Cancel</button>
          </div>
        </div>
      </div>
      <div className="overlay" onClick={onClose}></div>
    </>
  );
};

export default EditTask;