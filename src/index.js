export {taskArray, projectArray, filterTasks, createTask, deleteTask, taskNr}
import { appendProjects, updateProjectSelect, taskNr } from "./dom";

let taskArray = [];
let projectArray = ["Default"];

appendProjects()
updateProjectSelect()

let addTaskBtn = document.getElementById("addTaskBtn")
  addTaskBtn.addEventListener("click", () => {
  taskForm.style.visibility = "visible" ;
  })

function createTask(title, dueDate, description, priority, project, taskA) {
    const index = taskA
  return {title, dueDate, description, priority, project, index}
}

function filterTasks(project, array) {
  const filteredTaskArray = array.filter(task => task.project === project)
  return filteredTaskArray
}

function deleteTask(i) {
  console.log(taskNr);
  console.log(taskArray);
  taskArray.splice((taskArray.indexOf(taskArray.find((task) => task.index === i))), 1);
  console.log(taskArray);
}

export function sortTaskArray() {
  taskArray.sort(function(a,b) {
    return new Date(a.dueDate) - new Date(b.dueDate)
  })
}