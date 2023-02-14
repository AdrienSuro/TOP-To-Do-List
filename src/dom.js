import { taskArray, filterTasks, projectArray } from "./index.js"

const sidebarProjects = document.getElementById("sidebarProjects");
const taskSpace = document.getElementById("taskSpace");
const body = document.getElementById("body");
export const taskForm = document.getElementById("taskForm");
const projectSelect = document.getElementById("projectSelect");
const addProjectForm = document.getElementById("addProjectForm");
const addNewProjectBtn = document.getElementById("addNewProjectBtn")
const testBtn1 = document.getElementById("testBtn1")
const testBtn2 = document.getElementById("testBtn2");

// Retrieves all the Projects from TaskArray and show them in sidebar
export function appendProjects() {
  for (let i=0; i<projectArray.length; i++) {
    let project = document.createElement('button');
    project.innerHTML = projectArray[i];
    project.setAttribute("id", "projectBtn");
    project.addEventListener("click", () => showTasks(projectArray[i]))
    sidebarProjects.appendChild(project)
  }
};

export function showTasks(arg) {
  let filteredArray = filterTasks(arg, taskArray);
  console.log(filteredArray)
  taskSpace.innerHTML = "";
  for (let i=0; i<filteredArray.length; i++) {
  taskSpace.innerHTML += 
    `<div id="taskDiv">
    <p>${filteredArray[i].dueDate}</p>
    <p>${filteredArray[i].title}</p>
    <p>${filteredArray[i].priority}</p>`
  }
}

testBtn2.addEventListener("click", () => {
  addProjectForm.style.visibility = "visible"
})

addNewProjectBtn.addEventListener("click", () => {
  projectArray.push(addProjectForm.newProjectName.value);
  console.log(projectArray);
  sidebarProjects.innerHTML = "";
  appendProjects();
  updateProjectSelect();
  addProjectForm.style.visibility = "hidden"
});

//ShowForm on the page dynamically;
testBtn1.addEventListener("click", () => {
  taskForm.style.visibility = "visible" ;
})

//Dynamically create project options in the form :
export function updateProjectSelect() {
  projectSelect.innerHTML = "";
  for (let i=0; i<projectArray.length; i++) {
    projectSelect.innerHTML += `<option value ="${projectArray[i]}">${projectArray[i]}</option>`;
  }
};