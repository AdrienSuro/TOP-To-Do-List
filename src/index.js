console.log("It works");

const createTask = (title) => {
  const description = "Enter a description";
  const dueDate = "January";
  const priority = "high";

  return {title, description, dueDate, priority}
};

const createToDoList = (title) => {
  const remove = () => toDoArray.slice;
  const move = () => ;
  const tasks = new Object();
  let i = 1;
  const addTask = () => {
    let taskTitle = prompt("Enter title")
    i+=1;


  return {title, tasks, remove, move, addTask}
}

//List of the different To-Dos : 

const toDoArray = new Array();

const addListBtn = document.getElementById("addListBtn");
addListBtn.addEventListener("click", addListToToDoArray)

function addListToToDoArray() {
  let newList = createToDoList(....); //update the arguments
  toDoArray.push(newList);
}



// Créer une fonction qui permet de réordonner les ToDo selon leur degré d'importance. Cette fonction agira sur l'array de ToDo.
const personFactory = (name, age) => {
  const sayHello = () => console.log('hello!');
  return { name, age, sayHello };
};

const jeff = personFactory('jeff', 27);

console.log(jeff.name); // 'jeff'

jeff.sayHello(); // calls the function and logs 'hello!'

let testList = ["string", 5, {title: "Work", importance: "high"}]
console.log(testList[2]);

let testObject = {
  firstTask: {title: "Work", importance:"high"}, 
  secondTask: {title: "Fun", importance: "low"},
  thirdTask : {title: "Family", importance: "medium"}}

console.log(testObject.firstTask.title);
