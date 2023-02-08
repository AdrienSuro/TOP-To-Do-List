import {createBlock} from './init.js'
import {appendToDoList} from './init.js'

createBlock();

let toDoListArray = [];

function createTask(title) {
  const test = `we are inside the ${title} task`;
  const testlog = function() {console.log("Testlog inside the task works")};
  return {title, testlog, test}
}

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

  // Trying to create possibility to add a Task through a button but this refers to the button, not to the object.

  return {remove, move, addTask, title, taskArray};
};

// WORKING [add a to do list object ex: work, leisure...] :
function addToDoList() {
  let listname = prompt("What's the name of your list ?");
  let createlist = createToDoList(listname);
  toDoListArray.push(createlist);
  console.log(toDoListArray);
}

//Function that will show all the to do lists on the DOM : 
function showToDoLists() {
  console.log("We're inside show ToDoLists")
  for (let i = 0; i<toDoListArray.length; i++) {
    appendToDoList(toDoListArray[i])
  }
}

addTaskBtnTest.addEventListener("click", addToDoList);
secondBtn.addEventListener("click", showToDoLists);
thirdBtn.addEventListener("click", function() {toDoListArray[0].addTask()});


//const firstToDoList = createToDoList("Work");
//addTaskBtn.addEventListener("click", () => console.log(firstToDoList));
//let z = firstToDoList.taskArray.length;

//firstToDoList.addTask();  
//console.log(firstToDoList)

//for (let i = z-1; i>=0; i--) {
//  console.log(firstToDoList.taskArray[i]);
//};

console.log("Reached the end of index.js")