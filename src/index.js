export {taskArray, projectArray, filterTasks, createTask, deleteTask, taskNr}
import { appendProjects, updateProjectSelect, taskNr, showTasks } from "./dom";

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
    const test = function() {
      this.title = prompt("Give me a new title");
      showTasks(project);
      return title
    }
    const checked = false;
  return {title, dueDate, description, priority, project, index, test, checked}
}

function filterTasks(project, array) {
  const filteredTaskArray = array.filter(task => task.project === project)
  return filteredTaskArray
}

function deleteTask(i) {
  taskArray.splice((taskArray.indexOf(taskArray.find((task) => task.index === i))), 1);
}