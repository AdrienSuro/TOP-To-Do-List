import { taskArray, filterTasks, projectArray, createTask } from "./index.js"

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

export function appendProjects() {
  for (let i=0; i<projectArray.length; i++) {
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
  for (let i=0; i<filteredArray.length; i++) {
  taskSpace.innerHTML += 
    `<div id="taskDiv">
    <p>${filteredArray[i].dueDate}</p>
    <p>${filteredArray[i].title}</p>
    <p>${filteredArray[i].priority}</p>`
  }
  taskSpace.innerHTML += `<button id="addTaskBtn">Add task</button>`
  addEventListener();
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

export function addEventListener() {
  const addTaskBtn = document.getElementById("addTaskBtn")
  addTaskBtn.addEventListener("click", () => {
  taskForm.style.visibility = "visible" ;
})
};

export function updateProjectSelect() {
  projectSelect.innerHTML = "";
  for (let i=0; i<projectArray.length; i++) {
    projectSelect.innerHTML += `<option value ="${projectArray[i]}">${projectArray[i]}</option>`;
  }
};

showAllTasksBtn.addEventListener("click", () => {
  taskSpace.innerHTML = "";
  for (let i=0; i<taskArray.length; i++) {
    taskSpace.innerHTML += 
    `<div id="taskDiv">
    <p>${taskArray[i].dueDate}</p>
    <p>${taskArray[i].title}</p>
    <p>${taskArray[i].priority}</p>`
  }
  taskSpace.innerHTML += `<button id="addTaskBtn">Add task</button>`
});