import React, { useState } from "react";
import ShareTask from "./shareTask";

const ActionBar = ({ taskID, onEdit, onView }) => {
  const [showShareTask, setShowShareTask] = useState(false);

  const toggleShareTask = () => {
    setShowShareTask(!showShareTask);
  };

  return (
    <>
      <div className="tasks-elem-container__actions">
        <button
          className="tasks-elem-container__actions-details"
          onClick={() => onView(taskID)}
        >
          i
        </button>
        <button className="tasks-elem-container__actions-edit" onClick={onEdit}>
          <img src="./src/assets/edit.svg" alt="Edit" />
        </button>
        <button className="tasks-elem-container__actions-share" onClick={toggleShareTask}>
          <img src="./src/assets/share.svg" alt="Share" />
        </button>
      </div>

      {showShareTask && (
        <ShareTask taskID={taskID} onClose={toggleShareTask} />
      )}
    </>
  );
};

export default ActionBar;
