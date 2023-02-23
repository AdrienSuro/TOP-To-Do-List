/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dom.js":
/*!********************!*\
  !*** ./src/dom.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendProjects": () => (/* binding */ appendProjects),
/* harmony export */   "taskNr": () => (/* binding */ taskNr),
/* harmony export */   "updateProjectSelect": () => (/* binding */ updateProjectSelect)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


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
const closeForm = document.getElementById("closeForm");
const ifNoTaskDiv = document.getElementById("ifNoTaskDiv");
const headerSpace = document.getElementById("headerSpace");
const mainSpace = document.getElementById("mainSpace");
let reversed = false;
let headingDisplayed = false;

let heading = 
  `<div id="taskDiv">
  <p>Due Date <button id=sortbyDate>&#9660</button></p>
  <p>Title</p>
  <p>Priority</p>
  <p>Delete task</p>`;

function appendProjects() {
  for (let i=1; i<_index_js__WEBPACK_IMPORTED_MODULE_0__.projectArray.length; i++) {
    let project = document.createElement('button');
    project.innerHTML = _index_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[i];
    project.setAttribute("id", "projectBtn");
    project.addEventListener("click", () => showTasks(_index_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[i]))
    sidebarProjects.appendChild(project)
  }
};

newForm.addEventListener('submit', saveTask, false);

let taskNr = 0;

function saveTask(event) {
  let newTask = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createTask)(newForm.title.value, newForm.dueDate.value, newForm.description.value, newForm.priority.value, newForm.project.value, taskNr)
  _index_js__WEBPACK_IMPORTED_MODULE_0__.taskArray.push(newTask);
  taskNr += 1;
  showTasks(newTask.project);
  newForm.reset();
  taskForm.style.visibility = "hidden"
  event.preventDefault();
}

closeForm.addEventListener('click', () => {
  taskForm.style.visibility = "hidden";
})

