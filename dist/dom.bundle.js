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
const addTaskBtn = document.getElementById("addTaskBtn")
const addProjectBtn = document.getElementById("addProjectBtn");
const showAllTasksBtn = document.getElementById("showAllTasksBtn");
const newForm = document.getElementById("taskForm");

function appendProjects() {
  for (let i=0; i<_index_js__WEBPACK_IMPORTED_MODULE_0__.projectArray.length; i++) {
    let project = document.createElement('button');
    project.innerHTML = _index_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[i];
    project.setAttribute("id", "projectBtn");
    project.addEventListener("click", () => showTasks(_index_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[i]))
    sidebarProjects.appendChild(project)
  }
};

newForm.addEventListener('submit', saveTask, false)

function saveTask(event) {
  let newTask = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createTask)(newForm.title.value, newForm.dueDate.value, newForm.description.value, newForm.priority.value, newForm.project.value)
    _index_js__WEBPACK_IMPORTED_MODULE_0__.taskArray.push(newTask);
    showTasks(newTask.project);
    newForm.reset();
    taskForm.style.visibility = "hidden"
    event.preventDefault();
}

function showTasks(arg) {
  let filteredArray = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.filterTasks)(arg, _index_js__WEBPACK_IMPORTED_MODULE_0__.taskArray);
  taskSpace.innerHTML = "";
  for (let i=0; i<filteredArray.length; i++) {
  taskSpace.innerHTML += 
    `<div id="taskDiv">
    <p>${filteredArray[i].dueDate}</p>
    <p>${filteredArray[i].title}</p>
    <p>${filteredArray[i].priority}</p>`
  }
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

addTaskBtn.addEventListener("click", () => {
  taskForm.style.visibility = "visible" ;
})

function updateProjectSelect() {
  projectSelect.innerHTML = "";
  for (let i=0; i<_index_js__WEBPACK_IMPORTED_MODULE_0__.projectArray.length; i++) {
    projectSelect.innerHTML += `<option value ="${_index_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[i]}">${_index_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[i]}</option>`;
  }
};

showAllTasksBtn.addEventListener("click", () => {
  taskSpace.innerHTML = "";
  for (let i=0; i<_index_js__WEBPACK_IMPORTED_MODULE_0__.taskArray.length; i++) {
    taskSpace.innerHTML += 
    `<div id="taskDiv">
    <p>${_index_js__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].dueDate}</p>
    <p>${_index_js__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].title}</p>
    <p>${_index_js__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].priority}</p>`
  }
});

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createTask": () => (/* binding */ createTask),
/* harmony export */   "filterTasks": () => (/* binding */ filterTasks),
/* harmony export */   "projectArray": () => (/* binding */ projectArray),
/* harmony export */   "taskArray": () => (/* binding */ taskArray)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");

;

let taskArray = [];
let projectArray = ["Default"];

(0,_dom__WEBPACK_IMPORTED_MODULE_0__.appendProjects)()
;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.updateProjectSelect)()

function createTask(title, dueDate, description, priority, project) {
  return {title, dueDate, description, priority, project}
}

