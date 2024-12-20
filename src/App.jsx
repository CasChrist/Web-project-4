import React, { useState, useEffect } from 'react';
import CreateTask from './components/createTask';
import TaskList from './components/taskList';
import storage from './storage.js';

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = storage.getTasks();
    setTasks(storedTasks);
  }, []);

  const addTask = (task) => {
    storage.addTask(task);
    setTasks([...tasks, task]);
  };

  const updateTask = (taskID, updatedTask) => {
    storage.updateTask(taskID, updatedTask);
    setTasks(tasks.map(task => (task.id === taskID ? updatedTask : task)));
  };

  const deleteTask = (taskID) => {
    storage.deleteTask(taskID);
    setTasks(tasks.filter(task => task.id !== taskID));
  };

  return (
    <div className="createTaskContainer">
      <CreateTask addTask={addTask} />
      <TaskList
        tasks={tasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
        setTasks={setTasks}
      />
    </div>
  );
};

export default App;