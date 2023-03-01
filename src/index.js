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
      console.log(title)
      this.title = prompt("Give me a new title");
      showTasks(project);
      console.log(`the new title is` + title)
      console.log(taskArray)
      return title
    }
  return {title, dueDate, description, priority, project, index, test}
}

function filterTasks(project, array) {
  const filteredTaskArray = array.filter(task => task.project === project)
  return filteredTaskArray
}

function deleteTask(i) {
  taskArray.splice((taskArray.indexOf(taskArray.find((task) => task.index === i))), 1);
}