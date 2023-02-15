export {taskArray, projectArray, filterTasks, createTask}
import { appendProjects, updateProjectSelect, addEventListener } from "./dom";

let taskArray = [];
let projectArray = ["Default"];

appendProjects()
updateProjectSelect()
addEventListener()

function createTask(title, dueDate, description, priority, project) {
  return {title, dueDate, description, priority, project}
}

function filterTasks(project, array) {
  const filteredTaskArray = array.filter(task => task.project === project)
  return filteredTaskArray
}