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
    let expand = document.createElement("div");
    expand.innerHTML = "oo"
    // expand.style.backgroundImage = url("../src/img/chevron-bas.png");
    expand.addEventListener("click", () => {console.log("hi expand")})
    wrapper.appendChild(expand);
    let checkbox = document.createElement("img")
    if (array[i].checked === true) {
      checkbox.setAttribute("src", "..src/img/checked.png")
      console.log("unchecking me")
    }
    else {
      checkbox.setAttribute("src", "../src/img/unchecked.png")
      checkbox.setAttribute("id", "checkbox")
      console.log("checking the box")
    }
    wrapper.appendChild(checkbox);
    checkbox.addEventListener("click", () => {
      console.log("inside event listener");
      array[i].checked === false ? array[i].checked = true : array[i].checked = false;
      showTasks(array[i].project);
    });
    wrapper.innerHTML += 
      `<p>${array[i].title}</p>
      <p>${array[i].dueDate}</p>
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
    const checked = false;
  return {title, dueDate, description, priority, project, index, test, checked}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBeUY7O0FBRXpGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUCxnQkFBZ0IsRUFBRSwwREFBbUIsRUFBRTtBQUN2QztBQUNBLHdCQUF3QixtREFBWTtBQUNwQztBQUNBLHNEQUFzRCxtREFBWTtBQUNsRTtBQUNBO0FBQ0E7O0FBRUE7O0FBRU87O0FBRVA7QUFDQSxnQkFBZ0IscURBQVU7QUFDMUIsRUFBRSxxREFBYztBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRU07QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixzREFBVyxNQUFNLGdEQUFTO0FBQzFDOztBQUVBO0FBQ0EsZ0JBQWdCLGdEQUFTO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0IsZ0JBQWdCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMseUJBQXlCO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsWUFBWSxlQUFlO0FBQzNCLFdBQVcsaUJBQWlCO0FBQzVCLFdBQVcsa0JBQWtCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQSxFQUFFLHdEQUFpQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0EsZ0JBQWdCLEVBQUUsMERBQW1CLEVBQUU7QUFDdkMsa0RBQWtELG1EQUFZLElBQUksSUFBSSxtREFBWSxJQUFJO0FBQ3RGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBYztBQUNsQjtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUkscURBQWM7QUFDbEI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxnREFBUztBQUN2QixHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hMNkU7QUFDN0UsQ0FBK0U7O0FBRS9FO0FBQ0E7O0FBRUEsb0RBQWM7QUFDZCwwREFBbUI7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLCtDQUFTO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7O1VDaENBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztVRU5BO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3QvLi9zcmMvZG9tLmpzIiwid2VicGFjazovL3RvcC10by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIiwid2VicGFjazovL3RvcC10by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3Qvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3Qvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHRhc2tBcnJheSwgZmlsdGVyVGFza3MsIHByb2plY3RBcnJheSwgY3JlYXRlVGFzaywgZGVsZXRlVGFzayB9IGZyb20gXCIuL2luZGV4LmpzXCJcblxuY29uc3Qgc2lkZWJhclByb2plY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyUHJvamVjdHNcIik7XG5jb25zdCB0YXNrU3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tTcGFjZVwiKTtcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvZHlcIik7XG5jb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0Zvcm1cIik7XG5jb25zdCBwcm9qZWN0U2VsZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0U2VsZWN0XCIpO1xuY29uc3QgbmV3UHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm5ld1Byb2plY3RGb3JtXCIpO1xuY29uc3Qgc3VibWl0TmV3UHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0TmV3UHJvamVjdEJ0blwiKVxuY29uc3QgYWRkUHJvamVjdEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWRkUHJvamVjdEJ0blwiKTtcbmNvbnN0IHNob3dBbGxUYXNrc0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2hvd0FsbFRhc2tzQnRuXCIpO1xuY29uc3QgbmV3Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0Zvcm1cIik7XG5jb25zdCBjbG9zZUZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNsb3NlRm9ybVwiKTtcbmNvbnN0IGlmTm9UYXNrRGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpZk5vVGFza0RpdlwiKTtcbmNvbnN0IGhlYWRlclNwYWNlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJoZWFkZXJTcGFjZVwiKTtcbmNvbnN0IG1haW5TcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblNwYWNlXCIpO1xubGV0IHJldmVyc2VkID0gZmFsc2U7XG5sZXQgaGVhZGluZ0Rpc3BsYXllZCA9IGZhbHNlO1xuXG5sZXQgaGVhZGluZyA9IFxuICBgPHA+RHVlIERhdGUgPGJ1dHRvbiBpZD1zb3J0YnlEYXRlPiYjOTY2MDwvYnV0dG9uPjwvcD5cbiAgPHA+VGl0bGU8L3A+XG4gIDxwPlByaW9yaXR5PC9wPlxuICA8cD5EZWxldGUgdGFzazwvcD5gO1xuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kUHJvamVjdHMoKSB7XG4gIGZvciAobGV0IGk9MTsgaTxwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3QuaW5uZXJIVE1MID0gcHJvamVjdEFycmF5W2ldO1xuICAgIHByb2plY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0QnRuXCIpO1xuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHNob3dUYXNrcyhwcm9qZWN0QXJyYXlbaV0pKVxuICAgIHNpZGViYXJQcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0KVxuICB9XG59O1xuXG5uZXdGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHNhdmVUYXNrLCBmYWxzZSk7XG5cbmV4cG9ydCBsZXQgdGFza05yID0gMDtcblxuZnVuY3Rpb24gc2F2ZVRhc2soZXZlbnQpIHtcbiAgbGV0IG5ld1Rhc2sgPSBjcmVhdGVUYXNrKG5ld0Zvcm0udGl0bGUudmFsdWUsIG5ld0Zvcm0uZHVlRGF0ZS52YWx1ZSwgbmV3Rm9ybS5kZXNjcmlwdGlvbi52YWx1ZSwgbmV3Rm9ybS5wcmlvcml0eS52YWx1ZSwgbmV3Rm9ybS5wcm9qZWN0LnZhbHVlLCB0YXNrTnIpXG4gIHRhc2tBcnJheS5wdXNoKG5ld1Rhc2spO1xuICB0YXNrTnIgKz0gMTtcbiAgc2hvd1Rhc2tzKG5ld1Rhc2sucHJvamVjdCk7XG4gIG5ld0Zvcm0ucmVzZXQoKTtcbiAgdGFza0Zvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwiaGlkZGVuXCJcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn1cblxuY2xvc2VGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICB0YXNrRm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbn0pXG5cbmV4cG9ydCBmdW5jdGlvbiBzaG93VGFza3MoYXJnKSB7XG4gIGlmTm9UYXNrRGl2LnJlbW92ZSgpO1xuICBtYWluU3BhY2Uuc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiO1xuICB0YXNrU3BhY2UuaW5uZXJIVE1MID0gXCJcIjtcbiAgdGFza1NwYWNlLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIjtcbiAgXG4gIGlmICghaGVhZGluZ0Rpc3BsYXllZCkge1xuICAgIGhlYWRlclNwYWNlLmlubmVySFRNTCA9IGhlYWRpbmc7XG4gICAgaGVhZGluZ0Rpc3BsYXllZCA9IHRydWU7XG4gICAgYWRkU29ydGluZ1Bvc3NpYmlsaXR5KClcbiAgfVxuXG4gIGlmIChhcmcgIT09IFwiQWxsIHRhc2tzXCIpIHtcbiAgICBzaG93VGFza0RpdihmaWx0ZXJUYXNrcyhhcmcsIHRhc2tBcnJheSkpO1xuICB9XG5cbiAgaWYgKGFyZyA9PT0gXCJBbGwgdGFza3NcIikge1xuICAgIHNob3dUYXNrRGl2KHRhc2tBcnJheSlcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93VGFza0RpdihhcnJheSkge1xuICBmb3IgKGxldCBpPTA7IGk8YXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgd3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIilcbiAgICB3cmFwcGVyLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFza0RpdlwiKTtcbiAgICBsZXQgZXhwYW5kID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBleHBhbmQuaW5uZXJIVE1MID0gXCJvb1wiXG4gICAgLy8gZXhwYW5kLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IHVybChcIi4uL3NyYy9pbWcvY2hldnJvbi1iYXMucG5nXCIpO1xuICAgIGV4cGFuZC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge2NvbnNvbGUubG9nKFwiaGkgZXhwYW5kXCIpfSlcbiAgICB3cmFwcGVyLmFwcGVuZENoaWxkKGV4cGFuZCk7XG4gICAgbGV0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKVxuICAgIGlmIChhcnJheVtpXS5jaGVja2VkID09PSB0cnVlKSB7XG4gICAgICBjaGVja2JveC5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgXCIuLnNyYy9pbWcvY2hlY2tlZC5wbmdcIilcbiAgICAgIGNvbnNvbGUubG9nKFwidW5jaGVja2luZyBtZVwiKVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZShcInNyY1wiLCBcIi4uL3NyYy9pbWcvdW5jaGVja2VkLnBuZ1wiKVxuICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJjaGVja2JveFwiKVxuICAgICAgY29uc29sZS5sb2coXCJjaGVja2luZyB0aGUgYm94XCIpXG4gICAgfVxuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoY2hlY2tib3gpO1xuICAgIGNoZWNrYm94LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcImluc2lkZSBldmVudCBsaXN0ZW5lclwiKTtcbiAgICAgIGFycmF5W2ldLmNoZWNrZWQgPT09IGZhbHNlID8gYXJyYXlbaV0uY2hlY2tlZCA9IHRydWUgOiBhcnJheVtpXS5jaGVja2VkID0gZmFsc2U7XG4gICAgICBzaG93VGFza3MoYXJyYXlbaV0ucHJvamVjdCk7XG4gICAgfSk7XG4gICAgd3JhcHBlci5pbm5lckhUTUwgKz0gXG4gICAgICBgPHA+JHthcnJheVtpXS50aXRsZX08L3A+XG4gICAgICA8cD4ke2FycmF5W2ldLmR1ZURhdGV9PC9wPlxuICAgICAgPHA+JHthcnJheVtpXS5wcmlvcml0eX08L3A+YFxuICAgIGxldCBkZWxldGVUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICBkZWxldGVUYXNrQnRuLmlubmVySFRNTCA9IFwiWFwiO1xuICAgIGRlbGV0ZVRhc2tCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJkZWxldGVUYXNrQnRuXCIpO1xuICAgIGRlbGV0ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGFycmF5W2ldLnRlc3QoKVxuICAgICAgLy8gZGVsZXRlVGFzayhhcnJheVtpXS5pbmRleCk7XG4gICAgICAvLyB3cmFwcGVyLnJlbW92ZSgpO1xuICAgIH0pO1xuICAgIHdyYXBwZXIuYXBwZW5kQ2hpbGQoZGVsZXRlVGFza0J0bik7XG4gICAgdGFza1NwYWNlLmFwcGVuZENoaWxkKHdyYXBwZXIpO1xuICB9XG4gIGxldCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkVGFza0J0bi5pbm5lckhUTUwgPSBcIkFkZCBUYXNrXCJcbiAgYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgIHRhc2tGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIiA7XG4gIH0pO1xuICB0YXNrU3BhY2UuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG59XG5cbmFkZFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbmV3UHJvamVjdEZvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiXG59KVxuXG5zdWJtaXROZXdQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRQcm9qZWN0LCBmYWxzZSk7XG5cbmZ1bmN0aW9uIGFkZFByb2plY3QoZXZlbnQpIHtcbiAgcHJvamVjdEFycmF5LnB1c2gobmV3UHJvamVjdEZvcm0ubmV3UHJvamVjdE5hbWUudmFsdWUpO1xuICBzaWRlYmFyUHJvamVjdHMuaW5uZXJIVE1MID0gXCJcIjtcbiAgYXBwZW5kUHJvamVjdHMoKTtcbiAgdXBkYXRlUHJvamVjdFNlbGVjdCgpO1xuICBuZXdQcm9qZWN0Rm9ybS5yZXNldCgpO1xuICBuZXdQcm9qZWN0Rm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIjtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVQcm9qZWN0U2VsZWN0KCkge1xuICBwcm9qZWN0U2VsZWN0LmlubmVySFRNTCA9IFwiXCI7XG4gIGZvciAobGV0IGk9MDsgaTxwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBwcm9qZWN0U2VsZWN0LmlubmVySFRNTCArPSBgPG9wdGlvbiB2YWx1ZSA9XCIke3Byb2plY3RBcnJheVtpXX1cIj4ke3Byb2plY3RBcnJheVtpXX08L29wdGlvbj5gO1xuICB9XG59O1xuXG5zaG93QWxsVGFza3NCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHNob3dUYXNrcyhcIkFsbCB0YXNrc1wiKSlcblxuZnVuY3Rpb24gc29ydEJ5RGF0ZUZjdChvcmRlcikge1xuICBpZiAob3JkZXIgPT09IFwiYXNjZW5kaW5nXCIpIHtcbiAgICBjb25zb2xlLmxvZyhcImluc2lkZSBhc2NlbmRpbmdcIilcbiAgICByZXZlcnNlZCA9IHRydWU7XG4gICAgbGV0IHNvcnRieURhdGVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNvcnRieURhdGVcIik7XG4gICAgc29ydGJ5RGF0ZUJ0bi5zdHlsZS50cmFuc2Zvcm0gPSBcInJvdGF0ZSgxODBkZWcpXCI7XG4gICAgdGFza0FycmF5LnNvcnQoZnVuY3Rpb24oYSxiKSB7XG4gICAgICByZXR1cm4gbmV3IERhdGUoYS5kdWVEYXRlKSAtIG5ldyBEYXRlKGIuZHVlRGF0ZSlcbiAgICB9KVxuICAgIHNob3dUYXNrcyhcIkFsbCB0YXNrc1wiKVxuICB9XG4gIGVsc2UgaWYgKG9yZGVyID09PSBcImRlc2NlbmRpbmdcIikge1xuICAgIGNvbnNvbGUubG9nKFwiaW5zaWRlIGRlc2NlbmRpbmdcIilcbiAgICBsZXQgc29ydGJ5RGF0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydGJ5RGF0ZVwiKTtcbiAgICBzb3J0YnlEYXRlQnRuLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlKDBkZWcpXCI7XG4gICAgcmV2ZXJzZWQgPSBmYWxzZTtcbiAgICB0YXNrQXJyYXkuc29ydChmdW5jdGlvbihhLGIpIHtcbiAgICAgIHJldHVybiBuZXcgRGF0ZShiLmR1ZURhdGUpIC0gbmV3IERhdGUoYS5kdWVEYXRlKVxuICAgIH0pXG4gICAgc2hvd1Rhc2tzKFwiQWxsIHRhc2tzXCIpXG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkU29ydGluZ1Bvc3NpYmlsaXR5KCkge1xuICBsZXQgc29ydGJ5RGF0ZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic29ydGJ5RGF0ZVwiKTtcbiAgc29ydGJ5RGF0ZUJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICByZXZlcnNlZCA/IHNvcnRCeURhdGVGY3QoXCJkZXNjZW5kaW5nXCIpIDogc29ydEJ5RGF0ZUZjdChcImFzY2VuZGluZ1wiKVxuICBjb25zb2xlLmxvZyh0YXNrQXJyYXkpXG4gIH0pO1xufVxuIiwiZXhwb3J0IHt0YXNrQXJyYXksIHByb2plY3RBcnJheSwgZmlsdGVyVGFza3MsIGNyZWF0ZVRhc2ssIGRlbGV0ZVRhc2ssIHRhc2tOcn1cbmltcG9ydCB7IGFwcGVuZFByb2plY3RzLCB1cGRhdGVQcm9qZWN0U2VsZWN0LCB0YXNrTnIsIHNob3dUYXNrcyB9IGZyb20gXCIuL2RvbVwiO1xuXG5sZXQgdGFza0FycmF5ID0gW107XG5sZXQgcHJvamVjdEFycmF5ID0gW1wiRGVmYXVsdFwiXTtcblxuYXBwZW5kUHJvamVjdHMoKVxudXBkYXRlUHJvamVjdFNlbGVjdCgpXG5cbmxldCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJhZGRUYXNrQnRuXCIpXG4gIGFkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgdGFza0Zvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiIDtcbiAgfSlcblxuZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBwcm9qZWN0LCB0YXNrQSkge1xuICAgIGNvbnN0IGluZGV4ID0gdGFza0FcbiAgICBjb25zdCB0ZXN0ID0gZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnRpdGxlID0gcHJvbXB0KFwiR2l2ZSBtZSBhIG5ldyB0aXRsZVwiKTtcbiAgICAgIHNob3dUYXNrcyhwcm9qZWN0KTtcbiAgICAgIHJldHVybiB0aXRsZVxuICAgIH1cbiAgICBjb25zdCBjaGVja2VkID0gZmFsc2U7XG4gIHJldHVybiB7dGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgcHJvamVjdCwgaW5kZXgsIHRlc3QsIGNoZWNrZWR9XG59XG5cbmZ1bmN0aW9uIGZpbHRlclRhc2tzKHByb2plY3QsIGFycmF5KSB7XG4gIGNvbnN0IGZpbHRlcmVkVGFza0FycmF5ID0gYXJyYXkuZmlsdGVyKHRhc2sgPT4gdGFzay5wcm9qZWN0ID09PSBwcm9qZWN0KVxuICByZXR1cm4gZmlsdGVyZWRUYXNrQXJyYXlcbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFzayhpKSB7XG4gIHRhc2tBcnJheS5zcGxpY2UoKHRhc2tBcnJheS5pbmRleE9mKHRhc2tBcnJheS5maW5kKCh0YXNrKSA9PiB0YXNrLmluZGV4ID09PSBpKSkpLCAxKTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgaXMgcmVmZXJlbmNlZCBieSBvdGhlciBtb2R1bGVzIHNvIGl0IGNhbid0IGJlIGlubGluZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2RvbS5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==