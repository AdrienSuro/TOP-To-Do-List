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
/* harmony export */   "showTasks": () => (/* binding */ showTasks),
/* harmony export */   "taskForm": () => (/* binding */ taskForm),
/* harmony export */   "updateProjectSelect": () => (/* binding */ updateProjectSelect)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


const sidebarProjects = document.getElementById("sidebarProjects");
const taskSpace = document.getElementById("taskSpace");
const body = document.getElementById("body");
const taskForm = document.getElementById("taskForm");
const projectSelect = document.getElementById("projectSelect");
const addProjectForm = document.getElementById("addProjectForm");
const addNewProjectBtn = document.getElementById("addNewProjectBtn")
const testBtn1 = document.getElementById("testBtn1")
const testBtn2 = document.getElementById("testBtn2");
const showAllTasksBtn = document.getElementById("showAllTasksBtn");

// Retrieves all the Projects from TaskArray and show them in sidebar
function appendProjects() {
  for (let i=0; i<_index_js__WEBPACK_IMPORTED_MODULE_0__.projectArray.length; i++) {
    let project = document.createElement('button');
    project.innerHTML = _index_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[i];
    project.setAttribute("id", "projectBtn");
    project.addEventListener("click", () => showTasks(_index_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[i]))
    sidebarProjects.appendChild(project)
  }
};

function showTasks(arg) {
  let filteredArray = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.filterTasks)(arg, _index_js__WEBPACK_IMPORTED_MODULE_0__.taskArray);
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
  _index_js__WEBPACK_IMPORTED_MODULE_0__.projectArray.push(addProjectForm.newProjectName.value);
  console.log(_index_js__WEBPACK_IMPORTED_MODULE_0__.projectArray);
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
/* harmony export */   "filterTasks": () => (/* binding */ filterTasks),
/* harmony export */   "projectArray": () => (/* binding */ projectArray),
/* harmony export */   "saveTask": () => (/* binding */ saveTask),
/* harmony export */   "taskArray": () => (/* binding */ taskArray)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");

;

let taskArray = [];
let projectArray = ["Default"];

(0,_dom__WEBPACK_IMPORTED_MODULE_0__.appendProjects)()
;(0,_dom__WEBPACK_IMPORTED_MODULE_0__.updateProjectSelect)()


function createTask(title, dueDate, description, priority, project) {
  const testlog = function() {console.log("Testlog inside the task works")};
  return {testlog, title, dueDate, description, priority, project}
}

// Filter the task array according to project 
function filterTasks(project, array) {
  const filteredTaskArray = array.filter(task => task.project === project)
  return filteredTaskArray
}

let saveTaskBtn = document.getElementById("saveTaskBtn");
let newForm = document.getElementById("taskForm");

newForm.addEventListener('submit', saveTask, false)

function saveTask(event) {
  console.log("We're inside saveTask")
  let newTask = createTask(newForm.title.value, newForm.dueDate.value, newForm.description.value, newForm.priority.value, newForm.project.value)
    console.log(newTask.project);
    taskArray.push(newTask);
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.showTasks)(newTask.project);
    console.log(taskArray);
    newForm.reset();
    _dom__WEBPACK_IMPORTED_MODULE_0__.taskForm.style.visibility = "hidden"
    // setTimeout(hideTaskForm, 1000);
    event.preventDefault();
}
// saveTaskBtn.addEventListener("click", () => {
//   if (newForm.title.value != "" && newForm.dueDate.value != "") {
//     let newTask = createTask(newForm.title.value, newForm.dueDate.value, newForm.description.value, newForm.priority.value, newForm.project.value)
//     console.log(newTask.project);
//     taskArray.push(newTask);
//     showTasks(newTask.project);
//     console.log(taskArray);
//     setTimeout(hideTaskForm, 10000);
//   }
// })

// function hideTaskForm() {
//   taskForm.style.visibility = "hidden"
// }

console.log("test")

