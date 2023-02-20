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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlGOztBQUV6RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLGdCQUFnQixFQUFFLDBEQUFtQixFQUFFO0FBQ3ZDO0FBQ0Esd0JBQXdCLG1EQUFZO0FBQ3BDO0FBQ0Esc0RBQXNELG1EQUFZO0FBQ2xFO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGdCQUFnQixxREFBVTtBQUMxQixJQUFJLHFEQUFjO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSxzQkFBc0Isc0RBQVcsTUFBTSxnREFBUztBQUNoRDtBQUNBO0FBQ0EsZ0JBQWdCLHdCQUF3QjtBQUN4QztBQUNBO0FBQ0E7QUFDQSxZQUFZLHlCQUF5QjtBQUNyQyxXQUFXLHVCQUF1QjtBQUNsQyxXQUFXLDBCQUEwQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxxREFBVTtBQUNoQixrQkFBa0IsZ0RBQVM7QUFDM0I7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBLEVBQUUsd0RBQWlCO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQSxnQkFBZ0IsRUFBRSwwREFBbUIsRUFBRTtBQUN2QyxrREFBa0QsbURBQVksSUFBSSxJQUFJLG1EQUFZLElBQUk7QUFDdEY7QUFDQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0EsZ0JBQWdCLEVBQUUsdURBQWdCLEVBQUU7QUFDcEM7QUFDQTtBQUNBLFNBQVMsZ0RBQVMsWUFBWTtBQUM5QixTQUFTLGdEQUFTLFVBQVU7QUFDNUIsU0FBUyxnREFBUyxhQUFhO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JIcUU7QUFDckUsQ0FBOEU7O0FBRTlFO0FBQ0E7O0FBRUEsb0RBQWM7QUFDZCwwREFBbUI7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7VUM1QkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcC10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvcC10by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdGFza0FycmF5LCBmaWx0ZXJUYXNrcywgcHJvamVjdEFycmF5LCBjcmVhdGVUYXNrLCBkZWxldGVUYXNrIH0gZnJvbSBcIi4vaW5kZXguanNcIlxuXG5jb25zdCBzaWRlYmFyUHJvamVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJQcm9qZWN0c1wiKTtcbmNvbnN0IHRhc2tTcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza1NwYWNlXCIpO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keVwiKTtcbmNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRm9ybVwiKTtcbmNvbnN0IHByb2plY3RTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RTZWxlY3RcIik7XG5jb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJvamVjdEZvcm1cIik7XG5jb25zdCBzdWJtaXROZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXROZXdQcm9qZWN0QnRuXCIpXG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRQcm9qZWN0QnRuXCIpO1xuY29uc3Qgc2hvd0FsbFRhc2tzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG93QWxsVGFza3NCdG5cIik7XG5jb25zdCBuZXdGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRm9ybVwiKTtcbmNvbnN0IGNsb3NlRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2VGb3JtXCIpXG5cbmxldCBoZWFkaW5nID0gXG4gIGA8ZGl2IGlkPVwidGFza0RpdlwiPlxuICA8cD5EdWUgRGF0ZTwvcD5cbiAgPHA+VGl0bGU8L3A+XG4gIDxwPlByaW9yaXR5PC9wPlxuICA8cD5EZWxldGUgdGFzazwvcD5gO1xuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kUHJvamVjdHMoKSB7XG4gIGZvciAobGV0IGk9MTsgaTxwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3QuaW5uZXJIVE1MID0gcHJvamVjdEFycmF5W2ldO1xuICAgIHByb2plY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0QnRuXCIpO1xuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHNob3dUYXNrcyhwcm9qZWN0QXJyYXlbaV0pKVxuICAgIHNpZGViYXJQcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0KVxuICB9XG59O1xuXG5uZXdGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHNhdmVUYXNrLCBmYWxzZSlcblxuZnVuY3Rpb24gc2F2ZVRhc2soZXZlbnQpIHtcbiAgbGV0IG5ld1Rhc2sgPSBjcmVhdGVUYXNrKG5ld0Zvcm0udGl0bGUudmFsdWUsIG5ld0Zvcm0uZHVlRGF0ZS52YWx1ZSwgbmV3Rm9ybS5kZXNjcmlwdGlvbi52YWx1ZSwgbmV3Rm9ybS5wcmlvcml0eS52YWx1ZSwgbmV3Rm9ybS5wcm9qZWN0LnZhbHVlKVxuICAgIHRhc2tBcnJheS5wdXNoKG5ld1Rhc2spO1xuICAgIHNob3dUYXNrcyhuZXdUYXNrLnByb2plY3QpO1xuICAgIG5ld0Zvcm0ucmVzZXQoKTtcbiAgICB0YXNrRm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG5cbmNsb3NlRm9ybS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgdGFza0Zvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG59KVxuXG5mdW5jdGlvbiBzaG93VGFza3MoYXJnKSB7XG4gIGxldCBmaWx0ZXJlZEFycmF5ID0gZmlsdGVyVGFza3MoYXJnLCB0YXNrQXJyYXkpO1xuICB0YXNrU3BhY2UuaW5uZXJIVE1MID0gXCJcIjtcbiAgdGFza1NwYWNlLmlubmVySFRNTCArPSBoZWFkaW5nO1xuICBmb3IgKGxldCBpPTA7IGk8ZmlsdGVyZWRBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrRGl2XCIpO1xuICAgIHdyYXBwZXIuaW5uZXJIVE1MID0gXG4gICAgICBgPHA+JHtmaWx0ZXJlZEFycmF5W2ldLmR1ZURhdGV9PC9wPlxuICAgICAgPHA+JHtmaWx0ZXJlZEFycmF5W2ldLnRpdGxlfTwvcD5cbiAgICAgIDxwPiR7ZmlsdGVyZWRBcnJheVtpXS5wcmlvcml0eX08L3A+YFxuICAgIGxldCBkZWxldGVUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVUYXNrQnRuLmlubmVySFRNTCA9IFwiWFwiO1xuICAgIGRlbGV0ZVRhc2tCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZWxldGVUYXNrQnRuXCIpO1xuICAgIGRlbGV0ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiaW5zaWRlIGV2ZW50IGxpc3RlbmVyXCIpO1xuICAgICAgZGVsZXRlVGFzayhmaWx0ZXJlZEFycmF5W2ldLmluZGV4KVxuICAgICAgY29uc29sZS5sb2codGFza0FycmF5KTtcbiAgICAgIHdyYXBwZXIucmVtb3ZlKCk7XG4gICAgfSk7XG4gICAgd3JhcHBlci5hcHBlbmRDaGlsZChkZWxldGVUYXNrQnRuKTtcbiAgICB0YXNrU3BhY2UuYXBwZW5kQ2hpbGQod3JhcHBlcik7XG4gIH1cbiAgbGV0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRUYXNrQnRuLmlubmVySFRNTCA9IFwiQWRkIFRhc2tcIlxuICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdGFza0Zvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiIDtcbiAgfSk7XG4gIHRhc2tTcGFjZS5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcbn1cblxuYWRkUHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBuZXdQcm9qZWN0Rm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCJcbn0pXG5cbnN1Ym1pdE5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFByb2plY3QsIGZhbHNlKTtcblxuZnVuY3Rpb24gYWRkUHJvamVjdChldmVudCkge1xuICBwcm9qZWN0QXJyYXkucHVzaChuZXdQcm9qZWN0Rm9ybS5uZXdQcm9qZWN0TmFtZS52YWx1ZSk7XG4gIHNpZGViYXJQcm9qZWN0cy5pbm5lckhUTUwgPSBcIlwiO1xuICBhcHBlbmRQcm9qZWN0cygpO1xuICB1cGRhdGVQcm9qZWN0U2VsZWN0KCk7XG4gIG5ld1Byb2plY3RGb3JtLnJlc2V0KCk7XG4gIG5ld1Byb2plY3RGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVByb2plY3RTZWxlY3QoKSB7XG4gIHByb2plY3RTZWxlY3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgZm9yIChsZXQgaT0wOyBpPHByb2plY3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIHByb2plY3RTZWxlY3QuaW5uZXJIVE1MICs9IGA8b3B0aW9uIHZhbHVlID1cIiR7cHJvamVjdEFycmF5W2ldfVwiPiR7cHJvamVjdEFycmF5W2ldfTwvb3B0aW9uPmA7XG4gIH1cbn07XG5cbnNob3dBbGxUYXNrc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd0FsbFRhc2tzKVxuXG5leHBvcnQgZnVuY3Rpb24gc2hvd0FsbFRhc2tzKCkge1xuICB0YXNrU3BhY2UuaW5uZXJIVE1MID0gXCJcIjtcbiAgZm9yIChsZXQgaT0wOyBpPHRhc2tBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIHRhc2tTcGFjZS5pbm5lckhUTUwgKz0gXG4gICAgYDxkaXYgaWQ9XCJ0YXNrRGl2XCI+XG4gICAgPHA+JHt0YXNrQXJyYXlbaV0uZHVlRGF0ZX08L3A+XG4gICAgPHA+JHt0YXNrQXJyYXlbaV0udGl0bGV9PC9wPlxuICAgIDxwPiR7dGFza0FycmF5W2ldLnByaW9yaXR5fTwvcD5gXG4gIH1cbiAgbGV0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRUYXNrQnRuLmlubmVySFRNTCA9IFwiQWRkIFRhc2tcIlxuICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgdGFza0Zvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiIDtcbiAgfSk7XG4gIHRhc2tTcGFjZS5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcbn07IiwiZXhwb3J0IHt0YXNrQXJyYXksIHByb2plY3RBcnJheSwgZmlsdGVyVGFza3MsIGNyZWF0ZVRhc2ssIGRlbGV0ZVRhc2t9XG5pbXBvcnQgeyBhcHBlbmRQcm9qZWN0cywgdXBkYXRlUHJvamVjdFNlbGVjdCwgYWRkRXZlbnRMaXN0ZW5lciB9IGZyb20gXCIuL2RvbVwiO1xuXG5sZXQgdGFza0FycmF5ID0gW107XG5sZXQgcHJvamVjdEFycmF5ID0gW1wiRGVmYXVsdFwiXTtcblxuYXBwZW5kUHJvamVjdHMoKVxudXBkYXRlUHJvamVjdFNlbGVjdCgpXG5cbmxldCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUYXNrQnRuXCIpXG4gIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgdGFza0Zvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiIDtcbiAgfSlcblxuZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gIGNvbnN0IGluZGV4ID0gKHRhc2tBcnJheS5sZW5ndGgpXG4gIHJldHVybiB7dGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgcHJvamVjdCwgaW5kZXh9XG59XG5cbmZ1bmN0aW9uIGZpbHRlclRhc2tzKHByb2plY3QsIGFycmF5KSB7XG4gIGNvbnN0IGZpbHRlcmVkVGFza0FycmF5ID0gYXJyYXkuZmlsdGVyKHRhc2sgPT4gdGFzay5wcm9qZWN0ID09PSBwcm9qZWN0KVxuICByZXR1cm4gZmlsdGVyZWRUYXNrQXJyYXlcbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFzayhpKSB7XG4gIGNvbnNvbGUubG9nKFwiaW5zaWRlIGRlbGV0ZVRhc2tcIilcbiAgdGFza0FycmF5LnNwbGljZShpLCAxKVxuICBjb25zb2xlLmxvZyh0YXNrQXJyYXkpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=