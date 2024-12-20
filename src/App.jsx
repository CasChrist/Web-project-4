import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { deleteTask, updateTask, setTasks, addTask as addTaskAction } from "./components/redux/taskSlice.js";
import CreateTask from './components/createTask';
import TaskList from './components/taskList';

const App = () => {
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  const addTask = (task) => {
    dispatch(addTaskAction(task));
  };

  const updateTaskItem = (taskID, updatedTask) => {
    dispatch(updateTask({id: taskID, updates: updatedTask}))
  };

  const deleteTaskItem = (taskID) => {
    dispatch(deleteTask(taskID));
  };

  return (
    <div className="createTaskContainer">
      <CreateTask addTask={addTask} />
      <TaskList
        tasks={tasks}
        updateTask={updateTaskItem}
        deleteTask={deleteTaskItem}
        setTasks={setTasks}
      />
    </div>
  );
};

export default App;