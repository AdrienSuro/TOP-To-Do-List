import { taskArray, filterTasks, projectArray } from "./index.js"

const sidebarProjects = document.getElementById("sidebarProjects");
const taskSpace = document.getElementById("taskSpace");
const body = document.getElementById("body");
export const taskForm = document.getElementById("taskForm");
const projectSelect = document.getElementById("projectSelect");

// Function that filters taskArray according to the Project (to be used in the left column)
// DOMELEMENT.addEventListener("click",() => testFunction("Javascript", taskArray));


// Retrieves all the Projects from TaskArray and show them in sidebar
export function appendProjects() {
  for (let i=0; i<projectArray.length; i++) {
    let project = document.createElement('button');
    project.innerHTML = projectArray[i];
    project.setAttribute("id", "projectBtn");
    project.addEventListener("click", () => {
      let filteredArray = filterTasks(projectArray[i], taskArray);
      taskSpace.innerHTML = "";
      for (let i=0; i<filteredArray.length; i++) {
      taskSpace.innerHTML += 
        `<div id="taskDiv">
        <p>${filteredArray[i].dueDate}</p>
        <p>${filteredArray[i].title}</p>
        <p>${filteredArray[i].priority}</p>`
      }
    })
    sidebarProjects.appendChild(project)
    taskForm.style.visibility = "hidden" ;
  }
};

const testBtn2 = document.getElementById("testBtn2");
testBtn2.addEventListener("click", () => {
  projectArray.push(prompt("Project name :"))
  console.log(projectArray);
  sidebarProjects.innerHTML = "";
  appendProjects();
  updateProjectSelect();
});

//Show tasks on the page : 
const testBtn1 = document.getElementById("testBtn1")
// testBtn1.addEventListener("click", )

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



