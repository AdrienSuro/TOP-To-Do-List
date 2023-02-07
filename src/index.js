import createBlock from "./init.js";

createBlock();

function createTask(title) {
  const test = `we are inside the ${title} task`;
  const testlog = function() {console.log("Testlog inside the task works")};
  return {title, testlog, test}
}

const createToDoList = (title) => {
  const toDoArray = [];
  const remove = () => toDoArray.slice;
  const move = () => toDoArray.splice;
  const taskArray = new Array();
  const addTask = function() {
    console.log(this);
    let promptTaskName = prompt("What's the task name?");
    this[promptTaskName] = createTask(promptTaskName);
    taskArray.push(promptTaskName);
    console.log(firstToDoList)
  }

  // Trying to create possibility to add a Task through a button but this refers to the button, not to the object.

  return {remove, move, taskArray, addTask, title };
};

const firstToDoList = createToDoList("Work");
addTaskBtn.addEventListener("click", firstToDoList.addTaskFct);
let z = firstToDoList.taskArray.length;

for (let i = z-1; i>=0; i--) {
  console.log(firstToDoList.taskArray[i]);
};

console.log("Reached the end of index.js")
