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
/* harmony export */   "showAllTasks": () => (/* binding */ showAllTasks),
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
const closeForm = document.getElementById("closeForm")

let heading = 
  `<div id="taskDiv">
  <p>Due Date</p>
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

newForm.addEventListener('submit', saveTask, false)

let taskNr = 0;

function saveTask(event) {
  let newTask = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createTask)(newForm.title.value, newForm.dueDate.value, newForm.description.value, newForm.priority.value, newForm.project.value, taskNr)
  _index_js__WEBPACK_IMPORTED_MODULE_0__.taskArray.push(newTask);
  taskNr += 1;
  showTasks(newTask.project);
  newForm.reset();
  taskForm.style.visibility = "hidden"
  event.preventDefault();
  console.log(taskNr);
  console.log(_index_js__WEBPACK_IMPORTED_MODULE_0__.taskArray);
}

closeForm.addEventListener('click', () => {
  taskForm.style.visibility = "hidden";
})

function showTasks(arg) {
  let filteredArray = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.filterTasks)(arg, _index_js__WEBPACK_IMPORTED_MODULE_0__.taskArray);
  taskSpace.innerHTML = "";
  taskSpace.innerHTML += heading;
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
  taskSpace.innerHTML = "";
  for (let i=0; i<_index_js__WEBPACK_IMPORTED_MODULE_0__.taskArray.length; i++) {
    taskSpace.innerHTML += 
    `<div id="taskDiv">
    <p>${_index_js__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].dueDate}</p>
    <p>${_index_js__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].title}</p>
    <p>${_index_js__WEBPACK_IMPORTED_MODULE_0__.taskArray[i].priority}</p>`
  }
  let addTaskBtn = document.createElement("button");
  addTaskBtn.innerHTML = "Add Task"
  addTaskBtn.addEventListener("click", () => {
    taskForm.style.visibility = "visible" ;
  });
  taskSpace.appendChild(addTaskBtn);
};

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
  console.log(_dom__WEBPACK_IMPORTED_MODULE_0__.taskNr);
  console.log(taskArray);
  taskArray.splice((taskArray.indexOf(taskArray.find((task) => task.index === i))), 1);
  // let testArray = taskArray.filter(function(e) { e.index !== i})
  console.log(taskArray);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUY7O0FBRXpGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1AsZ0JBQWdCLEVBQUUsMERBQW1CLEVBQUU7QUFDdkM7QUFDQSx3QkFBd0IsbURBQVk7QUFDcEM7QUFDQSxzREFBc0QsbURBQVk7QUFDbEU7QUFDQTtBQUNBOztBQUVBOztBQUVPOztBQUVQO0FBQ0EsZ0JBQWdCLHFEQUFVO0FBQzFCLEVBQUUscURBQWM7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnREFBUztBQUN2Qjs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLHNCQUFzQixzREFBVyxNQUFNLGdEQUFTO0FBQ2hEO0FBQ0E7QUFDQSxnQkFBZ0Isd0JBQXdCO0FBQ3hDO0FBQ0E7QUFDQTtBQUNBLFlBQVkseUJBQXlCO0FBQ3JDLFdBQVcsdUJBQXVCO0FBQ2xDLFdBQVcsMEJBQTBCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHFEQUFVO0FBQ2hCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQSxFQUFFLHdEQUFpQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0EsZ0JBQWdCLEVBQUUsMERBQW1CLEVBQUU7QUFDdkMsa0RBQWtELG1EQUFZLElBQUksSUFBSSxtREFBWSxJQUFJO0FBQ3RGO0FBQ0E7O0FBRUE7O0FBRU87QUFDUDtBQUNBLGdCQUFnQixFQUFFLHVEQUFnQixFQUFFO0FBQ3BDO0FBQ0E7QUFDQSxTQUFTLGdEQUFTLFlBQVk7QUFDOUIsU0FBUyxnREFBUyxVQUFVO0FBQzVCLFNBQVMsZ0RBQVMsYUFBYTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekg2RTtBQUM3RSxDQUFvRTs7QUFFcEU7QUFDQTs7QUFFQSxvREFBYztBQUNkLDBEQUFtQjs7QUFFbkI7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsY0FBYyx3Q0FBTTtBQUNwQjtBQUNBO0FBQ0Esb0RBQW9ELGNBQWM7QUFDbEU7QUFDQTs7Ozs7O1VDOUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvcC10by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvcC10by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRhc2tBcnJheSwgZmlsdGVyVGFza3MsIHByb2plY3RBcnJheSwgY3JlYXRlVGFzaywgZGVsZXRlVGFzayB9IGZyb20gXCIuL2luZGV4LmpzXCJcblxuY29uc3Qgc2lkZWJhclByb2plY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyUHJvamVjdHNcIik7XG5jb25zdCB0YXNrU3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tTcGFjZVwiKTtcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvZHlcIik7XG5jb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0Zvcm1cIik7XG5jb25zdCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0U2VsZWN0XCIpO1xuY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RGb3JtXCIpO1xuY29uc3Qgc3VibWl0TmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0TmV3UHJvamVjdEJ0blwiKVxuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUHJvamVjdEJ0blwiKTtcbmNvbnN0IHNob3dBbGxUYXNrc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hvd0FsbFRhc2tzQnRuXCIpO1xuY29uc3QgbmV3Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0Zvcm1cIik7XG5jb25zdCBjbG9zZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlRm9ybVwiKVxuXG5sZXQgaGVhZGluZyA9IFxuICBgPGRpdiBpZD1cInRhc2tEaXZcIj5cbiAgPHA+RHVlIERhdGU8L3A+XG4gIDxwPlRpdGxlPC9wPlxuICA8cD5Qcmlvcml0eTwvcD5cbiAgPHA+RGVsZXRlIHRhc2s8L3A+YDtcblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFByb2plY3RzKCkge1xuICBmb3IgKGxldCBpPTE7IGk8cHJvamVjdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0LmlubmVySFRNTCA9IHByb2plY3RBcnJheVtpXTtcbiAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdEJ0blwiKTtcbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBzaG93VGFza3MocHJvamVjdEFycmF5W2ldKSlcbiAgICBzaWRlYmFyUHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdClcbiAgfVxufTtcblxubmV3Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBzYXZlVGFzaywgZmFsc2UpXG5cbmV4cG9ydCBsZXQgdGFza05yID0gMDtcblxuZnVuY3Rpb24gc2F2ZVRhc2soZXZlbnQpIHtcbiAgbGV0IG5ld1Rhc2sgPSBjcmVhdGVUYXNrKG5ld0Zvcm0udGl0bGUudmFsdWUsIG5ld0Zvcm0uZHVlRGF0ZS52YWx1ZSwgbmV3Rm9ybS5kZXNjcmlwdGlvbi52YWx1ZSwgbmV3Rm9ybS5wcmlvcml0eS52YWx1ZSwgbmV3Rm9ybS5wcm9qZWN0LnZhbHVlLCB0YXNrTnIpXG4gIHRhc2tBcnJheS5wdXNoKG5ld1Rhc2spO1xuICB0YXNrTnIgKz0gMTtcbiAgc2hvd1Rhc2tzKG5ld1Rhc2sucHJvamVjdCk7XG4gIG5ld0Zvcm0ucmVzZXQoKTtcbiAgdGFza0Zvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc29sZS5sb2codGFza05yKTtcbiAgY29uc29sZS5sb2codGFza0FycmF5KTtcbn1cblxuY2xvc2VGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICB0YXNrRm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbn0pXG5cbmZ1bmN0aW9uIHNob3dUYXNrcyhhcmcpIHtcbiAgbGV0IGZpbHRlcmVkQXJyYXkgPSBmaWx0ZXJUYXNrcyhhcmcsIHRhc2tBcnJheSk7XG4gIHRhc2tTcGFjZS5pbm5lckhUTUwgPSBcIlwiO1xuICB0YXNrU3BhY2UuaW5uZXJIVE1MICs9IGhlYWRpbmc7XG4gIGZvciAobGV0IGk9MDsgaTxmaWx0ZXJlZEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpXG4gICAgd3JhcHBlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2tEaXZcIik7XG4gICAgd3JhcHBlci5pbm5lckhUTUwgPSBcbiAgICAgIGA8cD4ke2ZpbHRlcmVkQXJyYXlbaV0uZHVlRGF0ZX08L3A+XG4gICAgICA8cD4ke2ZpbHRlcmVkQXJyYXlbaV0udGl0bGV9PC9wPlxuICAgICAgPHA+JHtmaWx0ZXJlZEFycmF5W2ldLnByaW9yaXR5fTwvcD5gXG4gICAgbGV0IGRlbGV0ZVRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGRlbGV0ZVRhc2tCdG4uaW5uZXJIVE1MID0gXCJYXCI7XG4gICAgZGVsZXRlVGFza0J0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImRlbGV0ZVRhc2tCdG5cIik7XG4gICAgZGVsZXRlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJpbnNpZGUgZXZlbnQgbGlzdGVuZXJcIik7XG4gICAgICBkZWxldGVUYXNrKGZpbHRlcmVkQXJyYXlbaV0uaW5kZXgpO1xuICAgICAgd3JhcHBlci5yZW1vdmUoKTtcbiAgICB9KTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGRlbGV0ZVRhc2tCdG4pO1xuICAgIHRhc2tTcGFjZS5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgfVxuICBsZXQgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFRhc2tCdG4uaW5uZXJIVE1MID0gXCJBZGQgVGFza1wiXG4gIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0YXNrRm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCIgO1xuICB9KTtcbiAgdGFza1NwYWNlLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xufVxuXG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIG5ld1Byb2plY3RGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIlxufSlcblxuc3VibWl0TmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkUHJvamVjdCwgZmFsc2UpO1xuXG5mdW5jdGlvbiBhZGRQcm9qZWN0KGV2ZW50KSB7XG4gIHByb2plY3RBcnJheS5wdXNoKG5ld1Byb2plY3RGb3JtLm5ld1Byb2plY3ROYW1lLnZhbHVlKTtcbiAgc2lkZWJhclByb2plY3RzLmlubmVySFRNTCA9IFwiXCI7XG4gIGFwcGVuZFByb2plY3RzKCk7XG4gIHVwZGF0ZVByb2plY3RTZWxlY3QoKTtcbiAgbmV3UHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgbmV3UHJvamVjdEZvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUHJvamVjdFNlbGVjdCgpIHtcbiAgcHJvamVjdFNlbGVjdC5pbm5lckhUTUwgPSBcIlwiO1xuICBmb3IgKGxldCBpPTA7IGk8cHJvamVjdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgcHJvamVjdFNlbGVjdC5pbm5lckhUTUwgKz0gYDxvcHRpb24gdmFsdWUgPVwiJHtwcm9qZWN0QXJyYXlbaV19XCI+JHtwcm9qZWN0QXJyYXlbaV19PC9vcHRpb24+YDtcbiAgfVxufTtcblxuc2hvd0FsbFRhc2tzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93QWxsVGFza3MpXG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93QWxsVGFza3MoKSB7XG4gIHRhc2tTcGFjZS5pbm5lckhUTUwgPSBcIlwiO1xuICBmb3IgKGxldCBpPTA7IGk8dGFza0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgdGFza1NwYWNlLmlubmVySFRNTCArPSBcbiAgICBgPGRpdiBpZD1cInRhc2tEaXZcIj5cbiAgICA8cD4ke3Rhc2tBcnJheVtpXS5kdWVEYXRlfTwvcD5cbiAgICA8cD4ke3Rhc2tBcnJheVtpXS50aXRsZX08L3A+XG4gICAgPHA+JHt0YXNrQXJyYXlbaV0ucHJpb3JpdHl9PC9wPmBcbiAgfVxuICBsZXQgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFRhc2tCdG4uaW5uZXJIVE1MID0gXCJBZGQgVGFza1wiXG4gIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0YXNrRm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCIgO1xuICB9KTtcbiAgdGFza1NwYWNlLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xufTsiLCJleHBvcnQge3Rhc2tBcnJheSwgcHJvamVjdEFycmF5LCBmaWx0ZXJUYXNrcywgY3JlYXRlVGFzaywgZGVsZXRlVGFzaywgdGFza05yfVxuaW1wb3J0IHsgYXBwZW5kUHJvamVjdHMsIHVwZGF0ZVByb2plY3RTZWxlY3QsIHRhc2tOciB9IGZyb20gXCIuL2RvbVwiO1xuXG5sZXQgdGFza0FycmF5ID0gW107XG5sZXQgcHJvamVjdEFycmF5ID0gW1wiRGVmYXVsdFwiXTtcblxuYXBwZW5kUHJvamVjdHMoKVxudXBkYXRlUHJvamVjdFNlbGVjdCgpXG5cbmxldCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUYXNrQnRuXCIpXG4gIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgdGFza0Zvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiIDtcbiAgfSlcblxuZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBwcm9qZWN0LCB0YXNrQSkge1xuICAgIGNvbnN0IGluZGV4ID0gdGFza0FcbiAgcmV0dXJuIHt0aXRsZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBwcm9qZWN0LCBpbmRleH1cbn1cblxuZnVuY3Rpb24gZmlsdGVyVGFza3MocHJvamVjdCwgYXJyYXkpIHtcbiAgY29uc3QgZmlsdGVyZWRUYXNrQXJyYXkgPSBhcnJheS5maWx0ZXIodGFzayA9PiB0YXNrLnByb2plY3QgPT09IHByb2plY3QpXG4gIHJldHVybiBmaWx0ZXJlZFRhc2tBcnJheVxufVxuXG5mdW5jdGlvbiBkZWxldGVUYXNrKGkpIHtcbiAgY29uc29sZS5sb2codGFza05yKTtcbiAgY29uc29sZS5sb2codGFza0FycmF5KTtcbiAgdGFza0FycmF5LnNwbGljZSgodGFza0FycmF5LmluZGV4T2YodGFza0FycmF5LmZpbmQoKHRhc2spID0+IHRhc2suaW5kZXggPT09IGkpKSksIDEpO1xuICAvLyBsZXQgdGVzdEFycmF5ID0gdGFza0FycmF5LmZpbHRlcihmdW5jdGlvbihlKSB7IGUuaW5kZXggIT09IGl9KVxuICBjb25zb2xlLmxvZyh0YXNrQXJyYXkpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvZG9tLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9