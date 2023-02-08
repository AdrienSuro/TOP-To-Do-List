export default createBlock;

function createBlock() {
  let body = document.getElementById("body");

  const mainDiv = document.createElement("div");
  mainDiv.setAttribute("id", "mainDiv");
  mainDiv.innerHTML = "This is a test";

  let addTaskBtn = document.createElement("button");
  addTaskBtn.setAttribute("id", "addTaskBtn");
  addTaskBtn.innerHTML = "Add a task";

  let secondBtn = document.createElement("button");
  secondBtn.setAttribute("id", "secondBtn");
  secondBtn.innerHTML = "Show names of all the to-do-lists";

  let thirdBtn = document.createElement("button");
  thirdBtn.setAttribute("id", "thirdBtn");
  thirdBtn.innerHTML = "Add task to the to-do list";

  body.appendChild(mainDiv);
  body.appendChild(addTaskBtn);
  body.appendChild(secondBtn);
  body.appendChild(thirdBtn);

  return{addTaskBtn}
}
