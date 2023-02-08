export function createBlock() {
  console.log("we're inside create block")
  let body = document.getElementById("body");

  const mainDiv = document.createElement("div");
  mainDiv.setAttribute("id", "mainDiv");
  mainDiv.innerHTML = "This is a test";

  let addTaskBtnTest = document.createElement("button");
  addTaskBtnTest.setAttribute("id", "addTaskBtnTest");
  addTaskBtnTest.innerHTML = "Add a list";

  let secondBtn = document.createElement("button");
  secondBtn.setAttribute("id", "secondBtn");
  secondBtn.innerHTML = "Show names of all the to-do-lists";

  let thirdBtn = document.createElement("button");
  thirdBtn.setAttribute("id", "thirdBtn");
  thirdBtn.innerHTML = "Add task to the to-do list";

  body.appendChild(mainDiv);
  body.appendChild(addTaskBtnTest);
  body.appendChild(secondBtn);
  body.appendChild(thirdBtn);
}

export function appendToDoList(list) {
  console.log("We're inside the fct appendToDoList")
  let body = document.getElementById("body");

  let toDoDiv = document.createElement("div");
  toDoDiv.setAttribute("id", "toDoDiv");

  let addTaskBtn = document.createElement("button");
  addTaskBtn.setAttribute("id", "addTaskBtn");
  addTaskBtn.innerHTML = "Add a task" ;

  let listTitle = document.createElement('h1');
  listTitle.setAttribute("id", "listTitle");
  listTitle.innerHTML = list.title
  
  toDoDiv.appendChild(listTitle);

  for (let i=0; i<list.taskArray.length; i++) {
    let taskDiv = document.createElement("div");
    taskDiv.setAttribute("id", "taskDiv");
    taskDiv.innerHTML = list.taskArray[i].title ;

    toDoDiv.appendChild(taskDiv);
  }

  body.appendChild(toDoDiv);
}
