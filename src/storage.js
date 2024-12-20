class TaskLocalStorage {
  constructor(storageKey) {
    this.storageKey = storageKey;
  }

  getTasks() {
    const tasks = localStorage.getItem(this.storageKey);
    return tasks ? JSON.parse(tasks) : [];
  }

  addTask(task) {
    const tasks = this.getTasks();
    tasks.push(task);
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }

  deleteTask(taskID) {
    let tasks = this.getTasks();
    tasks = tasks.filter((task) => task.id !== taskID);
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }

  updateTask(taskID, updatedTask) {
    let tasks = this.getTasks();
    tasks = tasks.map((task) =>
      task.id === taskID ? { ...task, ...updatedTask } : task
    );
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }

  setTasks(tasks) {
    localStorage.setItem(this.storageKey, JSON.stringify(tasks));
  }
}

const storage = new TaskLocalStorage("tasks");
export default storage;
