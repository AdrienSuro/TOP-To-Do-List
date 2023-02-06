import createBlock from "./init.js";

console.log("js works fine");
console.log(this === undefined ? "true" : "false");

createBlock();

const createTask = (title) => {
  const test = "we are inside a task"
  const testlog = console.log("Testlog inside the task works")
  return {title, test}
}

const createToDoList = (title) => {
  const toDoArray = [];
  const remove = () => toDoArray.slice;
  const move = () => toDoArray.splice;
  const tasks = new Object();
  const addTask = function() {
    console.log(this);
    let promptTaskName = prompt("What's the task name?");
    this[promptTaskName] = createTask(promptTaskName);
  }

  return {remove, move, tasks, addTask, title };
};

const firstToDoList = createToDoList("Work");
console.log(firstToDoList);
console.log("line21");
firstToDoList.addTask();
firstToDoList.addTask();


console.log(firstToDoList.js);
console.log(firstToDoList.html);

firstToDoList.js.testlog;








console.log("Reached the end of index.js")
