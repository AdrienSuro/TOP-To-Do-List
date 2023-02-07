export default createBlock;

function createBlock() {
  let body = document.getElementById("body");

  const mainDiv = document.createElement("div");
  mainDiv.setAttribute("id", "mainDiv");
  mainDiv.innerHTML = "This is a test";

  let addTaskBtn = document.createElement("button");
  addTaskBtn.setAttribute("id", "addTaskBtn");
  addTaskBtn.innerHTML = "Add a task";

  body.appendChild(mainDiv);
  body.appendChild(addTaskBtn);

  return{addTaskBtn}
}
