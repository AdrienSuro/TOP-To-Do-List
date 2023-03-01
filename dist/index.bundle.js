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
  `<p>Due Date <button id=sortbyDate>&#9660</button></p>
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
  console.log("inside showtasks")
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

  if (arg !== "All tasks") {
    showTaskDiv((0,_index_js__WEBPACK_IMPORTED_MODULE_0__.filterTasks)(arg, _index_js__WEBPACK_IMPORTED_MODULE_0__.taskArray));
  }

  if (arg === "All tasks") {
    showTaskDiv(_index_js__WEBPACK_IMPORTED_MODULE_0__.taskArray)
  }
}

function showTaskDiv(array) {
  console.log("inside showtaskdiv")
  for (let i=0; i<array.length; i++) {
    let wrapper = document.createElement("div")
    wrapper.setAttribute("id", "taskDiv");
    wrapper.innerHTML = 
      `<p>${array[i].dueDate}</p>
      <p>${array[i].title}</p>
      <p>${array[i].priority}</p>`
    let deleteTaskBtn = document.createElement("button");
    deleteTaskBtn.innerHTML = "X";
    deleteTaskBtn.setAttribute("id", "deleteTaskBtn");
    deleteTaskBtn.addEventListener("click", () => {
      array[i].test.call();
      // deleteTask(array[i].index);
      // wrapper.remove();
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

showAllTasksBtn.addEventListener("click", () => showTasks("All tasks"))

function sortByDateFct(order) {
  if (order === "ascending") {
    console.log("inside ascending")
    reversed = true;
    let sortbyDateBtn = document.getElementById("sortbyDate");
    sortbyDateBtn.style.transform = "rotate(180deg)";
    _index_js__WEBPACK_IMPORTED_MODULE_0__.taskArray.sort(function(a,b) {
      return new Date(a.dueDate) - new Date(b.dueDate)
    })
    showTasks("All tasks")
  }
  else if (order === "descending") {
    console.log("inside descending")
    let sortbyDateBtn = document.getElementById("sortbyDate");
    sortbyDateBtn.style.transform = "rotate(0deg)";
    reversed = false;
    _index_js__WEBPACK_IMPORTED_MODULE_0__.taskArray.sort(function(a,b) {
      return new Date(b.dueDate) - new Date(a.dueDate)
    })
    showTasks("All tasks")
  }
}

function addSortingPossibility() {
  let sortbyDateBtn = document.getElementById("sortbyDate");
  sortbyDateBtn.addEventListener("click", () => {
  reversed ? sortByDateFct("descending") : sortByDateFct("ascending")
  console.log(_index_js__WEBPACK_IMPORTED_MODULE_0__.taskArray)
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
    const test = function() {
      console.log(title)
      title = prompt("Give me a new title");
      (0,_dom__WEBPACK_IMPORTED_MODULE_0__.showTasks)(project);
      console.log(`the new title is` + title)
      return title
    }
  return {title, dueDate, description, priority, project, index, test}
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5Rjs7QUFFekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQLGdCQUFnQixFQUFFLDBEQUFtQixFQUFFO0FBQ3ZDO0FBQ0Esd0JBQXdCLG1EQUFZO0FBQ3BDO0FBQ0Esc0RBQXNELG1EQUFZO0FBQ2xFO0FBQ0E7QUFDQTs7QUFFQTs7QUFFTzs7QUFFUDtBQUNBLGdCQUFnQixxREFBVTtBQUMxQixFQUFFLHFEQUFjO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFTTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixzREFBVyxNQUFNLGdEQUFTO0FBQzFDOztBQUVBO0FBQ0EsZ0JBQWdCLGdEQUFTO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdCQUFnQixnQkFBZ0I7QUFDaEM7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpQkFBaUI7QUFDN0IsV0FBVyxlQUFlO0FBQzFCLFdBQVcsa0JBQWtCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQSxFQUFFLHdEQUFpQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0EsZ0JBQWdCLEVBQUUsMERBQW1CLEVBQUU7QUFDdkMsa0RBQWtELG1EQUFZLElBQUksSUFBSSxtREFBWSxJQUFJO0FBQ3RGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBYztBQUNsQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscURBQWM7QUFDbEI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnREFBUztBQUN2QixHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlKNkU7QUFDN0UsQ0FBK0U7O0FBRS9FO0FBQ0E7O0FBRUEsb0RBQWM7QUFDZCwwREFBbUI7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sK0NBQVM7QUFDZjtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7VUNqQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcC10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvcC10by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdGFza0FycmF5LCBmaWx0ZXJUYXNrcywgcHJvamVjdEFycmF5LCBjcmVhdGVUYXNrLCBkZWxldGVUYXNrIH0gZnJvbSBcIi4vaW5kZXguanNcIlxuXG5jb25zdCBzaWRlYmFyUHJvamVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJQcm9qZWN0c1wiKTtcbmNvbnN0IHRhc2tTcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza1NwYWNlXCIpO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keVwiKTtcbmNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRm9ybVwiKTtcbmNvbnN0IHByb2plY3RTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RTZWxlY3RcIik7XG5jb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJvamVjdEZvcm1cIik7XG5jb25zdCBzdWJtaXROZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXROZXdQcm9qZWN0QnRuXCIpXG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRQcm9qZWN0QnRuXCIpO1xuY29uc3Qgc2hvd0FsbFRhc2tzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG93QWxsVGFza3NCdG5cIik7XG5jb25zdCBuZXdGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRm9ybVwiKTtcbmNvbnN0IGNsb3NlRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2VGb3JtXCIpO1xuY29uc3QgaWZOb1Rhc2tEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlmTm9UYXNrRGl2XCIpO1xuY29uc3QgaGVhZGVyU3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclNwYWNlXCIpO1xuY29uc3QgbWFpblNwYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluU3BhY2VcIik7XG5sZXQgcmV2ZXJzZWQgPSBmYWxzZTtcbmxldCBoZWFkaW5nRGlzcGxheWVkID0gZmFsc2U7XG5cbmxldCBoZWFkaW5nID0gXG4gIGA8cD5EdWUgRGF0ZSA8YnV0dG9uIGlkPXNvcnRieURhdGU+JiM5NjYwPC9idXR0b24+PC9wPlxuICA8cD5UaXRsZTwvcD5cbiAgPHA+UHJpb3JpdHk8L3A+XG4gIDxwPkRlbGV0ZSB0YXNrPC9wPmA7XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRQcm9qZWN0cygpIHtcbiAgZm9yIChsZXQgaT0xOyBpPHByb2plY3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVjdC5pbm5lckhUTUwgPSBwcm9qZWN0QXJyYXlbaV07XG4gICAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RCdG5cIik7XG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gc2hvd1Rhc2tzKHByb2plY3RBcnJheVtpXSkpXG4gICAgc2lkZWJhclByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3QpXG4gIH1cbn07XG5cbm5ld0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0Jywgc2F2ZVRhc2ssIGZhbHNlKTtcblxuZXhwb3J0IGxldCB0YXNrTnIgPSAwO1xuXG5mdW5jdGlvbiBzYXZlVGFzayhldmVudCkge1xuICBsZXQgbmV3VGFzayA9IGNyZWF0ZVRhc2sobmV3Rm9ybS50aXRsZS52YWx1ZSwgbmV3Rm9ybS5kdWVEYXRlLnZhbHVlLCBuZXdGb3JtLmRlc2NyaXB0aW9uLnZhbHVlLCBuZXdGb3JtLnByaW9yaXR5LnZhbHVlLCBuZXdGb3JtLnByb2plY3QudmFsdWUsIHRhc2tOcilcbiAgdGFza0FycmF5LnB1c2gobmV3VGFzayk7XG4gIHRhc2tOciArPSAxO1xuICBzaG93VGFza3MobmV3VGFzay5wcm9qZWN0KTtcbiAgbmV3Rm9ybS5yZXNldCgpO1xuICB0YXNrRm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIlxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5jbG9zZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHRhc2tGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xufSlcblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dUYXNrcyhhcmcpIHtcbiAgY29uc29sZS5sb2coXCJpbnNpZGUgc2hvd3Rhc2tzXCIpXG4gIGlmTm9UYXNrRGl2LnJlbW92ZSgpO1xuICBtYWluU3BhY2Uuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICB0YXNrU3BhY2UuaW5uZXJIVE1MID0gXCJcIjtcbiAgdGFza1NwYWNlLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgXG4gIGlmICghaGVhZGluZ0Rpc3BsYXllZCkge1xuICAgIGhlYWRlclNwYWNlLmlubmVySFRNTCA9IGhlYWRpbmc7XG4gICAgaGVhZGluZ0Rpc3BsYXllZCA9IHRydWU7XG4gICAgY29uc29sZS5sb2coXCJpbnNpZGUgZGlzcGxheSBoZWFkaW5nXCIpXG4gICAgYWRkU29ydGluZ1Bvc3NpYmlsaXR5KClcbiAgfVxuXG4gIGlmIChhcmcgIT09IFwiQWxsIHRhc2tzXCIpIHtcbiAgICBzaG93VGFza0RpdihmaWx0ZXJUYXNrcyhhcmcsIHRhc2tBcnJheSkpO1xuICB9XG5cbiAgaWYgKGFyZyA9PT0gXCJBbGwgdGFza3NcIikge1xuICAgIHNob3dUYXNrRGl2KHRhc2tBcnJheSlcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93VGFza0RpdihhcnJheSkge1xuICBjb25zb2xlLmxvZyhcImluc2lkZSBzaG93dGFza2RpdlwiKVxuICBmb3IgKGxldCBpPTA7IGk8YXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFza0RpdlwiKTtcbiAgICB3cmFwcGVyLmlubmVySFRNTCA9IFxuICAgICAgYDxwPiR7YXJyYXlbaV0uZHVlRGF0ZX08L3A+XG4gICAgICA8cD4ke2FycmF5W2ldLnRpdGxlfTwvcD5cbiAgICAgIDxwPiR7YXJyYXlbaV0ucHJpb3JpdHl9PC9wPmBcbiAgICBsZXQgZGVsZXRlVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZGVsZXRlVGFza0J0bi5pbm5lckhUTUwgPSBcIlhcIjtcbiAgICBkZWxldGVUYXNrQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiZGVsZXRlVGFza0J0blwiKTtcbiAgICBkZWxldGVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBhcnJheVtpXS50ZXN0LmNhbGwoKTtcbiAgICAgIC8vIGRlbGV0ZVRhc2soYXJyYXlbaV0uaW5kZXgpO1xuICAgICAgLy8gd3JhcHBlci5yZW1vdmUoKTtcbiAgICB9KTtcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGRlbGV0ZVRhc2tCdG4pO1xuICAgIHRhc2tTcGFjZS5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgfVxuICBsZXQgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFRhc2tCdG4uaW5uZXJIVE1MID0gXCJBZGQgVGFza1wiXG4gIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0YXNrRm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCIgO1xuICB9KTtcbiAgdGFza1NwYWNlLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xufVxuXG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIG5ld1Byb2plY3RGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIlxufSlcblxuc3VibWl0TmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkUHJvamVjdCwgZmFsc2UpO1xuXG5mdW5jdGlvbiBhZGRQcm9qZWN0KGV2ZW50KSB7XG4gIHByb2plY3RBcnJheS5wdXNoKG5ld1Byb2plY3RGb3JtLm5ld1Byb2plY3ROYW1lLnZhbHVlKTtcbiAgc2lkZWJhclByb2plY3RzLmlubmVySFRNTCA9IFwiXCI7XG4gIGFwcGVuZFByb2plY3RzKCk7XG4gIHVwZGF0ZVByb2plY3RTZWxlY3QoKTtcbiAgbmV3UHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgbmV3UHJvamVjdEZvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUHJvamVjdFNlbGVjdCgpIHtcbiAgcHJvamVjdFNlbGVjdC5pbm5lckhUTUwgPSBcIlwiO1xuICBmb3IgKGxldCBpPTA7IGk8cHJvamVjdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgcHJvamVjdFNlbGVjdC5pbm5lckhUTUwgKz0gYDxvcHRpb24gdmFsdWUgPVwiJHtwcm9qZWN0QXJyYXlbaV19XCI+JHtwcm9qZWN0QXJyYXlbaV19PC9vcHRpb24+YDtcbiAgfVxufTtcblxuc2hvd0FsbFRhc2tzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBzaG93VGFza3MoXCJBbGwgdGFza3NcIikpXG5cbmZ1bmN0aW9uIHNvcnRCeURhdGVGY3Qob3JkZXIpIHtcbiAgaWYgKG9yZGVyID09PSBcImFzY2VuZGluZ1wiKSB7XG4gICAgY29uc29sZS5sb2coXCJpbnNpZGUgYXNjZW5kaW5nXCIpXG4gICAgcmV2ZXJzZWQgPSB0cnVlO1xuICAgIGxldCBzb3J0YnlEYXRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0YnlEYXRlXCIpO1xuICAgIHNvcnRieURhdGVCdG4uc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoMTgwZGVnKVwiO1xuICAgIHRhc2tBcnJheS5zb3J0KGZ1bmN0aW9uKGEsYikge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKGEuZHVlRGF0ZSkgLSBuZXcgRGF0ZShiLmR1ZURhdGUpXG4gICAgfSlcbiAgICBzaG93VGFza3MoXCJBbGwgdGFza3NcIilcbiAgfVxuICBlbHNlIGlmIChvcmRlciA9PT0gXCJkZXNjZW5kaW5nXCIpIHtcbiAgICBjb25zb2xlLmxvZyhcImluc2lkZSBkZXNjZW5kaW5nXCIpXG4gICAgbGV0IHNvcnRieURhdGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnRieURhdGVcIik7XG4gICAgc29ydGJ5RGF0ZUJ0bi5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSgwZGVnKVwiO1xuICAgIHJldmVyc2VkID0gZmFsc2U7XG4gICAgdGFza0FycmF5LnNvcnQoZnVuY3Rpb24oYSxiKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoYi5kdWVEYXRlKSAtIG5ldyBEYXRlKGEuZHVlRGF0ZSlcbiAgICB9KVxuICAgIHNob3dUYXNrcyhcIkFsbCB0YXNrc1wiKVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFNvcnRpbmdQb3NzaWJpbGl0eSgpIHtcbiAgbGV0IHNvcnRieURhdGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnRieURhdGVcIik7XG4gIHNvcnRieURhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgcmV2ZXJzZWQgPyBzb3J0QnlEYXRlRmN0KFwiZGVzY2VuZGluZ1wiKSA6IHNvcnRCeURhdGVGY3QoXCJhc2NlbmRpbmdcIilcbiAgY29uc29sZS5sb2codGFza0FycmF5KVxuICB9KTtcbn1cbiIsImV4cG9ydCB7dGFza0FycmF5LCBwcm9qZWN0QXJyYXksIGZpbHRlclRhc2tzLCBjcmVhdGVUYXNrLCBkZWxldGVUYXNrLCB0YXNrTnJ9XG5pbXBvcnQgeyBhcHBlbmRQcm9qZWN0cywgdXBkYXRlUHJvamVjdFNlbGVjdCwgdGFza05yLCBzaG93VGFza3MgfSBmcm9tIFwiLi9kb21cIjtcblxubGV0IHRhc2tBcnJheSA9IFtdO1xubGV0IHByb2plY3RBcnJheSA9IFtcIkRlZmF1bHRcIl07XG5cbmFwcGVuZFByb2plY3RzKClcbnVwZGF0ZVByb2plY3RTZWxlY3QoKVxuXG5sZXQgYWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza0J0blwiKVxuICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHRhc2tGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIiA7XG4gIH0pXG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgcHJvamVjdCwgdGFza0EpIHtcbiAgICBjb25zdCBpbmRleCA9IHRhc2tBXG4gICAgY29uc3QgdGVzdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5sb2codGl0bGUpXG4gICAgICB0aXRsZSA9IHByb21wdChcIkdpdmUgbWUgYSBuZXcgdGl0bGVcIik7XG4gICAgICBzaG93VGFza3MocHJvamVjdCk7XG4gICAgICBjb25zb2xlLmxvZyhgdGhlIG5ldyB0aXRsZSBpc2AgKyB0aXRsZSlcbiAgICAgIHJldHVybiB0aXRsZVxuICAgIH1cbiAgcmV0dXJuIHt0aXRsZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBwcm9qZWN0LCBpbmRleCwgdGVzdH1cbn1cblxuZnVuY3Rpb24gZmlsdGVyVGFza3MocHJvamVjdCwgYXJyYXkpIHtcbiAgY29uc3QgZmlsdGVyZWRUYXNrQXJyYXkgPSBhcnJheS5maWx0ZXIodGFzayA9PiB0YXNrLnByb2plY3QgPT09IHByb2plY3QpXG4gIHJldHVybiBmaWx0ZXJlZFRhc2tBcnJheVxufVxuXG5mdW5jdGlvbiBkZWxldGVUYXNrKGkpIHtcbiAgdGFza0FycmF5LnNwbGljZSgodGFza0FycmF5LmluZGV4T2YodGFza0FycmF5LmZpbmQoKHRhc2spID0+IHRhc2suaW5kZXggPT09IGkpKSksIDEpO1xufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=