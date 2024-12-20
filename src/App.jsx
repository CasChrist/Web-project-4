import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { addTask as addTaskAction } from "./components/redux/taskSlice.js";
import CreateTask from './components/createTask';
import TaskList from './components/taskList';

const App = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const addTask = (task) => {
    dispatch(addTaskAction(task));
  };

  return (
    <div className="createTaskContainer">
      <CreateTask addTask={addTask} />
      <TaskList tasks={tasks} />
    </div>
  );
};

export default App;