function filterTasks(project, array) {
  const filteredTaskArray = array.filter(task => task.project === project)
  return filteredTaskArray
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQTZFOztBQUU3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1AsZ0JBQWdCLEVBQUUsMERBQW1CLEVBQUU7QUFDdkM7QUFDQSx3QkFBd0IsbURBQVk7QUFDcEM7QUFDQSxzREFBc0QsbURBQVk7QUFDbEU7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsZ0JBQWdCLHFEQUFVO0FBQzFCLElBQUkscURBQWM7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQixzREFBVyxNQUFNLGdEQUFTO0FBQ2hEO0FBQ0EsZ0JBQWdCLHdCQUF3QjtBQUN4QztBQUNBO0FBQ0EsU0FBUyx5QkFBeUI7QUFDbEMsU0FBUyx1QkFBdUI7QUFDaEMsU0FBUywwQkFBMEI7QUFDbkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBLEVBQUUsd0RBQWlCO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVNO0FBQ1A7QUFDQSxnQkFBZ0IsRUFBRSwwREFBbUIsRUFBRTtBQUN2QyxrREFBa0QsbURBQVksSUFBSSxJQUFJLG1EQUFZLElBQUk7QUFDdEY7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLEVBQUUsdURBQWdCLEVBQUU7QUFDcEM7QUFDQTtBQUNBLFNBQVMsZ0RBQVMsWUFBWTtBQUM5QixTQUFTLGdEQUFTLFVBQVU7QUFDNUIsU0FBUyxnREFBUyxhQUFhO0FBQy9CO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbkZ3RDtBQUN6RCxDQUE0RDs7QUFFNUQ7QUFDQTs7QUFFQSxvREFBYztBQUNkLDBEQUFtQjs7QUFFbkI7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ2hCQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC10by1kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcC10by1kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvcC10by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0YXNrQXJyYXksIGZpbHRlclRhc2tzLCBwcm9qZWN0QXJyYXksIGNyZWF0ZVRhc2sgfSBmcm9tIFwiLi9pbmRleC5qc1wiXG5cbmNvbnN0IHNpZGViYXJQcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhclByb2plY3RzXCIpO1xuY29uc3QgdGFza1NwYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrU3BhY2VcIik7XG5jb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2R5XCIpO1xuY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tGb3JtXCIpO1xuY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdFNlbGVjdFwiKTtcbmNvbnN0IG5ld1Byb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJuZXdQcm9qZWN0Rm9ybVwiKTtcbmNvbnN0IHN1Ym1pdE5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInN1Ym1pdE5ld1Byb2plY3RCdG5cIilcbmNvbnN0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFRhc2tCdG5cIilcbmNvbnN0IGFkZFByb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZFByb2plY3RCdG5cIik7XG5jb25zdCBzaG93QWxsVGFza3NCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNob3dBbGxUYXNrc0J0blwiKTtcbmNvbnN0IG5ld0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tGb3JtXCIpO1xuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kUHJvamVjdHMoKSB7XG4gIGZvciAobGV0IGk9MDsgaTxwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3QuaW5uZXJIVE1MID0gcHJvamVjdEFycmF5W2ldO1xuICAgIHByb2plY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0QnRuXCIpO1xuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHNob3dUYXNrcyhwcm9qZWN0QXJyYXlbaV0pKVxuICAgIHNpZGViYXJQcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0KVxuICB9XG59O1xuXG5uZXdGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHNhdmVUYXNrLCBmYWxzZSlcblxuZnVuY3Rpb24gc2F2ZVRhc2soZXZlbnQpIHtcbiAgbGV0IG5ld1Rhc2sgPSBjcmVhdGVUYXNrKG5ld0Zvcm0udGl0bGUudmFsdWUsIG5ld0Zvcm0uZHVlRGF0ZS52YWx1ZSwgbmV3Rm9ybS5kZXNjcmlwdGlvbi52YWx1ZSwgbmV3Rm9ybS5wcmlvcml0eS52YWx1ZSwgbmV3Rm9ybS5wcm9qZWN0LnZhbHVlKVxuICAgIHRhc2tBcnJheS5wdXNoKG5ld1Rhc2spO1xuICAgIHNob3dUYXNrcyhuZXdUYXNrLnByb2plY3QpO1xuICAgIG5ld0Zvcm0ucmVzZXQoKTtcbiAgICB0YXNrRm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmZ1bmN0aW9uIHNob3dUYXNrcyhhcmcpIHtcbiAgbGV0IGZpbHRlcmVkQXJyYXkgPSBmaWx0ZXJUYXNrcyhhcmcsIHRhc2tBcnJheSk7XG4gIHRhc2tTcGFjZS5pbm5lckhUTUwgPSBcIlwiO1xuICBmb3IgKGxldCBpPTA7IGk8ZmlsdGVyZWRBcnJheS5sZW5ndGg7IGkrKykge1xuICB0YXNrU3BhY2UuaW5uZXJIVE1MICs9IFxuICAgIGA8ZGl2IGlkPVwidGFza0RpdlwiPlxuICAgIDxwPiR7ZmlsdGVyZWRBcnJheVtpXS5kdWVEYXRlfTwvcD5cbiAgICA8cD4ke2ZpbHRlcmVkQXJyYXlbaV0udGl0bGV9PC9wPlxuICAgIDxwPiR7ZmlsdGVyZWRBcnJheVtpXS5wcmlvcml0eX08L3A+YFxuICB9XG59XG5cbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbmV3UHJvamVjdEZvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiXG59KVxuXG5zdWJtaXROZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRQcm9qZWN0LCBmYWxzZSk7XG5cbmZ1bmN0aW9uIGFkZFByb2plY3QoZXZlbnQpIHtcbiAgcHJvamVjdEFycmF5LnB1c2gobmV3UHJvamVjdEZvcm0ubmV3UHJvamVjdE5hbWUudmFsdWUpO1xuICBzaWRlYmFyUHJvamVjdHMuaW5uZXJIVE1MID0gXCJcIjtcbiAgYXBwZW5kUHJvamVjdHMoKTtcbiAgdXBkYXRlUHJvamVjdFNlbGVjdCgpO1xuICBuZXdQcm9qZWN0Rm9ybS5yZXNldCgpO1xuICBuZXdQcm9qZWN0Rm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn07XG5cbmFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgdGFza0Zvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiIDtcbn0pXG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVQcm9qZWN0U2VsZWN0KCkge1xuICBwcm9qZWN0U2VsZWN0LmlubmVySFRNTCA9IFwiXCI7XG4gIGZvciAobGV0IGk9MDsgaTxwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBwcm9qZWN0U2VsZWN0LmlubmVySFRNTCArPSBgPG9wdGlvbiB2YWx1ZSA9XCIke3Byb2plY3RBcnJheVtpXX1cIj4ke3Byb2plY3RBcnJheVtpXX08L29wdGlvbj5gO1xuICB9XG59O1xuXG5zaG93QWxsVGFza3NCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgdGFza1NwYWNlLmlubmVySFRNTCA9IFwiXCI7XG4gIGZvciAobGV0IGk9MDsgaTx0YXNrQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICB0YXNrU3BhY2UuaW5uZXJIVE1MICs9IFxuICAgIGA8ZGl2IGlkPVwidGFza0RpdlwiPlxuICAgIDxwPiR7dGFza0FycmF5W2ldLmR1ZURhdGV9PC9wPlxuICAgIDxwPiR7dGFza0FycmF5W2ldLnRpdGxlfTwvcD5cbiAgICA8cD4ke3Rhc2tBcnJheVtpXS5wcmlvcml0eX08L3A+YFxuICB9XG59KTsiLCJleHBvcnQge3Rhc2tBcnJheSwgcHJvamVjdEFycmF5LCBmaWx0ZXJUYXNrcywgY3JlYXRlVGFza31cbmltcG9ydCB7IGFwcGVuZFByb2plY3RzLCB1cGRhdGVQcm9qZWN0U2VsZWN0IH0gZnJvbSBcIi4vZG9tXCI7XG5cbmxldCB0YXNrQXJyYXkgPSBbXTtcbmxldCBwcm9qZWN0QXJyYXkgPSBbXCJEZWZhdWx0XCJdO1xuXG5hcHBlbmRQcm9qZWN0cygpXG51cGRhdGVQcm9qZWN0U2VsZWN0KClcblxuZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gIHJldHVybiB7dGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgcHJvamVjdH1cbn1cblxuZnVuY3Rpb24gZmlsdGVyVGFza3MocHJvamVjdCwgYXJyYXkpIHtcbiAgY29uc3QgZmlsdGVyZWRUYXNrQXJyYXkgPSBhcnJheS5maWx0ZXIodGFzayA9PiB0YXNrLnByb2plY3QgPT09IHByb2plY3QpXG4gIHJldHVybiBmaWx0ZXJlZFRhc2tBcnJheVxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvZG9tLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9