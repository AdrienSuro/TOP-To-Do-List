import { taskArray, filterTasks, projectArray, createTask, deleteTask } from "./index.js"

const sidebarProjects = document.getElementById("sidebarProjects");
const taskSpace = document.getElementById("taskSpace");
const body = document.getElementById("body");
const taskForm = document.getElementById("taskForm");
const projectSelect = document.getElementById("projectSelect");
const newProjectForm = document.getElementById("newProjectForm");
const submitNewProjectBtn = document.getElementById("submitNewProjectBtn")
const addProjectBtn = document.getElementById("addProjectBtn");
const showAllTasksBtn = document.getElementById("showAllTasksBtn");
const newForm = document.getElementById("taskForm");
const closeForm = document.getElementById("closeForm")

let heading = 
  `<div id="taskDiv">
  <p>Due Date</p>
  <p>Title</p>
  <p>Priority</p>
  <button id=></button>`;

export function appendProjects() {
  for (let i=1; i<projectArray.length; i++) {
    let project = document.createElement('button');
    project.innerHTML = projectArray[i];
    project.setAttribute("id", "projectBtn");
    project.addEventListener("click", () => showTasks(projectArray[i]))
    sidebarProjects.appendChild(project)
  }
};

newForm.addEventListener('submit', saveTask, false)

function saveTask(event) {
  let newTask = createTask(newForm.title.value, newForm.dueDate.value, newForm.description.value, newForm.priority.value, newForm.project.value)
    taskArray.push(newTask);
    showTasks(newTask.project);
    newForm.reset();
    taskForm.style.visibility = "hidden"
    event.preventDefault();
}

closeForm.addEventListener('click', () => {
  taskForm.style.visibility = "hidden";
})

function showTasks(arg) {
  let filteredArray = filterTasks(arg, taskArray);
  taskSpace.innerHTML = "";
  taskSpace.innerHTML += heading;
  for (let i=0; i<filteredArray.length; i++) {
    console.log(taskArray);
    taskSpace.innerHTML += 
      `<div id="taskDiv">
      <p>${filteredArray[i].dueDate}</p>
      <p>${filteredArray[i].title}</p>
      <p>${filteredArray[i].priority}</p>`;
    let deleteTaskBtn = document.createElement("button");
    deleteTaskBtn.innerHTML = "Delete";
    deleteTaskBtn.setAttribute("id", "deleteTaskBtn");
    deleteTaskBtn.addEventListener("click", () => {
      console.log("brrr");
      deleteTask(filteredArray[i].index)
      console.log(taskArray);
      showTasks(filteredArray[i].project);
    });
    taskSpace.appendChild(deleteTaskBtn);
  }
  let addTaskBtn = document.createElement("button");
  addTaskBtn.innerHTML = "Add Task"
  addTaskBtn.addEventListener("click", () => {
    taskForm.style.visibility = "visible" ;
  });
  taskSpace.appendChild(addTaskBtn);
}

addProjectBtn.addEventListener("click", () => {
  newProjectForm.style.visibility = "visible"
})

submitNewProjectBtn.addEventListener("click", addProject, false);

function addProject(event) {
  projectArray.push(newProjectForm.newProjectName.value);
  sidebarProjects.innerHTML = "";
  appendProjects();
  updateProjectSelect();
  newProjectForm.reset();
  newProjectForm.style.visibility = "hidden";
  event.preventDefault();
};

export function updateProjectSelect() {
  projectSelect.innerHTML = "";
  for (let i=0; i<projectArray.length; i++) {
    projectSelect.innerHTML += `<option value ="${projectArray[i]}">${projectArray[i]}</option>`;
  }
};

showAllTasksBtn.addEventListener("click", showAllTasks)

export function showAllTasks() {
  taskSpace.innerHTML = "";
  for (let i=0; i<taskArray.length; i++) {
    taskSpace.innerHTML += 
    `<div id="taskDiv">
    <p>${taskArray[i].dueDate}</p>
    <p>${taskArray[i].title}</p>
    <p>${taskArray[i].priority}</p>`
  }
  taskSpace.innerHTML += `<button id="addTaskBtn">Add task</button>`
  addEventListener();
  console.log(taskArray);
};