console.log("It works");

const createTask = (title, description, dueDate, priority) => {
  const sayHello = () => console.log(`Hello ${title}`);
  return {title, description, dueDate, priority, sayHello};
};

const createToDo = (title) => {
  let taskArray = new Array();
  // let addTaskToArray = () => taskArray.push(let newTask = createTask(""))
  return {title}
}

const toDoArray = new Array();



// Créer une fonction qui permet de réordonner les ToDo selon leur degré d'importance. Cette fonction agira sur l'array de ToDo.
