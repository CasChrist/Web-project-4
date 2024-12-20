import React, { useState } from 'react';
import TaskItem from './taskItem';
import { useDispatch } from 'react-redux';
import { reorderTasks } from './redux/taskSlice.js';

const TaskList = ({ tasks }) => {
  // OH MY GOD!!! DRAGGING FINALLY WORKSSSS!!!!!
  const dispatch = useDispatch();
  const [draggingIndex, setDraggingIndex] = useState(null);
  
  const handleDrop = (e, index) => {
    e.preventDefault();
    const fromIndex = e.dataTransfer.getData('taskIndex');
    dispatch(reorderTasks({ fromIndex: Number(fromIndex), toIndex: index }));
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