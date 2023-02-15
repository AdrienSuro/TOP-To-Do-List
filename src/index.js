export {taskArray, projectArray, filterTasks, createTask}
import { appendProjects, updateProjectSelect } from "./dom";

let taskArray = [];
let projectArray = ["Default"];

appendProjects()
updateProjectSelect()

function createTask(title, dueDate, description, priority, project) {
  return {title, dueDate, description, priority, project}
}

function filterTasks(project, array) {
  const filteredTaskArray = array.filter(task => task.project === project)
  return filteredTaskArray
}