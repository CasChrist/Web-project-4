import React, { useState } from 'react';
import TaskItem from './taskItem';
import storage from '../storage.js';

const TaskList = ({ tasks, updateTask, deleteTask, setTasks }) => {
  // OH MY GOD!!! DRAGGING FINALLY WORKSSSS!!!!!
  const [draggingIndex, setDraggingIndex] = useState(null);

  const moveTask = (fromIndex, toIndex) => {
    const updatedTasks = [...tasks];
    const [movedTask] = updatedTasks.splice(fromIndex, 1);
    updatedTasks.splice(toIndex, 0, movedTask);

    setTasks(updatedTasks);
    storage.setTasks(updatedTasks);
  };
  
  const handleDrop = (e, index) => {
    e.preventDefault();
    const fromIndex = e.dataTransfer.getData('taskIndex');
    moveTask(fromIndex, index);
  };

  const handleDragStart = (e, index) => {
    setDraggingIndex(index);
    e.dataTransfer.setData('taskIndex', index);
  };

  const handleDragEnd = () => {
    setDraggingIndex(null);
  };

  return (
    <div className="tasks">
      {tasks.length === 0 ? (
        <p className="tasks-none">No tasks</p>
      ) : (
        tasks.map((task, index) => (
          <TaskItem
            key={task.id}
            task={task}
            updateTask={updateTask}
            deleteTask={deleteTask}
            onDrop={(e) => handleDrop(e, index)}
            onDragOver={(e) => e.preventDefault()}
            onDragStart={(e) => handleDragStart(e, index)}
            onDragEnd={handleDragEnd}
            draggable
            isDragging={draggingIndex === index}
            />
        ))
      )}
    </div>
  );
};

export default TaskList;