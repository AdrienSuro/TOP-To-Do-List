export {taskArray, projectArray, filterTasks, createTask, deleteTask}
import { appendProjects, updateProjectSelect, addEventListener } from "./dom";

let taskArray = [];
let projectArray = ["Default"];

appendProjects()
updateProjectSelect()
addEventListener()

function createTask(title, dueDate, description, priority, project) {
  const deleteTask = function() {
    console.log(this);
    console.log(taskArray);
  };
  const index = (taskArray.length)
  return {title, dueDate, description, priority, project, index, deleteTask}
}

function filterTasks(project, array) {
  const filteredTaskArray = array.filter(task => task.project === project)
  return filteredTaskArray
}

function deleteTask(i) {
  console.log("inside deleteTask")
  taskArray.splice(i, 1)
}