export {taskArray, projectArray, filterTasks}
import { appendProjects, taskForm, updateProjectSelect, showTasks } from "./dom";

let taskArray = [];
let projectArray = ["Default"];

appendProjects()
updateProjectSelect()


function createTask(title, dueDate, description, priority, project) {
  const testlog = function() {console.log("Testlog inside the task works")};
  return {testlog, title, dueDate, description, priority, project}
}

// Filter the task array according to project 
function filterTasks(project, array) {
  const filteredTaskArray = array.filter(task => task.project === project)
  return filteredTaskArray
}

let saveTaskBtn = document.getElementById("saveTaskBtn");
saveTaskBtn.addEventListener("click", () => {
  let newForm = document.getElementById("taskForm");
  if (newForm.title.value != "" && newForm.dueDate.value != "") {
    let newTask = createTask(newForm.title.value, newForm.dueDate.value, newForm.description.value, newForm.priority.value, newForm.project.value)
    console.log(newTask.project);
    taskArray.push(newTask);
    showTasks(newTask.project);
    console.log(taskArray);
    taskForm.style.visibility = "hidden" ;
  }
})

console.log("test")

const createToDoList = (title) => {
  const remove = () => toDoArray.slice;
  const move = () => toDoArray.splice;
  const addTask = function() {
    let promptTaskName = prompt("What's the task name ?");
    let task = createTask(promptTaskName);
    taskArray.push(task);
    console.log(taskArray);
  }
  return {remove, move, addTask, title};
};