import {createBlock} from './init.js'
import {appendToDoList} from './init.js'
import {showDom} from './dom.js'

let toDoListArray = [];
let taskArray = [];

function createTask(title, dueDate, description, priority, project) {
  const testlog = function() {console.log("Testlog inside the task works")};
  return {testlog, title, test, dueDate, description, priority, project}
}

let saveTaskBtn = document.getElementById("saveTaskBtn");
saveTaskBtn.addEventListener("click", () => {
  let newForm = document.getElementById("taskForm");
  let newTask = createTask(newForm.title.value, newForm.dueDate.value, newForm.description.value, newForm.priority.value, newForm.project.value)
  taskArray.push(newTask);
  console.log(taskArray);
})

const createToDoList = (title) => {
  const remove = () => toDoArray.slice;
  const move = () => toDoArray.splice;
  const taskArray = [];
  const addTask = function() {
    let promptTaskName = prompt("What's the task name ?");
    let task = createTask(promptTaskName);
    taskArray.push(task);
    console.log(taskArray);
  }
  return {remove, move, addTask, title, taskArray};
};