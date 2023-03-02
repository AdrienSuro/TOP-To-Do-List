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
  ifNoTaskDiv.remove();
  mainSpace.style.visibility = "visible";
  taskSpace.innerHTML = "";
  taskSpace.style.visibility = "visible";
  
  if (!headingDisplayed) {
    headerSpace.innerHTML = heading;
    headingDisplayed = true;
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
      array[i].test()
      // deleteTask(array[i].index);
      // wrapper.remove();
    });
    wrapper.appendChild(deleteTaskBtn);
    let checkbox = document.createElement("span").innerHTML = "check_box_outline_blank";
    checkbox.setAttribute("class", "material-symbols-outlined")
    wrapper.appendChild(checkbox);
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
      this.title = prompt("Give me a new title");
      (0,_dom__WEBPACK_IMPORTED_MODULE_0__.showTasks)(project);
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/dom.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUY7O0FBRXpGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCxnQkFBZ0IsRUFBRSwwREFBbUIsRUFBRTtBQUN2QztBQUNBLHdCQUF3QixtREFBWTtBQUNwQztBQUNBLHNEQUFzRCxtREFBWTtBQUNsRTtBQUNBO0FBQ0E7O0FBRUE7O0FBRU87O0FBRVA7QUFDQSxnQkFBZ0IscURBQVU7QUFDMUIsRUFBRSxxREFBYztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRU07QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixzREFBVyxNQUFNLGdEQUFTO0FBQzFDOztBQUVBO0FBQ0EsZ0JBQWdCLGdEQUFTO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsZ0JBQWdCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLFlBQVksaUJBQWlCO0FBQzdCLFdBQVcsZUFBZTtBQUMxQixXQUFXLGtCQUFrQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEOztBQUVBO0FBQ0EsRUFBRSx3REFBaUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBLGdCQUFnQixFQUFFLDBEQUFtQixFQUFFO0FBQ3ZDLGtEQUFrRCxtREFBWSxJQUFJLElBQUksbURBQVksSUFBSTtBQUN0RjtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscURBQWM7QUFDbEI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHFEQUFjO0FBQ2xCO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsZ0RBQVM7QUFDdkIsR0FBRztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM5SjZFO0FBQzdFLENBQStFOztBQUUvRTtBQUNBOztBQUVBLG9EQUFjO0FBQ2QsMERBQW1COztBQUVuQjtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSwrQ0FBUztBQUNmO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7VUMvQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcC10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvcC10by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdGFza0FycmF5LCBmaWx0ZXJUYXNrcywgcHJvamVjdEFycmF5LCBjcmVhdGVUYXNrLCBkZWxldGVUYXNrIH0gZnJvbSBcIi4vaW5kZXguanNcIlxuXG5jb25zdCBzaWRlYmFyUHJvamVjdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJQcm9qZWN0c1wiKTtcbmNvbnN0IHRhc2tTcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza1NwYWNlXCIpO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keVwiKTtcbmNvbnN0IHRhc2tGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRm9ybVwiKTtcbmNvbnN0IHByb2plY3RTZWxlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInByb2plY3RTZWxlY3RcIik7XG5jb25zdCBuZXdQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibmV3UHJvamVjdEZvcm1cIik7XG5jb25zdCBzdWJtaXROZXdQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdWJtaXROZXdQcm9qZWN0QnRuXCIpXG5jb25zdCBhZGRQcm9qZWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRQcm9qZWN0QnRuXCIpO1xuY29uc3Qgc2hvd0FsbFRhc2tzQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaG93QWxsVGFza3NCdG5cIik7XG5jb25zdCBuZXdGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRm9ybVwiKTtcbmNvbnN0IGNsb3NlRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2xvc2VGb3JtXCIpO1xuY29uc3QgaWZOb1Rhc2tEaXYgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlmTm9UYXNrRGl2XCIpO1xuY29uc3QgaGVhZGVyU3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImhlYWRlclNwYWNlXCIpO1xuY29uc3QgbWFpblNwYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluU3BhY2VcIik7XG5sZXQgcmV2ZXJzZWQgPSBmYWxzZTtcbmxldCBoZWFkaW5nRGlzcGxheWVkID0gZmFsc2U7XG5cbmxldCBoZWFkaW5nID0gXG4gIGA8cD5EdWUgRGF0ZSA8YnV0dG9uIGlkPXNvcnRieURhdGU+JiM5NjYwPC9idXR0b24+PC9wPlxuICA8cD5UaXRsZTwvcD5cbiAgPHA+UHJpb3JpdHk8L3A+XG4gIDxwPkRlbGV0ZSB0YXNrPC9wPmA7XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRQcm9qZWN0cygpIHtcbiAgZm9yIChsZXQgaT0xOyBpPHByb2plY3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVjdC5pbm5lckhUTUwgPSBwcm9qZWN0QXJyYXlbaV07XG4gICAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RCdG5cIik7XG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4gc2hvd1Rhc2tzKHByb2plY3RBcnJheVtpXSkpXG4gICAgc2lkZWJhclByb2plY3RzLmFwcGVuZENoaWxkKHByb2plY3QpXG4gIH1cbn07XG5cbm5ld0Zvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0Jywgc2F2ZVRhc2ssIGZhbHNlKTtcblxuZXhwb3J0IGxldCB0YXNrTnIgPSAwO1xuXG5mdW5jdGlvbiBzYXZlVGFzayhldmVudCkge1xuICBsZXQgbmV3VGFzayA9IGNyZWF0ZVRhc2sobmV3Rm9ybS50aXRsZS52YWx1ZSwgbmV3Rm9ybS5kdWVEYXRlLnZhbHVlLCBuZXdGb3JtLmRlc2NyaXB0aW9uLnZhbHVlLCBuZXdGb3JtLnByaW9yaXR5LnZhbHVlLCBuZXdGb3JtLnByb2plY3QudmFsdWUsIHRhc2tOcilcbiAgdGFza0FycmF5LnB1c2gobmV3VGFzayk7XG4gIHRhc2tOciArPSAxO1xuICBzaG93VGFza3MobmV3VGFzay5wcm9qZWN0KTtcbiAgbmV3Rm9ybS5yZXNldCgpO1xuICB0YXNrRm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIlxuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5jbG9zZUZvcm0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIHRhc2tGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiO1xufSlcblxuZXhwb3J0IGZ1bmN0aW9uIHNob3dUYXNrcyhhcmcpIHtcbiAgaWZOb1Rhc2tEaXYucmVtb3ZlKCk7XG4gIG1haW5TcGFjZS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCI7XG4gIHRhc2tTcGFjZS5pbm5lckhUTUwgPSBcIlwiO1xuICB0YXNrU3BhY2Uuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICBcbiAgaWYgKCFoZWFkaW5nRGlzcGxheWVkKSB7XG4gICAgaGVhZGVyU3BhY2UuaW5uZXJIVE1MID0gaGVhZGluZztcbiAgICBoZWFkaW5nRGlzcGxheWVkID0gdHJ1ZTtcbiAgICBhZGRTb3J0aW5nUG9zc2liaWxpdHkoKVxuICB9XG5cbiAgaWYgKGFyZyAhPT0gXCJBbGwgdGFza3NcIikge1xuICAgIHNob3dUYXNrRGl2KGZpbHRlclRhc2tzKGFyZywgdGFza0FycmF5KSk7XG4gIH1cblxuICBpZiAoYXJnID09PSBcIkFsbCB0YXNrc1wiKSB7XG4gICAgc2hvd1Rhc2tEaXYodGFza0FycmF5KVxuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dUYXNrRGl2KGFycmF5KSB7XG4gIGZvciAobGV0IGk9MDsgaTxhcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGxldCB3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKVxuICAgIHdyYXBwZXIuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrRGl2XCIpO1xuICAgIHdyYXBwZXIuaW5uZXJIVE1MID0gXG4gICAgICBgPHA+JHthcnJheVtpXS5kdWVEYXRlfTwvcD5cbiAgICAgIDxwPiR7YXJyYXlbaV0udGl0bGV9PC9wPlxuICAgICAgPHA+JHthcnJheVtpXS5wcmlvcml0eX08L3A+YFxuICAgIGxldCBkZWxldGVUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVUYXNrQnRuLmlubmVySFRNTCA9IFwiWFwiO1xuICAgIGRlbGV0ZVRhc2tCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZWxldGVUYXNrQnRuXCIpO1xuICAgIGRlbGV0ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGFycmF5W2ldLnRlc3QoKVxuICAgICAgLy8gZGVsZXRlVGFzayhhcnJheVtpXS5pbmRleCk7XG4gICAgICAvLyB3cmFwcGVyLnJlbW92ZSgpO1xuICAgIH0pO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZGVsZXRlVGFza0J0bik7XG4gICAgbGV0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIikuaW5uZXJIVE1MID0gXCJjaGVja19ib3hfb3V0bGluZV9ibGFua1wiO1xuICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcImNsYXNzXCIsIFwibWF0ZXJpYWwtc3ltYm9scy1vdXRsaW5lZFwiKVxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgIHRhc2tTcGFjZS5hcHBlbmRDaGlsZCh3cmFwcGVyKTtcbiAgfVxuICBsZXQgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFRhc2tCdG4uaW5uZXJIVE1MID0gXCJBZGQgVGFza1wiXG4gIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICB0YXNrRm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJ2aXNpYmxlXCIgO1xuICB9KTtcbiAgdGFza1NwYWNlLmFwcGVuZENoaWxkKGFkZFRhc2tCdG4pO1xufVxuXG5hZGRQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIG5ld1Byb2plY3RGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIlxufSlcblxuc3VibWl0TmV3UHJvamVjdEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkUHJvamVjdCwgZmFsc2UpO1xuXG5mdW5jdGlvbiBhZGRQcm9qZWN0KGV2ZW50KSB7XG4gIHByb2plY3RBcnJheS5wdXNoKG5ld1Byb2plY3RGb3JtLm5ld1Byb2plY3ROYW1lLnZhbHVlKTtcbiAgc2lkZWJhclByb2plY3RzLmlubmVySFRNTCA9IFwiXCI7XG4gIGFwcGVuZFByb2plY3RzKCk7XG4gIHVwZGF0ZVByb2plY3RTZWxlY3QoKTtcbiAgbmV3UHJvamVjdEZvcm0ucmVzZXQoKTtcbiAgbmV3UHJvamVjdEZvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCI7XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUHJvamVjdFNlbGVjdCgpIHtcbiAgcHJvamVjdFNlbGVjdC5pbm5lckhUTUwgPSBcIlwiO1xuICBmb3IgKGxldCBpPTA7IGk8cHJvamVjdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgcHJvamVjdFNlbGVjdC5pbm5lckhUTUwgKz0gYDxvcHRpb24gdmFsdWUgPVwiJHtwcm9qZWN0QXJyYXlbaV19XCI+JHtwcm9qZWN0QXJyYXlbaV19PC9vcHRpb24+YDtcbiAgfVxufTtcblxuc2hvd0FsbFRhc2tzQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiBzaG93VGFza3MoXCJBbGwgdGFza3NcIikpXG5cbmZ1bmN0aW9uIHNvcnRCeURhdGVGY3Qob3JkZXIpIHtcbiAgaWYgKG9yZGVyID09PSBcImFzY2VuZGluZ1wiKSB7XG4gICAgY29uc29sZS5sb2coXCJpbnNpZGUgYXNjZW5kaW5nXCIpXG4gICAgcmV2ZXJzZWQgPSB0cnVlO1xuICAgIGxldCBzb3J0YnlEYXRlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzb3J0YnlEYXRlXCIpO1xuICAgIHNvcnRieURhdGVCdG4uc3R5bGUudHJhbnNmb3JtID0gXCJyb3RhdGUoMTgwZGVnKVwiO1xuICAgIHRhc2tBcnJheS5zb3J0KGZ1bmN0aW9uKGEsYikge1xuICAgICAgcmV0dXJuIG5ldyBEYXRlKGEuZHVlRGF0ZSkgLSBuZXcgRGF0ZShiLmR1ZURhdGUpXG4gICAgfSlcbiAgICBzaG93VGFza3MoXCJBbGwgdGFza3NcIilcbiAgfVxuICBlbHNlIGlmIChvcmRlciA9PT0gXCJkZXNjZW5kaW5nXCIpIHtcbiAgICBjb25zb2xlLmxvZyhcImluc2lkZSBkZXNjZW5kaW5nXCIpXG4gICAgbGV0IHNvcnRieURhdGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnRieURhdGVcIik7XG4gICAgc29ydGJ5RGF0ZUJ0bi5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSgwZGVnKVwiO1xuICAgIHJldmVyc2VkID0gZmFsc2U7XG4gICAgdGFza0FycmF5LnNvcnQoZnVuY3Rpb24oYSxiKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoYi5kdWVEYXRlKSAtIG5ldyBEYXRlKGEuZHVlRGF0ZSlcbiAgICB9KVxuICAgIHNob3dUYXNrcyhcIkFsbCB0YXNrc1wiKVxuICB9XG59XG5cbmZ1bmN0aW9uIGFkZFNvcnRpbmdQb3NzaWJpbGl0eSgpIHtcbiAgbGV0IHNvcnRieURhdGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnRieURhdGVcIik7XG4gIHNvcnRieURhdGVCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgcmV2ZXJzZWQgPyBzb3J0QnlEYXRlRmN0KFwiZGVzY2VuZGluZ1wiKSA6IHNvcnRCeURhdGVGY3QoXCJhc2NlbmRpbmdcIilcbiAgY29uc29sZS5sb2codGFza0FycmF5KVxuICB9KTtcbn1cbiIsImV4cG9ydCB7dGFza0FycmF5LCBwcm9qZWN0QXJyYXksIGZpbHRlclRhc2tzLCBjcmVhdGVUYXNrLCBkZWxldGVUYXNrLCB0YXNrTnJ9XG5pbXBvcnQgeyBhcHBlbmRQcm9qZWN0cywgdXBkYXRlUHJvamVjdFNlbGVjdCwgdGFza05yLCBzaG93VGFza3MgfSBmcm9tIFwiLi9kb21cIjtcblxubGV0IHRhc2tBcnJheSA9IFtdO1xubGV0IHByb2plY3RBcnJheSA9IFtcIkRlZmF1bHRcIl07XG5cbmFwcGVuZFByb2plY3RzKClcbnVwZGF0ZVByb2plY3RTZWxlY3QoKVxuXG5sZXQgYWRkVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkVGFza0J0blwiKVxuICBhZGRUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHRhc2tGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIiA7XG4gIH0pXG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgcHJvamVjdCwgdGFza0EpIHtcbiAgICBjb25zdCBpbmRleCA9IHRhc2tBXG4gICAgY29uc3QgdGVzdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy50aXRsZSA9IHByb21wdChcIkdpdmUgbWUgYSBuZXcgdGl0bGVcIik7XG4gICAgICBzaG93VGFza3MocHJvamVjdCk7XG4gICAgICByZXR1cm4gdGl0bGVcbiAgICB9XG4gIHJldHVybiB7dGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgcHJvamVjdCwgaW5kZXgsIHRlc3R9XG59XG5cbmZ1bmN0aW9uIGZpbHRlclRhc2tzKHByb2plY3QsIGFycmF5KSB7XG4gIGNvbnN0IGZpbHRlcmVkVGFza0FycmF5ID0gYXJyYXkuZmlsdGVyKHRhc2sgPT4gdGFzay5wcm9qZWN0ID09PSBwcm9qZWN0KVxuICByZXR1cm4gZmlsdGVyZWRUYXNrQXJyYXlcbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFzayhpKSB7XG4gIHRhc2tBcnJheS5zcGxpY2UoKHRhc2tBcnJheS5pbmRleE9mKHRhc2tBcnJheS5maW5kKCh0YXNrKSA9PiB0YXNrLmluZGV4ID09PSBpKSkpLCAxKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2RvbS5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==