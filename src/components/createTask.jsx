import React, { useState } from 'react';

const CreateTask = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = () => {
    if (title && description) {
      const newTask = {
        id: Date.now(),
        title,
        description,
      };
      addTask(newTask);
      setTitle('');
      setDescription('');
    } else {
      alert("Please fill out all fields.");
    }
  };

  return (
    <div className="createTaskContainer-common">
      <div className="createTaskContainer-common-input">
        <input
          className="outline"
          placeholder="Title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="outline"
          placeholder="About..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button className="outline" onClick={handleSubmit}>+</button>
    </div>
  );
};

export default CreateTask;