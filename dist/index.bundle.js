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

addNewProjectBtn.addEventListener("click", addProject, false);

function addProject(event) {
  _index_js__WEBPACK_IMPORTED_MODULE_0__.projectArray.push(addProjectForm.newProjectName.value);
  console.log(_index_js__WEBPACK_IMPORTED_MODULE_0__.projectArray);
  sidebarProjects.innerHTML = "";
  appendProjects();
  updateProjectSelect();
  addProjectForm.reset();
  addProjectForm.style.visibility = "hidden";
  event.preventDefault();
};

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
    event.preventDefault();
}


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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRTs7QUFFakU7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDTztBQUNQLGdCQUFnQixFQUFFLDBEQUFtQixFQUFFO0FBQ3ZDO0FBQ0Esd0JBQXdCLG1EQUFZO0FBQ3BDO0FBQ0Esc0RBQXNELG1EQUFZO0FBQ2xFO0FBQ0E7QUFDQTs7QUFFTztBQUNQLHNCQUFzQixzREFBVyxNQUFNLGdEQUFTO0FBQ2hEO0FBQ0E7QUFDQSxnQkFBZ0Isd0JBQXdCO0FBQ3hDO0FBQ0E7QUFDQSxTQUFTLHlCQUF5QjtBQUNsQyxTQUFTLHVCQUF1QjtBQUNoQyxTQUFTLDBCQUEwQjtBQUNuQztBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0EsRUFBRSx3REFBaUI7QUFDbkIsY0FBYyxtREFBWTtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ087QUFDUDtBQUNBLGdCQUFnQixFQUFFLDBEQUFtQixFQUFFO0FBQ3ZDLGtEQUFrRCxtREFBWSxJQUFJLElBQUksbURBQVksSUFBSTtBQUN0RjtBQUNBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsRUFBRSx1REFBZ0IsRUFBRTtBQUNwQztBQUNBO0FBQ0EsU0FBUyxnREFBUyxZQUFZO0FBQzlCLFNBQVMsZ0RBQVMsVUFBVTtBQUM1QixTQUFTLGdEQUFTLGFBQWE7QUFDL0I7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RTRDO0FBQzdDLENBQWlGOztBQUVqRjtBQUNBOztBQUVBLG9EQUFjO0FBQ2QsMERBQW1COzs7QUFHbkI7QUFDQSw4QkFBOEI7QUFDOUIsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSwrQ0FBUztBQUNiO0FBQ0E7QUFDQSxJQUFJLDJEQUF5QjtBQUM3QjtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7Ozs7OztVQ2pEQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC10by1kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcC10by1kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvcC10by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0YXNrQXJyYXksIGZpbHRlclRhc2tzLCBwcm9qZWN0QXJyYXkgfSBmcm9tIFwiLi9pbmRleC5qc1wiXG5cbmNvbnN0IHNpZGViYXJQcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhclByb2plY3RzXCIpO1xuY29uc3QgdGFza1NwYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrU3BhY2VcIik7XG5jb25zdCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2R5XCIpO1xuZXhwb3J0IGNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRm9ybVwiKTtcbmNvbnN0IHByb2plY3RTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RTZWxlY3RcIik7XG5jb25zdCBhZGRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUHJvamVjdEZvcm1cIik7XG5jb25zdCBhZGROZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGROZXdQcm9qZWN0QnRuXCIpXG5jb25zdCB0ZXN0QnRuMSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVzdEJ0bjFcIilcbmNvbnN0IHRlc3RCdG4yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXN0QnRuMlwiKTtcbmNvbnN0IHNob3dBbGxUYXNrc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hvd0FsbFRhc2tzQnRuXCIpO1xuXG4vLyBSZXRyaWV2ZXMgYWxsIHRoZSBQcm9qZWN0cyBmcm9tIFRhc2tBcnJheSBhbmQgc2hvdyB0aGVtIGluIHNpZGViYXJcbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRQcm9qZWN0cygpIHtcbiAgZm9yIChsZXQgaT0wOyBpPHByb2plY3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVjdC5pbm5lckhUTUwgPSBwcm9qZWN0QXJyYXlbaV07XG4gICAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RCdG5cIik7XG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gc2hvd1Rhc2tzKHByb2plY3RBcnJheVtpXSkpXG4gICAgc2lkZWJhclByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3QpXG4gIH1cbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93VGFza3MoYXJnKSB7XG4gIGxldCBmaWx0ZXJlZEFycmF5ID0gZmlsdGVyVGFza3MoYXJnLCB0YXNrQXJyYXkpO1xuICBjb25zb2xlLmxvZyhmaWx0ZXJlZEFycmF5KVxuICB0YXNrU3BhY2UuaW5uZXJIVE1MID0gXCJcIjtcbiAgZm9yIChsZXQgaT0wOyBpPGZpbHRlcmVkQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgdGFza1NwYWNlLmlubmVySFRNTCArPSBcbiAgICBgPGRpdiBpZD1cInRhc2tEaXZcIj5cbiAgICA8cD4ke2ZpbHRlcmVkQXJyYXlbaV0uZHVlRGF0ZX08L3A+XG4gICAgPHA+JHtmaWx0ZXJlZEFycmF5W2ldLnRpdGxlfTwvcD5cbiAgICA8cD4ke2ZpbHRlcmVkQXJyYXlbaV0ucHJpb3JpdHl9PC9wPmBcbiAgfVxufVxuXG50ZXN0QnRuMi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBhZGRQcm9qZWN0Rm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCJcbn0pXG5cbmFkZE5ld1Byb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFByb2plY3QsIGZhbHNlKTtcblxuZnVuY3Rpb24gYWRkUHJvamVjdChldmVudCkge1xuICBwcm9qZWN0QXJyYXkucHVzaChhZGRQcm9qZWN0Rm9ybS5uZXdQcm9qZWN0TmFtZS52YWx1ZSk7XG4gIGNvbnNvbGUubG9nKHByb2plY3RBcnJheSk7XG4gIHNpZGViYXJQcm9qZWN0cy5pbm5lckhUTUwgPSBcIlwiO1xuICBhcHBlbmRQcm9qZWN0cygpO1xuICB1cGRhdGVQcm9qZWN0U2VsZWN0KCk7XG4gIGFkZFByb2plY3RGb3JtLnJlc2V0KCk7XG4gIGFkZFByb2plY3RGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufTtcblxuLy9TaG93Rm9ybSBvbiB0aGUgcGFnZSBkeW5hbWljYWxseTtcbnRlc3RCdG4xLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHRhc2tGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIiA7XG59KVxuXG4vL0R5bmFtaWNhbGx5IGNyZWF0ZSBwcm9qZWN0IG9wdGlvbnMgaW4gdGhlIGZvcm0gOlxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVByb2plY3RTZWxlY3QoKSB7XG4gIHByb2plY3RTZWxlY3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgZm9yIChsZXQgaT0wOyBpPHByb2plY3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIHByb2plY3RTZWxlY3QuaW5uZXJIVE1MICs9IGA8b3B0aW9uIHZhbHVlID1cIiR7cHJvamVjdEFycmF5W2ldfVwiPiR7cHJvamVjdEFycmF5W2ldfTwvb3B0aW9uPmA7XG4gIH1cbn07XG5cbnNob3dBbGxUYXNrc0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICB0YXNrU3BhY2UuaW5uZXJIVE1MID0gXCJcIjtcbiAgZm9yIChsZXQgaT0wOyBpPHRhc2tBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIHRhc2tTcGFjZS5pbm5lckhUTUwgKz0gXG4gICAgYDxkaXYgaWQ9XCJ0YXNrRGl2XCI+XG4gICAgPHA+JHt0YXNrQXJyYXlbaV0uZHVlRGF0ZX08L3A+XG4gICAgPHA+JHt0YXNrQXJyYXlbaV0udGl0bGV9PC9wPlxuICAgIDxwPiR7dGFza0FycmF5W2ldLnByaW9yaXR5fTwvcD5gXG4gIH1cbn0pOyIsImV4cG9ydCB7dGFza0FycmF5LCBwcm9qZWN0QXJyYXksIGZpbHRlclRhc2tzfVxuaW1wb3J0IHsgYXBwZW5kUHJvamVjdHMsIHRhc2tGb3JtLCB1cGRhdGVQcm9qZWN0U2VsZWN0LCBzaG93VGFza3MgfSBmcm9tIFwiLi9kb21cIjtcblxubGV0IHRhc2tBcnJheSA9IFtdO1xubGV0IHByb2plY3RBcnJheSA9IFtcIkRlZmF1bHRcIl07XG5cbmFwcGVuZFByb2plY3RzKClcbnVwZGF0ZVByb2plY3RTZWxlY3QoKVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICBjb25zdCB0ZXN0bG9nID0gZnVuY3Rpb24oKSB7Y29uc29sZS5sb2coXCJUZXN0bG9nIGluc2lkZSB0aGUgdGFzayB3b3Jrc1wiKX07XG4gIHJldHVybiB7dGVzdGxvZywgdGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgcHJvamVjdH1cbn1cblxuLy8gRmlsdGVyIHRoZSB0YXNrIGFycmF5IGFjY29yZGluZyB0byBwcm9qZWN0IFxuZnVuY3Rpb24gZmlsdGVyVGFza3MocHJvamVjdCwgYXJyYXkpIHtcbiAgY29uc3QgZmlsdGVyZWRUYXNrQXJyYXkgPSBhcnJheS5maWx0ZXIodGFzayA9PiB0YXNrLnByb2plY3QgPT09IHByb2plY3QpXG4gIHJldHVybiBmaWx0ZXJlZFRhc2tBcnJheVxufVxuXG5sZXQgc2F2ZVRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNhdmVUYXNrQnRuXCIpO1xubGV0IG5ld0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tGb3JtXCIpO1xuXG5uZXdGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHNhdmVUYXNrLCBmYWxzZSlcblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVUYXNrKGV2ZW50KSB7XG4gIGNvbnNvbGUubG9nKFwiV2UncmUgaW5zaWRlIHNhdmVUYXNrXCIpXG4gIGxldCBuZXdUYXNrID0gY3JlYXRlVGFzayhuZXdGb3JtLnRpdGxlLnZhbHVlLCBuZXdGb3JtLmR1ZURhdGUudmFsdWUsIG5ld0Zvcm0uZGVzY3JpcHRpb24udmFsdWUsIG5ld0Zvcm0ucHJpb3JpdHkudmFsdWUsIG5ld0Zvcm0ucHJvamVjdC52YWx1ZSlcbiAgICBjb25zb2xlLmxvZyhuZXdUYXNrLnByb2plY3QpO1xuICAgIHRhc2tBcnJheS5wdXNoKG5ld1Rhc2spO1xuICAgIHNob3dUYXNrcyhuZXdUYXNrLnByb2plY3QpO1xuICAgIGNvbnNvbGUubG9nKHRhc2tBcnJheSk7XG4gICAgbmV3Rm9ybS5yZXNldCgpO1xuICAgIHRhc2tGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn1cblxuXG5jb25zdCBjcmVhdGVUb0RvTGlzdCA9ICh0aXRsZSkgPT4ge1xuICBjb25zdCByZW1vdmUgPSAoKSA9PiB0b0RvQXJyYXkuc2xpY2U7XG4gIGNvbnN0IG1vdmUgPSAoKSA9PiB0b0RvQXJyYXkuc3BsaWNlO1xuICBjb25zdCBhZGRUYXNrID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IHByb21wdFRhc2tOYW1lID0gcHJvbXB0KFwiV2hhdCdzIHRoZSB0YXNrIG5hbWUgP1wiKTtcbiAgICBsZXQgdGFzayA9IGNyZWF0ZVRhc2socHJvbXB0VGFza05hbWUpO1xuICAgIHRhc2tBcnJheS5wdXNoKHRhc2spO1xuICAgIGNvbnNvbGUubG9nKHRhc2tBcnJheSk7XG4gIH1cbiAgcmV0dXJuIHtyZW1vdmUsIG1vdmUsIGFkZFRhc2ssIHRpdGxlfTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==