function showTasks(arg) {
  let filteredArray = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.filterTasks)(arg, _index_js__WEBPACK_IMPORTED_MODULE_0__.taskArray);
  ifNoTaskDiv.remove();
  mainSpace.style.visibility = "visible";
  taskSpace.innerHTML = "";
  taskSpace.style.visibility = "visible";
  
  if (!headingDisplayed) {
    headerSpace.innerHTML = heading;
    headingDisplayed = true;
    console.log("inside display heading")
    addSortingPossibility()
  }
  for (let i=0; i<filteredArray.length; i++) {
    let wrapper = document.createElement("div")
    wrapper.setAttribute("id", "taskDiv");
    wrapper.innerHTML = 
      `<p>${filteredArray[i].dueDate}</p>
      <p>${filteredArray[i].title}</p>
      <p>${filteredArray[i].priority}</p>`
    let deleteTaskBtn = document.createElement("button");
    deleteTaskBtn.innerHTML = "X";
    deleteTaskBtn.setAttribute("id", "deleteTaskBtn");
    deleteTaskBtn.addEventListener("click", () => {
      console.log("inside event listener");
      (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(filteredArray[i].index);
      wrapper.remove();
    });
    wrapper.appendChild(deleteTaskBtn);
    taskSpace.appendChild(wrapper);
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
  _index_js__WEBPACK_IMPORTED_MODULE_0__.projectArray.push(newProjectForm.newProjectName.value);
  sidebarProjects.innerHTML = "";
  appendProjects();
  updateProjectSelect();
  newProjectForm.reset();
  newProjectForm.style.visibility = "hidden";
  event.preventDefault();
};

function updateProjectSelect() {
  projectSelect.innerHTML = "";
  for (let i=0; i<_index_js__WEBPACK_IMPORTED_MODULE_0__.projectArray.length; i++) {
    projectSelect.innerHTML += `<option value ="${_index_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[i]}">${_index_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[i]}</option>`;
  }
};

showAllTasksBtn.addEventListener("click", showAllTasks)

function showAllTasks() {
  mainSpace.style.visibility = "visible";
  taskSpace.innerHTML = "";
  taskSpace.style.visibility = "visible";
  ifNoTaskDiv.remove();
  if (!headingDisplayed) {
    headerSpace.innerHTML = heading;
    headingDisplayed = true;
    addSortingPossibility()
  }
  for (let i=0; i<_index_js__WEBPACK_IMPORTED_MODULE_0__.taskArray.length; i++) {
    let wrapper = document.createElement("div");
    wrapper.setAttribute("id", "taskDiv");
    wrapper.innerHTML = 
    `<p>${_index_js__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].dueDate}</p>
    <p>${_index_js__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].title}</p>
    <p>${_index_js__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].priority}</p>`
    let deleteTaskBtn = document.createElement("button");
    deleteTaskBtn.innerHTML = "X";
    deleteTaskBtn.setAttribute("id", "deleteTaskBtn");
    deleteTaskBtn.addEventListener("click", () => {
      console.log("inside event listener");
      (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(_index_js__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].index);
      console.log(_index_js__WEBPACK_IMPORTED_MODULE_0__.taskArray);
      wrapper.remove();
    });
    wrapper.appendChild(deleteTaskBtn);
    taskSpace.appendChild(wrapper);
  }
  let addTaskBtn = document.createElement("button");
  addTaskBtn.innerHTML = "Add Task"
  addTaskBtn.addEventListener("click", () => {
    taskForm.style.visibility = "visible" ;
  });
  taskSpace.appendChild(addTaskBtn);
};

function sortByDateFct(order) {
  if (order === "ascending") {
    console.log("inside ascending")
    reversed = true;
    let sortbyDateBtn = document.getElementById("sortbyDate");
    sortbyDateBtn.style.transform = "rotate(180deg)";
    _index_js__WEBPACK_IMPORTED_MODULE_0__.taskArray.sort(function(a,b) {
      return new Date(a.dueDate) - new Date(b.dueDate)
    })
    showAllTasks()
  }
  else if (order === "descending") {
    console.log("inside descending")
    let sortbyDateBtn = document.getElementById("sortbyDate");
    sortbyDateBtn.style.transform = "rotate(0deg)";
    reversed = false;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.taskArray.sort(function(a,b) {
      return new Date(b.dueDate) - new Date(a.dueDate)
    })
    showAllTasks()
  }
}

function addSortingPossibility() {
  let sortbyDateBtn = document.getElementById("sortbyDate");
  sortbyDateBtn.addEventListener("click", () => {
  reversed ? sortByDateFct("descending") : sortByDateFct("ascending")
  });
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTask": () => (/* binding */ createTask),
/* harmony export */   "deleteTask": () => (/* binding */ deleteTask),
/* harmony export */   "filterTasks": () => (/* binding */ filterTasks),
/* harmony export */   "projectArray": () => (/* binding */ projectArray),
/* harmony export */   "taskArray": () => (/* binding */ taskArray),
/* harmony export */   "taskNr": () => (/* binding */ taskNr)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");

;

let taskArray = [];
let projectArray = ["Default"];

(0,_dom__WEBPACK_IMPORTED_MODULE_0__.appendProjects)()
;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.updateProjectSelect)()

let addTaskBtn = document.getElementById("addTaskBtn")
  addTaskBtn.addEventListener("click", () => {
  taskForm.style.visibility = "visible" ;
  })

function createTask(title, dueDate, description, priority, project, taskA) {
    const index = taskA
  return {title, dueDate, description, priority, project, index}
}

function filterTasks(project, array) {
  const filteredTaskArray = array.filter(task => task.project === project)
  return filteredTaskArray
}

function deleteTask(i) {
  taskArray.splice((taskArray.indexOf(taskArray.find((task) => task.index === i))), 1);
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/dom.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Y2s6Ly90b3AtdG8tZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcC10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvcC10by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdGFza0FycmF5LCBmaWx0ZXJUYXNrcywgcHJvamVjdEFycmF5LCBjcmVhdGVUYXNrLCBkZWxldGVUYXNrIH0gZnJvbSBcIi4vaW5kZXguanNcIlxuXG5jb25zdCBzaWRlYmFyUHJvamVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJQcm9qZWN0c1wiKTtcbmNvbnN0IHRhc2tTcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza1NwYWNlXCIpO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keVwiKTtcbmNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRm9ybVwiKTtcbmNvbnN0IHByb2plY3RTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RTZWxlY3RcIik7XG5jb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJvamVjdEZvcm1cIik7XG5jb25zdCBzdWJtaXROZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXROZXdQcm9qZWN0QnRuXCIpXG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRQcm9qZWN0QnRuXCIpO1xuY29uc3Qgc2hvd0FsbFRhc2tzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG93QWxsVGFza3NCdG5cIik7XG5jb25zdCBuZXdGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRm9ybVwiKTtcbmNvbnN0IGNsb3NlRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2VGb3JtXCIpO1xuY29uc3QgaWZOb1Rhc2tEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlmTm9UYXNrRGl2XCIpO1xuY29uc3QgaGVhZGVyU3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclNwYWNlXCIpO1xuY29uc3QgbWFpblNwYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluU3BhY2VcIik7XG5sZXQgcmV2ZXJzZWQgPSBmYWxzZTtcbmxldCBoZWFkaW5nRGlzcGxheWVkID0gZmFsc2U7XG5cbmxldCBoZWFkaW5nID0gXG4gIGA8ZGl2IGlkPVwidGFza0RpdlwiPlxuICA8cD5EdWUgRGF0ZSA8YnV0dG9uIGlkPXNvcnRieURhdGU+JiM5NjYwPC9idXR0b24+PC9wPlxuICA8cD5UaXRsZTwvcD5cbiAgPHA+UHJpb3JpdHk8L3A+XG4gIDxwPkRlbGV0ZSB0YXNrPC9wPmA7XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRQcm9qZWN0cygpIHtcbiAgZm9yIChsZXQgaT0xOyBpPHByb2plY3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVjdC5pbm5lckhUTUwgPSBwcm9qZWN0QXJyYXlbaV07XG4gICAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RCdG5cIik7XG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gc2hvd1Rhc2tzKHByb2plY3RBcnJheVtpXSkpXG4gICAgc2lkZWJhclByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3QpXG4gIH1cbn07XG5cbm5ld0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0Jywgc2F2ZVRhc2ssIGZhbHNlKTtcblxuZXhwb3J0IGxldCB0YXNrTnIgPSAwO1xuXG5mdW5jdGlvbiBzYXZlVGFzayhldmVudCkge1xuICBsZXQgbmV3VGFzayA9IGNyZWF0ZVRhc2sobmV3Rm9ybS50aXRsZS52YWx1ZSwgbmV3Rm9ybS5kdWVEYXRlLnZhbHVlLCBuZXdGb3JtLmRlc2NyaXB0aW9uLnZhbHVlLCBuZXdGb3JtLnByaW9yaXR5LnZhbHVlLCBuZXdGb3JtLnByb2plY3QudmFsdWUsIHRhc2tOcilcbiAgdGFza0FycmF5LnB1c2gobmV3VGFzayk7XG4gIHRhc2tOciArPSAxO1xuICBzaG93VGFza3MobmV3VGFzay5wcm9qZWN0KTtcbiAgbmV3Rm9ybS5yZXNldCgpO1xuICB0YXNrRm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIlxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5jbG9zZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHRhc2tGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xufSlcblxuZnVuY3Rpb24gc2hvd1Rhc2tzKGFyZykge1xuICBsZXQgZmlsdGVyZWRBcnJheSA9IGZpbHRlclRhc2tzKGFyZywgdGFza0FycmF5KTtcbiAgaWZOb1Rhc2tEaXYucmVtb3ZlKCk7XG4gIG1haW5TcGFjZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gIHRhc2tTcGFjZS5pbm5lckhUTUwgPSBcIlwiO1xuICB0YXNrU3BhY2Uuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICBcbiAgaWYgKCFoZWFkaW5nRGlzcGxheWVkKSB7XG4gICAgaGVhZGVyU3BhY2UuaW5uZXJIVE1MID0gaGVhZGluZztcbiAgICBoZWFkaW5nRGlzcGxheWVkID0gdHJ1ZTtcbiAgICBjb25zb2xlLmxvZyhcImluc2lkZSBkaXNwbGF5IGhlYWRpbmdcIilcbiAgICBhZGRTb3J0aW5nUG9zc2liaWxpdHkoKVxuICB9XG4gIGZvciAobGV0IGk9MDsgaTxmaWx0ZXJlZEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2tEaXZcIik7XG4gICAgd3JhcHBlci5pbm5lckhUTUwgPSBcbiAgICAgIGA8cD4ke2ZpbHRlcmVkQXJyYXlbaV0uZHVlRGF0ZX08L3A+XG4gICAgICA8cD4ke2ZpbHRlcmVkQXJyYXlbaV0udGl0bGV9PC9wPlxuICAgICAgPHA+JHtmaWx0ZXJlZEFycmF5W2ldLnByaW9yaXR5fTwvcD5gXG4gICAgbGV0IGRlbGV0ZVRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlbGV0ZVRhc2tCdG4uaW5uZXJIVE1MID0gXCJYXCI7XG4gICAgZGVsZXRlVGFza0J0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlbGV0ZVRhc2tCdG5cIik7XG4gICAgZGVsZXRlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJpbnNpZGUgZXZlbnQgbGlzdGVuZXJcIik7XG4gICAgICBkZWxldGVUYXNrKGZpbHRlcmVkQXJyYXlbaV0uaW5kZXgpO1xuICAgICAgd3JhcHBlci5yZW1vdmUoKTtcbiAgICB9KTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGRlbGV0ZVRhc2tCdG4pO1xuICAgIHRhc2tTcGFjZS5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgfVxuICBsZXQgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFRhc2tCdG4uaW5uZXJIVE1MID0gXCJBZGQgVGFza1wiXG4gIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0YXNrRm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCIgO1xuICB9KTtcbiAgdGFza1NwYWNlLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xufVxuXG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIG5ld1Byb2plY3RGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIlxufSlcblxuc3VibWl0TmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkUHJvamVjdCwgZmFsc2UpO1xuXG5mdW5jdGlvbiBhZGRQcm9qZWN0KGV2ZW50KSB7XG4gIHByb2plY3RBcnJheS5wdXNoKG5ld1Byb2plY3RGb3JtLm5ld1Byb2plY3ROYW1lLnZhbHVlKTtcbiAgc2lkZWJhclByb2plY3RzLmlubmVySFRNTCA9IFwiXCI7XG4gIGFwcGVuZFByb2plY3RzKCk7XG4gIHVwZGF0ZVByb2plY3RTZWxlY3QoKTtcbiAgbmV3UHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgbmV3UHJvamVjdEZvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUHJvamVjdFNlbGVjdCgpIHtcbiAgcHJvamVjdFNlbGVjdC5pbm5lckhUTUwgPSBcIlwiO1xuICBmb3IgKGxldCBpPTA7IGk8cHJvamVjdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgcHJvamVjdFNlbGVjdC5pbm5lckhUTUwgKz0gYDxvcHRpb24gdmFsdWUgPVwiJHtwcm9qZWN0QXJyYXlbaV19XCI+JHtwcm9qZWN0QXJyYXlbaV19PC9vcHRpb24+YDtcbiAgfVxufTtcblxuc2hvd0FsbFRhc2tzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93QWxsVGFza3MpXG5cbmZ1bmN0aW9uIHNob3dBbGxUYXNrcygpIHtcbiAgbWFpblNwYWNlLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgdGFza1NwYWNlLmlubmVySFRNTCA9IFwiXCI7XG4gIHRhc2tTcGFjZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gIGlmTm9UYXNrRGl2LnJlbW92ZSgpO1xuICBpZiAoIWhlYWRpbmdEaXNwbGF5ZWQpIHtcbiAgICBoZWFkZXJTcGFjZS5pbm5lckhUTUwgPSBoZWFkaW5nO1xuICAgIGhlYWRpbmdEaXNwbGF5ZWQgPSB0cnVlO1xuICAgIGFkZFNvcnRpbmdQb3NzaWJpbGl0eSgpXG4gIH1cbiAgZm9yIChsZXQgaT0wOyBpPHRhc2tBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFza0RpdlwiKTtcbiAgICB3cmFwcGVyLmlubmVySFRNTCA9IFxuICAgIGA8cD4ke3Rhc2tBcnJheVtpXS5kdWVEYXRlfTwvcD5cbiAgICA8cD4ke3Rhc2tBcnJheVtpXS50aXRsZX08L3A+XG4gICAgPHA+JHt0YXNrQXJyYXlbaV0ucHJpb3JpdHl9PC9wPmBcbiAgICBsZXQgZGVsZXRlVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlVGFza0J0bi5pbm5lckhUTUwgPSBcIlhcIjtcbiAgICBkZWxldGVUYXNrQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVsZXRlVGFza0J0blwiKTtcbiAgICBkZWxldGVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcImluc2lkZSBldmVudCBsaXN0ZW5lclwiKTtcbiAgICAgIGRlbGV0ZVRhc2sodGFza0FycmF5W2ldLmluZGV4KTtcbiAgICAgIGNvbnNvbGUubG9nKHRhc2tBcnJheSk7XG4gICAgICB3cmFwcGVyLnJlbW92ZSgpO1xuICAgIH0pO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZGVsZXRlVGFza0J0bik7XG4gICAgdGFza1NwYWNlLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICB9XG4gIGxldCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkVGFza0J0bi5pbm5lckhUTUwgPSBcIkFkZCBUYXNrXCJcbiAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRhc2tGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIiA7XG4gIH0pO1xuICB0YXNrU3BhY2UuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG59O1xuXG5mdW5jdGlvbiBzb3J0QnlEYXRlRmN0KG9yZGVyKSB7XG4gIGlmIChvcmRlciA9PT0gXCJhc2NlbmRpbmdcIikge1xuICAgIGNvbnNvbGUubG9nKFwiaW5zaWRlIGFzY2VuZGluZ1wiKVxuICAgIHJldmVyc2VkID0gdHJ1ZTtcbiAgICBsZXQgc29ydGJ5RGF0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydGJ5RGF0ZVwiKTtcbiAgICBzb3J0YnlEYXRlQnRuLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKDE4MGRlZylcIjtcbiAgICB0YXNrQXJyYXkuc29ydChmdW5jdGlvbihhLGIpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShhLmR1ZURhdGUpIC0gbmV3IERhdGUoYi5kdWVEYXRlKVxuICAgIH0pXG4gICAgc2hvd0FsbFRhc2tzKClcbiAgfVxuICBlbHNlIGlmIChvcmRlciA9PT0gXCJkZXNjZW5kaW5nXCIpIHtcbiAgICBjb25zb2xlLmxvZyhcImluc2lkZSBkZXNjZW5kaW5nXCIpXG4gICAgbGV0IHNvcnRieURhdGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnRieURhdGVcIik7XG4gICAgc29ydGJ5RGF0ZUJ0bi5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSgwZGVnKVwiO1xuICAgIHJldmVyc2VkID0gZmFsc2U7XG4gICAgdGFza0FycmF5LnNvcnQoZnVuY3Rpb24oYSxiKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoYi5kdWVEYXRlKSAtIG5ldyBEYXRlKGEuZHVlRGF0ZSlcbiAgICB9KVxuICAgIHNob3dBbGxUYXNrcygpXG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkU29ydGluZ1Bvc3NpYmlsaXR5KCkge1xuICBsZXQgc29ydGJ5RGF0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydGJ5RGF0ZVwiKTtcbiAgc29ydGJ5RGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICByZXZlcnNlZCA/IHNvcnRCeURhdGVGY3QoXCJkZXNjZW5kaW5nXCIpIDogc29ydEJ5RGF0ZUZjdChcImFzY2VuZGluZ1wiKVxuICB9KTtcbn1cbiIsImV4cG9ydCB7dGFza0FycmF5LCBwcm9qZWN0QXJyYXksIGZpbHRlclRhc2tzLCBjcmVhdGVUYXNrLCBkZWxldGVUYXNrLCB0YXNrTnJ9XG5pbXBvcnQgeyBhcHBlbmRQcm9qZWN0cywgdXBkYXRlUHJvamVjdFNlbGVjdCwgdGFza05yIH0gZnJvbSBcIi4vZG9tXCI7XG5cbmxldCB0YXNrQXJyYXkgPSBbXTtcbmxldCBwcm9qZWN0QXJyYXkgPSBbXCJEZWZhdWx0XCJdO1xuXG5hcHBlbmRQcm9qZWN0cygpXG51cGRhdGVQcm9qZWN0U2VsZWN0KClcblxubGV0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRhc2tCdG5cIilcbiAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB0YXNrRm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCIgO1xuICB9KVxuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKHRpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIHByb2plY3QsIHRhc2tBKSB7XG4gICAgY29uc3QgaW5kZXggPSB0YXNrQVxuICByZXR1cm4ge3RpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIHByb2plY3QsIGluZGV4fVxufVxuXG5mdW5jdGlvbiBmaWx0ZXJUYXNrcyhwcm9qZWN0LCBhcnJheSkge1xuICBjb25zdCBmaWx0ZXJlZFRhc2tBcnJheSA9IGFycmF5LmZpbHRlcih0YXNrID0+IHRhc2sucHJvamVjdCA9PT0gcHJvamVjdClcbiAgcmV0dXJuIGZpbHRlcmVkVGFza0FycmF5XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2soaSkge1xuICB0YXNrQXJyYXkuc3BsaWNlKCh0YXNrQXJyYXkuaW5kZXhPZih0YXNrQXJyYXkuZmluZCgodGFzaykgPT4gdGFzay5pbmRleCA9PT0gaSkpKSwgMSk7XG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9kb20uanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=