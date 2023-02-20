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

function saveTask(event) {
  let newTask = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.createTask)(newForm.title.value, newForm.dueDate.value, newForm.description.value, newForm.priority.value, newForm.project.value)
    _index_js__WEBPACK_IMPORTED_MODULE_0__.taskArray.push(newTask);
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
      (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.deleteTask)(filteredArray[i].index)
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
/* harmony export */   "taskArray": () => (/* binding */ taskArray)
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

function createTask(title, dueDate, description, priority, project) {
  const index = (taskArray.length)
  return {title, dueDate, description, priority, project, index}
}

function filterTasks(project, array) {
  const filteredTaskArray = array.filter(task => task.project === project)
  return filteredTaskArray
}

function deleteTask(i) {
  console.log("inside deleteTask")
  taskArray.splice(i, 1)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUF5Rjs7QUFFekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCxnQkFBZ0IsRUFBRSwwREFBbUIsRUFBRTtBQUN2QztBQUNBLHdCQUF3QixtREFBWTtBQUNwQztBQUNBLHNEQUFzRCxtREFBWTtBQUNsRTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxnQkFBZ0IscURBQVU7QUFDMUIsSUFBSSxxREFBYztBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0Esc0JBQXNCLHNEQUFXLE1BQU0sZ0RBQVM7QUFDaEQ7QUFDQTtBQUNBLGdCQUFnQix3QkFBd0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0EsWUFBWSx5QkFBeUI7QUFDckMsV0FBVyx1QkFBdUI7QUFDbEMsV0FBVywwQkFBMEI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0scURBQVU7QUFDaEIsa0JBQWtCLGdEQUFTO0FBQzNCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQSxFQUFFLHdEQUFpQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0EsZ0JBQWdCLEVBQUUsMERBQW1CLEVBQUU7QUFDdkMsa0RBQWtELG1EQUFZLElBQUksSUFBSSxtREFBWSxJQUFJO0FBQ3RGO0FBQ0E7O0FBRUE7O0FBRU87QUFDUDtBQUNBLGdCQUFnQixFQUFFLHVEQUFnQixFQUFFO0FBQ3BDO0FBQ0E7QUFDQSxTQUFTLGdEQUFTLFlBQVk7QUFDOUIsU0FBUyxnREFBUyxVQUFVO0FBQzVCLFNBQVMsZ0RBQVMsYUFBYTtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNySHFFO0FBQ3JFLENBQThFOztBQUU5RTtBQUNBOztBQUVBLG9EQUFjO0FBQ2QsMERBQW1COztBQUVuQjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O1VDNUJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvcC10by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvcC10by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRhc2tBcnJheSwgZmlsdGVyVGFza3MsIHByb2plY3RBcnJheSwgY3JlYXRlVGFzaywgZGVsZXRlVGFzayB9IGZyb20gXCIuL2luZGV4LmpzXCJcblxuY29uc3Qgc2lkZWJhclByb2plY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyUHJvamVjdHNcIik7XG5jb25zdCB0YXNrU3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tTcGFjZVwiKTtcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvZHlcIik7XG5jb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0Zvcm1cIik7XG5jb25zdCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0U2VsZWN0XCIpO1xuY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RGb3JtXCIpO1xuY29uc3Qgc3VibWl0TmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0TmV3UHJvamVjdEJ0blwiKVxuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUHJvamVjdEJ0blwiKTtcbmNvbnN0IHNob3dBbGxUYXNrc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hvd0FsbFRhc2tzQnRuXCIpO1xuY29uc3QgbmV3Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0Zvcm1cIik7XG5jb25zdCBjbG9zZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlRm9ybVwiKVxuXG5sZXQgaGVhZGluZyA9IFxuICBgPGRpdiBpZD1cInRhc2tEaXZcIj5cbiAgPHA+RHVlIERhdGU8L3A+XG4gIDxwPlRpdGxlPC9wPlxuICA8cD5Qcmlvcml0eTwvcD5cbiAgPHA+RGVsZXRlIHRhc2s8L3A+YDtcblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFByb2plY3RzKCkge1xuICBmb3IgKGxldCBpPTE7IGk8cHJvamVjdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0LmlubmVySFRNTCA9IHByb2plY3RBcnJheVtpXTtcbiAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdEJ0blwiKTtcbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBzaG93VGFza3MocHJvamVjdEFycmF5W2ldKSlcbiAgICBzaWRlYmFyUHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdClcbiAgfVxufTtcblxubmV3Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBzYXZlVGFzaywgZmFsc2UpXG5cbmZ1bmN0aW9uIHNhdmVUYXNrKGV2ZW50KSB7XG4gIGxldCBuZXdUYXNrID0gY3JlYXRlVGFzayhuZXdGb3JtLnRpdGxlLnZhbHVlLCBuZXdGb3JtLmR1ZURhdGUudmFsdWUsIG5ld0Zvcm0uZGVzY3JpcHRpb24udmFsdWUsIG5ld0Zvcm0ucHJpb3JpdHkudmFsdWUsIG5ld0Zvcm0ucHJvamVjdC52YWx1ZSlcbiAgICB0YXNrQXJyYXkucHVzaChuZXdUYXNrKTtcbiAgICBzaG93VGFza3MobmV3VGFzay5wcm9qZWN0KTtcbiAgICBuZXdGb3JtLnJlc2V0KCk7XG4gICAgdGFza0Zvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5jbG9zZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHRhc2tGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xufSlcblxuZnVuY3Rpb24gc2hvd1Rhc2tzKGFyZykge1xuICBsZXQgZmlsdGVyZWRBcnJheSA9IGZpbHRlclRhc2tzKGFyZywgdGFza0FycmF5KTtcbiAgdGFza1NwYWNlLmlubmVySFRNTCA9IFwiXCI7XG4gIHRhc2tTcGFjZS5pbm5lckhUTUwgKz0gaGVhZGluZztcbiAgZm9yIChsZXQgaT0wOyBpPGZpbHRlcmVkQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFza0RpdlwiKTtcbiAgICB3cmFwcGVyLmlubmVySFRNTCA9IFxuICAgICAgYDxwPiR7ZmlsdGVyZWRBcnJheVtpXS5kdWVEYXRlfTwvcD5cbiAgICAgIDxwPiR7ZmlsdGVyZWRBcnJheVtpXS50aXRsZX08L3A+XG4gICAgICA8cD4ke2ZpbHRlcmVkQXJyYXlbaV0ucHJpb3JpdHl9PC9wPmBcbiAgICBsZXQgZGVsZXRlVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlVGFza0J0bi5pbm5lckhUTUwgPSBcIlhcIjtcbiAgICBkZWxldGVUYXNrQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVsZXRlVGFza0J0blwiKTtcbiAgICBkZWxldGVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcImluc2lkZSBldmVudCBsaXN0ZW5lclwiKTtcbiAgICAgIGRlbGV0ZVRhc2soZmlsdGVyZWRBcnJheVtpXS5pbmRleClcbiAgICAgIGNvbnNvbGUubG9nKHRhc2tBcnJheSk7XG4gICAgICB3cmFwcGVyLnJlbW92ZSgpO1xuICAgIH0pO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZGVsZXRlVGFza0J0bik7XG4gICAgdGFza1NwYWNlLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICB9XG4gIGxldCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkVGFza0J0bi5pbm5lckhUTUwgPSBcIkFkZCBUYXNrXCJcbiAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRhc2tGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIiA7XG4gIH0pO1xuICB0YXNrU3BhY2UuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG59XG5cbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbmV3UHJvamVjdEZvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiXG59KVxuXG5zdWJtaXROZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRQcm9qZWN0LCBmYWxzZSk7XG5cbmZ1bmN0aW9uIGFkZFByb2plY3QoZXZlbnQpIHtcbiAgcHJvamVjdEFycmF5LnB1c2gobmV3UHJvamVjdEZvcm0ubmV3UHJvamVjdE5hbWUudmFsdWUpO1xuICBzaWRlYmFyUHJvamVjdHMuaW5uZXJIVE1MID0gXCJcIjtcbiAgYXBwZW5kUHJvamVjdHMoKTtcbiAgdXBkYXRlUHJvamVjdFNlbGVjdCgpO1xuICBuZXdQcm9qZWN0Rm9ybS5yZXNldCgpO1xuICBuZXdQcm9qZWN0Rm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVQcm9qZWN0U2VsZWN0KCkge1xuICBwcm9qZWN0U2VsZWN0LmlubmVySFRNTCA9IFwiXCI7XG4gIGZvciAobGV0IGk9MDsgaTxwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBwcm9qZWN0U2VsZWN0LmlubmVySFRNTCArPSBgPG9wdGlvbiB2YWx1ZSA9XCIke3Byb2plY3RBcnJheVtpXX1cIj4ke3Byb2plY3RBcnJheVtpXX08L29wdGlvbj5gO1xuICB9XG59O1xuXG5zaG93QWxsVGFza3NCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dBbGxUYXNrcylcblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dBbGxUYXNrcygpIHtcbiAgdGFza1NwYWNlLmlubmVySFRNTCA9IFwiXCI7XG4gIGZvciAobGV0IGk9MDsgaTx0YXNrQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICB0YXNrU3BhY2UuaW5uZXJIVE1MICs9IFxuICAgIGA8ZGl2IGlkPVwidGFza0RpdlwiPlxuICAgIDxwPiR7dGFza0FycmF5W2ldLmR1ZURhdGV9PC9wPlxuICAgIDxwPiR7dGFza0FycmF5W2ldLnRpdGxlfTwvcD5cbiAgICA8cD4ke3Rhc2tBcnJheVtpXS5wcmlvcml0eX08L3A+YFxuICB9XG4gIGxldCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkVGFza0J0bi5pbm5lckhUTUwgPSBcIkFkZCBUYXNrXCJcbiAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRhc2tGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIiA7XG4gIH0pO1xuICB0YXNrU3BhY2UuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG59OyIsImV4cG9ydCB7dGFza0FycmF5LCBwcm9qZWN0QXJyYXksIGZpbHRlclRhc2tzLCBjcmVhdGVUYXNrLCBkZWxldGVUYXNrfVxuaW1wb3J0IHsgYXBwZW5kUHJvamVjdHMsIHVwZGF0ZVByb2plY3RTZWxlY3QsIGFkZEV2ZW50TGlzdGVuZXIgfSBmcm9tIFwiLi9kb21cIjtcblxubGV0IHRhc2tBcnJheSA9IFtdO1xubGV0IHByb2plY3RBcnJheSA9IFtcIkRlZmF1bHRcIl07XG5cbmFwcGVuZFByb2plY3RzKClcbnVwZGF0ZVByb2plY3RTZWxlY3QoKVxuXG5sZXQgYWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza0J0blwiKVxuICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHRhc2tGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIiA7XG4gIH0pXG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICBjb25zdCBpbmRleCA9ICh0YXNrQXJyYXkubGVuZ3RoKVxuICByZXR1cm4ge3RpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIHByb2plY3QsIGluZGV4fVxufVxuXG5mdW5jdGlvbiBmaWx0ZXJUYXNrcyhwcm9qZWN0LCBhcnJheSkge1xuICBjb25zdCBmaWx0ZXJlZFRhc2tBcnJheSA9IGFycmF5LmZpbHRlcih0YXNrID0+IHRhc2sucHJvamVjdCA9PT0gcHJvamVjdClcbiAgcmV0dXJuIGZpbHRlcmVkVGFza0FycmF5XG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVRhc2soaSkge1xuICBjb25zb2xlLmxvZyhcImluc2lkZSBkZWxldGVUYXNrXCIpXG4gIHRhc2tBcnJheS5zcGxpY2UoaSwgMSlcbiAgY29uc29sZS5sb2codGFza0FycmF5KTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2RvbS5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==