const createToDoList = (title) => {
  const remove = () => toDoArray.slice;
  const move = () => toDoArray.splice;
  const addTask = function() {
    let promptTaskName = prompt("What's the task name ?");
    let task = createTask(promptTaskName);
    taskArray.push(task);
    console.log(taskArray);
  }
  return {remove, move, addTask, title};
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBaUU7O0FBRWpFO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ087QUFDUCxnQkFBZ0IsRUFBRSwwREFBbUIsRUFBRTtBQUN2QztBQUNBLHdCQUF3QixtREFBWTtBQUNwQztBQUNBLHNEQUFzRCxtREFBWTtBQUNsRTtBQUNBO0FBQ0E7O0FBRU87QUFDUCxzQkFBc0Isc0RBQVcsTUFBTSxnREFBUztBQUNoRDtBQUNBO0FBQ0EsZ0JBQWdCLHdCQUF3QjtBQUN4QztBQUNBO0FBQ0EsU0FBUyx5QkFBeUI7QUFDbEMsU0FBUyx1QkFBdUI7QUFDaEMsU0FBUywwQkFBMEI7QUFDbkM7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBLEVBQUUsd0RBQWlCO0FBQ25CLGNBQWMsbURBQVk7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDTztBQUNQO0FBQ0EsZ0JBQWdCLEVBQUUsMERBQW1CLEVBQUU7QUFDdkMsa0RBQWtELG1EQUFZLElBQUksSUFBSSxtREFBWSxJQUFJO0FBQ3RGO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixFQUFFLHVEQUFnQixFQUFFO0FBQ3BDO0FBQ0E7QUFDQSxTQUFTLGdEQUFTLFlBQVk7QUFDOUIsU0FBUyxnREFBUyxVQUFVO0FBQzVCLFNBQVMsZ0RBQVMsYUFBYTtBQUMvQjtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFNEM7QUFDN0MsQ0FBaUY7O0FBRWpGO0FBQ0E7O0FBRUEsb0RBQWM7QUFDZCwwREFBbUI7OztBQUduQjtBQUNBLDhCQUE4QjtBQUM5QixVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLCtDQUFTO0FBQ2I7QUFDQTtBQUNBLElBQUksMkRBQXlCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7O0FBRUo7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjs7Ozs7O1VDakVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvcC10by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvcC10by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRhc2tBcnJheSwgZmlsdGVyVGFza3MsIHByb2plY3RBcnJheSB9IGZyb20gXCIuL2luZGV4LmpzXCJcblxuY29uc3Qgc2lkZWJhclByb2plY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyUHJvamVjdHNcIik7XG5jb25zdCB0YXNrU3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tTcGFjZVwiKTtcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvZHlcIik7XG5leHBvcnQgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tGb3JtXCIpO1xuY29uc3QgcHJvamVjdFNlbGVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicHJvamVjdFNlbGVjdFwiKTtcbmNvbnN0IGFkZFByb2plY3RGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRQcm9qZWN0Rm9ybVwiKTtcbmNvbnN0IGFkZE5ld1Byb2plY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZE5ld1Byb2plY3RCdG5cIilcbmNvbnN0IHRlc3RCdG4xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXN0QnRuMVwiKVxuY29uc3QgdGVzdEJ0bjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlc3RCdG4yXCIpO1xuY29uc3Qgc2hvd0FsbFRhc2tzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG93QWxsVGFza3NCdG5cIik7XG5cbi8vIFJldHJpZXZlcyBhbGwgdGhlIFByb2plY3RzIGZyb20gVGFza0FycmF5IGFuZCBzaG93IHRoZW0gaW4gc2lkZWJhclxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFByb2plY3RzKCkge1xuICBmb3IgKGxldCBpPTA7IGk8cHJvamVjdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHByb2plY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBwcm9qZWN0LmlubmVySFRNTCA9IHByb2plY3RBcnJheVtpXTtcbiAgICBwcm9qZWN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwicHJvamVjdEJ0blwiKTtcbiAgICBwcm9qZWN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBzaG93VGFza3MocHJvamVjdEFycmF5W2ldKSlcbiAgICBzaWRlYmFyUHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdClcbiAgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dUYXNrcyhhcmcpIHtcbiAgbGV0IGZpbHRlcmVkQXJyYXkgPSBmaWx0ZXJUYXNrcyhhcmcsIHRhc2tBcnJheSk7XG4gIGNvbnNvbGUubG9nKGZpbHRlcmVkQXJyYXkpXG4gIHRhc2tTcGFjZS5pbm5lckhUTUwgPSBcIlwiO1xuICBmb3IgKGxldCBpPTA7IGk8ZmlsdGVyZWRBcnJheS5sZW5ndGg7IGkrKykge1xuICB0YXNrU3BhY2UuaW5uZXJIVE1MICs9IFxuICAgIGA8ZGl2IGlkPVwidGFza0RpdlwiPlxuICAgIDxwPiR7ZmlsdGVyZWRBcnJheVtpXS5kdWVEYXRlfTwvcD5cbiAgICA8cD4ke2ZpbHRlcmVkQXJyYXlbaV0udGl0bGV9PC9wPlxuICAgIDxwPiR7ZmlsdGVyZWRBcnJheVtpXS5wcmlvcml0eX08L3A+YFxuICB9XG59XG5cbnRlc3RCdG4yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIGFkZFByb2plY3RGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIlxufSlcblxuYWRkTmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBwcm9qZWN0QXJyYXkucHVzaChhZGRQcm9qZWN0Rm9ybS5uZXdQcm9qZWN0TmFtZS52YWx1ZSk7XG4gIGNvbnNvbGUubG9nKHByb2plY3RBcnJheSk7XG4gIHNpZGViYXJQcm9qZWN0cy5pbm5lckhUTUwgPSBcIlwiO1xuICBhcHBlbmRQcm9qZWN0cygpO1xuICB1cGRhdGVQcm9qZWN0U2VsZWN0KCk7XG4gIGFkZFByb2plY3RGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiXG59KTtcblxuLy9TaG93Rm9ybSBvbiB0aGUgcGFnZSBkeW5hbWljYWxseTtcbnRlc3RCdG4xLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHRhc2tGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIiA7XG59KVxuXG4vL0R5bmFtaWNhbGx5IGNyZWF0ZSBwcm9qZWN0IG9wdGlvbnMgaW4gdGhlIGZvcm0gOlxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVByb2plY3RTZWxlY3QoKSB7XG4gIHByb2plY3RTZWxlY3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgZm9yIChsZXQgaT0wOyBpPHByb2plY3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIHByb2plY3RTZWxlY3QuaW5uZXJIVE1MICs9IGA8b3B0aW9uIHZhbHVlID1cIiR7cHJvamVjdEFycmF5W2ldfVwiPiR7cHJvamVjdEFycmF5W2ldfTwvb3B0aW9uPmA7XG4gIH1cbn07XG5cbnNob3dBbGxUYXNrc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB0YXNrU3BhY2UuaW5uZXJIVE1MID0gXCJcIjtcbiAgZm9yIChsZXQgaT0wOyBpPHRhc2tBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIHRhc2tTcGFjZS5pbm5lckhUTUwgKz0gXG4gICAgYDxkaXYgaWQ9XCJ0YXNrRGl2XCI+XG4gICAgPHA+JHt0YXNrQXJyYXlbaV0uZHVlRGF0ZX08L3A+XG4gICAgPHA+JHt0YXNrQXJyYXlbaV0udGl0bGV9PC9wPlxuICAgIDxwPiR7dGFza0FycmF5W2ldLnByaW9yaXR5fTwvcD5gXG4gIH1cbn0pOyIsImV4cG9ydCB7dGFza0FycmF5LCBwcm9qZWN0QXJyYXksIGZpbHRlclRhc2tzfVxuaW1wb3J0IHsgYXBwZW5kUHJvamVjdHMsIHRhc2tGb3JtLCB1cGRhdGVQcm9qZWN0U2VsZWN0LCBzaG93VGFza3MgfSBmcm9tIFwiLi9kb21cIjtcblxubGV0IHRhc2tBcnJheSA9IFtdO1xubGV0IHByb2plY3RBcnJheSA9IFtcIkRlZmF1bHRcIl07XG5cbmFwcGVuZFByb2plY3RzKClcbnVwZGF0ZVByb2plY3RTZWxlY3QoKVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICBjb25zdCB0ZXN0bG9nID0gZnVuY3Rpb24oKSB7Y29uc29sZS5sb2coXCJUZXN0bG9nIGluc2lkZSB0aGUgdGFzayB3b3Jrc1wiKX07XG4gIHJldHVybiB7dGVzdGxvZywgdGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgcHJvamVjdH1cbn1cblxuLy8gRmlsdGVyIHRoZSB0YXNrIGFycmF5IGFjY29yZGluZyB0byBwcm9qZWN0IFxuZnVuY3Rpb24gZmlsdGVyVGFza3MocHJvamVjdCwgYXJyYXkpIHtcbiAgY29uc3QgZmlsdGVyZWRUYXNrQXJyYXkgPSBhcnJheS5maWx0ZXIodGFzayA9PiB0YXNrLnByb2plY3QgPT09IHByb2plY3QpXG4gIHJldHVybiBmaWx0ZXJlZFRhc2tBcnJheVxufVxuXG5sZXQgc2F2ZVRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNhdmVUYXNrQnRuXCIpO1xubGV0IG5ld0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tGb3JtXCIpO1xuXG5uZXdGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHNhdmVUYXNrLCBmYWxzZSlcblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVUYXNrKGV2ZW50KSB7XG4gIGNvbnNvbGUubG9nKFwiV2UncmUgaW5zaWRlIHNhdmVUYXNrXCIpXG4gIGxldCBuZXdUYXNrID0gY3JlYXRlVGFzayhuZXdGb3JtLnRpdGxlLnZhbHVlLCBuZXdGb3JtLmR1ZURhdGUudmFsdWUsIG5ld0Zvcm0uZGVzY3JpcHRpb24udmFsdWUsIG5ld0Zvcm0ucHJpb3JpdHkudmFsdWUsIG5ld0Zvcm0ucHJvamVjdC52YWx1ZSlcbiAgICBjb25zb2xlLmxvZyhuZXdUYXNrLnByb2plY3QpO1xuICAgIHRhc2tBcnJheS5wdXNoKG5ld1Rhc2spO1xuICAgIHNob3dUYXNrcyhuZXdUYXNrLnByb2plY3QpO1xuICAgIGNvbnNvbGUubG9nKHRhc2tBcnJheSk7XG4gICAgbmV3Rm9ybS5yZXNldCgpO1xuICAgIHRhc2tGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiXG4gICAgLy8gc2V0VGltZW91dChoaWRlVGFza0Zvcm0sIDEwMDApO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59XG4vLyBzYXZlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuLy8gICBpZiAobmV3Rm9ybS50aXRsZS52YWx1ZSAhPSBcIlwiICYmIG5ld0Zvcm0uZHVlRGF0ZS52YWx1ZSAhPSBcIlwiKSB7XG4vLyAgICAgbGV0IG5ld1Rhc2sgPSBjcmVhdGVUYXNrKG5ld0Zvcm0udGl0bGUudmFsdWUsIG5ld0Zvcm0uZHVlRGF0ZS52YWx1ZSwgbmV3Rm9ybS5kZXNjcmlwdGlvbi52YWx1ZSwgbmV3Rm9ybS5wcmlvcml0eS52YWx1ZSwgbmV3Rm9ybS5wcm9qZWN0LnZhbHVlKVxuLy8gICAgIGNvbnNvbGUubG9nKG5ld1Rhc2sucHJvamVjdCk7XG4vLyAgICAgdGFza0FycmF5LnB1c2gobmV3VGFzayk7XG4vLyAgICAgc2hvd1Rhc2tzKG5ld1Rhc2sucHJvamVjdCk7XG4vLyAgICAgY29uc29sZS5sb2codGFza0FycmF5KTtcbi8vICAgICBzZXRUaW1lb3V0KGhpZGVUYXNrRm9ybSwgMTAwMDApO1xuLy8gICB9XG4vLyB9KVxuXG4vLyBmdW5jdGlvbiBoaWRlVGFza0Zvcm0oKSB7XG4vLyAgIHRhc2tGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiXG4vLyB9XG5cbmNvbnNvbGUubG9nKFwidGVzdFwiKVxuXG5jb25zdCBjcmVhdGVUb0RvTGlzdCA9ICh0aXRsZSkgPT4ge1xuICBjb25zdCByZW1vdmUgPSAoKSA9PiB0b0RvQXJyYXkuc2xpY2U7XG4gIGNvbnN0IG1vdmUgPSAoKSA9PiB0b0RvQXJyYXkuc3BsaWNlO1xuICBjb25zdCBhZGRUYXNrID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IHByb21wdFRhc2tOYW1lID0gcHJvbXB0KFwiV2hhdCdzIHRoZSB0YXNrIG5hbWUgP1wiKTtcbiAgICBsZXQgdGFzayA9IGNyZWF0ZVRhc2socHJvbXB0VGFza05hbWUpO1xuICAgIHRhc2tBcnJheS5wdXNoKHRhc2spO1xuICAgIGNvbnNvbGUubG9nKHRhc2tBcnJheSk7XG4gIH1cbiAgcmV0dXJuIHtyZW1vdmUsIG1vdmUsIGFkZFRhc2ssIHRpdGxlfTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9kb20uanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=