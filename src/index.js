export {taskArray, projectArray, filterTasks, createTask, deleteTask, taskNr}
import { appendProjects, updateProjectSelect, taskNr, reversed } from "./dom";

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
  taskArray.splice((taskArray.indexOf(taskArray.find((task) => task.index === i))), 1);
}

export function sortByDateFct(order) {
  if (order === "ascending") {
    console.log("inside ascending")
    reversed = true;
    sortbyDateBtn.style.transform = "rotate(180deg)";
    taskArray.sort(function(a,b) {
      return new Date(a.dueDate) - new Date(b.dueDate)
    })}
  else if (order === "descending") {
    console.log("inside descending")
    taskArray.sort(function(a,b) {
      return new Date(b.dueDate) - new Date(a.dueDate)
    })}
}