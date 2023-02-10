/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/init.js":
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "appendToDoList": () => (/* binding */ appendToDoList),
/* harmony export */   "createBlock": () => (/* binding */ createBlock)
/* harmony export */ });
function createBlock() {
  console.log("we're inside create block")
  let body = document.getElementById("body");

  const mainDiv = document.createElement("div");
  mainDiv.setAttribute("id", "mainDiv");
  mainDiv.innerHTML = "This is a test";

  let addTaskBtnTest = document.createElement("button");
  addTaskBtnTest.setAttribute("id", "addTaskBtnTest");
  addTaskBtnTest.innerHTML = "Add a list";

  let secondBtn = document.createElement("button");
  secondBtn.setAttribute("id", "secondBtn");
  secondBtn.innerHTML = "Show names of all the to-do-lists";

  let thirdBtn = document.createElement("button");
  thirdBtn.setAttribute("id", "thirdBtn");
  thirdBtn.innerHTML = "Add task to the to-do list";

  body.appendChild(mainDiv);
  body.appendChild(addTaskBtnTest);
  body.appendChild(secondBtn);
  body.appendChild(thirdBtn);
}

function appendToDoList(list) {
  console.log("We're inside the fct appendToDoList")
  let main = document.getElementById("main");

  let toDoDiv = document.createElement("div");
  toDoDiv.setAttribute("id", "toDoDiv");

  let sidebar = document.getElementById("sidebar");

  let addTaskBtn = document.createElement("button");
  addTaskBtn.setAttribute("id", "addTaskBtn");
  addTaskBtn.innerHTML = "Add a task" ;

  let listTitle = document.createElement('h1');
  listTitle.setAttribute("id", "listTitle");
  listTitle.innerHTML = list.title
  
  sidebar.appendChild(listTitle);

  for (let i=0; i<list.taskArray.length; i++) {
    let taskDiv = document.createElement("div");
    taskDiv.setAttribute("id", "taskDiv");
    taskDiv.innerHTML = list.taskArray[i].title ;

    toDoDiv.appendChild(taskDiv);
  }

  main.appendChild(toDoDiv);
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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _init_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./init.js */ "./src/init.js");



// createBlock();

let toDoListArray = [];
let taskArray = [];

function createTask(title, dueDate, description, priority, project) {
  const test = `we are inside the ${title} task`;
  const testlog = function() {console.log("Testlog inside the task works")};
  const remove = () => {};
  return {title, testlog, test, dueDate, description, priority, project}
}

const createToDoList = (title) => {
  const remove = () => toDoArray.slice;
  const move = () => toDoArray.splice;
  const taskArray = [];
  const addTask = function() {
    let promptTaskName = prompt("What's the task name ?");
    let task = createTask(promptTaskName);
    taskArray.push(task);
    console.log(taskArray);
  }

  // Trying to create possibility to add a Task through a button but this refers to the button, not to the object.

  return {remove, move, addTask, title, taskArray};
};

// WORKING [add a to do list object ex: work, leisure...] :
function addToDoList() {
  let listname = prompt("What's the name of your list ?");
  let createlist = createToDoList(listname);
  toDoListArray.push(createlist);
  console.log(toDoListArray);
}

//Function that will show all the to do lists on the DOM : 
function showToDoLists() {
  console.log("We're inside show ToDoLists")
  for (let i = 0; i<toDoListArray.length; i++) {
    (0,_init_js__WEBPACK_IMPORTED_MODULE_0__.appendToDoList)(toDoListArray[i])
  }
}

//On click, this function creates a new Task and adds it to the taskArray ! 
function addTask() {
  let newForm = document.getElementById("taskForm");
  let newTask = createTask(newForm.title.value, newForm.dueDate.value, newForm.description.value, newForm.priority.value, newForm.project.value)
  taskArray.push(newTask);
  console.log(newForm.title.value);
  console.log(taskArray);
}

// addTaskBtnTest.addEventListener("click", addToDoList);
// secondBtn.addEventListener("click", showToDoLists);
// thirdBtn.addEventListener("click", function() {toDoListArray[0].addTask()});

  let saveTaskBtn = document.getElementById("saveTaskBtn");
  saveTaskBtn.addEventListener("click", () => {
    console.log("Hi console");
    let newTask = createTask(title, dueDate, description, priority, project);
    taskArray.push(newTask);
    console.log(taskArray);
  })

console.log("Reached the end of index.js");
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IseUJBQXlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7VUN0REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05xQztBQUNHOztBQUV4Qzs7QUFFQTtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLE9BQU87QUFDM0MsOEJBQThCO0FBQzlCO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDLElBQUksd0RBQWM7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxrREFBa0QsMkJBQTJCOztBQUU3RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVILDJDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3QvLi9zcmMvaW5pdC5qcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcC10by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCbG9jaygpIHtcbiAgY29uc29sZS5sb2coXCJ3ZSdyZSBpbnNpZGUgY3JlYXRlIGJsb2NrXCIpXG4gIGxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2R5XCIpO1xuXG4gIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpbkRpdlwiKTtcbiAgbWFpbkRpdi5pbm5lckhUTUwgPSBcIlRoaXMgaXMgYSB0ZXN0XCI7XG5cbiAgbGV0IGFkZFRhc2tCdG5UZXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkVGFza0J0blRlc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGRUYXNrQnRuVGVzdFwiKTtcbiAgYWRkVGFza0J0blRlc3QuaW5uZXJIVE1MID0gXCJBZGQgYSBsaXN0XCI7XG5cbiAgbGV0IHNlY29uZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHNlY29uZEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlY29uZEJ0blwiKTtcbiAgc2Vjb25kQnRuLmlubmVySFRNTCA9IFwiU2hvdyBuYW1lcyBvZiBhbGwgdGhlIHRvLWRvLWxpc3RzXCI7XG5cbiAgbGV0IHRoaXJkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdGhpcmRCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0aGlyZEJ0blwiKTtcbiAgdGhpcmRCdG4uaW5uZXJIVE1MID0gXCJBZGQgdGFzayB0byB0aGUgdG8tZG8gbGlzdFwiO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQobWFpbkRpdik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoYWRkVGFza0J0blRlc3QpO1xuICBib2R5LmFwcGVuZENoaWxkKHNlY29uZEJ0bik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQodGhpcmRCdG4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kVG9Eb0xpc3QobGlzdCkge1xuICBjb25zb2xlLmxvZyhcIldlJ3JlIGluc2lkZSB0aGUgZmN0IGFwcGVuZFRvRG9MaXN0XCIpXG4gIGxldCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuXG4gIGxldCB0b0RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9Eb0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvRG9EaXZcIik7XG5cbiAgbGV0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJcIik7XG5cbiAgbGV0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRUYXNrQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkVGFza0J0blwiKTtcbiAgYWRkVGFza0J0bi5pbm5lckhUTUwgPSBcIkFkZCBhIHRhc2tcIiA7XG5cbiAgbGV0IGxpc3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGxpc3RUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxpc3RUaXRsZVwiKTtcbiAgbGlzdFRpdGxlLmlubmVySFRNTCA9IGxpc3QudGl0bGVcbiAgXG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQobGlzdFRpdGxlKTtcblxuICBmb3IgKGxldCBpPTA7IGk8bGlzdC50YXNrQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2tEaXZcIik7XG4gICAgdGFza0Rpdi5pbm5lckhUTUwgPSBsaXN0LnRhc2tBcnJheVtpXS50aXRsZSA7XG5cbiAgICB0b0RvRGl2LmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuICB9XG5cbiAgbWFpbi5hcHBlbmRDaGlsZCh0b0RvRGl2KTtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtjcmVhdGVCbG9ja30gZnJvbSAnLi9pbml0LmpzJ1xuaW1wb3J0IHthcHBlbmRUb0RvTGlzdH0gZnJvbSAnLi9pbml0LmpzJ1xuXG4vLyBjcmVhdGVCbG9jaygpO1xuXG5sZXQgdG9Eb0xpc3RBcnJheSA9IFtdO1xubGV0IHRhc2tBcnJheSA9IFtdO1xuXG5mdW5jdGlvbiBjcmVhdGVUYXNrKHRpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIHByb2plY3QpIHtcbiAgY29uc3QgdGVzdCA9IGB3ZSBhcmUgaW5zaWRlIHRoZSAke3RpdGxlfSB0YXNrYDtcbiAgY29uc3QgdGVzdGxvZyA9IGZ1bmN0aW9uKCkge2NvbnNvbGUubG9nKFwiVGVzdGxvZyBpbnNpZGUgdGhlIHRhc2sgd29ya3NcIil9O1xuICBjb25zdCByZW1vdmUgPSAoKSA9PiB7fTtcbiAgcmV0dXJuIHt0aXRsZSwgdGVzdGxvZywgdGVzdCwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBwcm9qZWN0fVxufVxuXG5jb25zdCBjcmVhdGVUb0RvTGlzdCA9ICh0aXRsZSkgPT4ge1xuICBjb25zdCByZW1vdmUgPSAoKSA9PiB0b0RvQXJyYXkuc2xpY2U7XG4gIGNvbnN0IG1vdmUgPSAoKSA9PiB0b0RvQXJyYXkuc3BsaWNlO1xuICBjb25zdCB0YXNrQXJyYXkgPSBbXTtcbiAgY29uc3QgYWRkVGFzayA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBwcm9tcHRUYXNrTmFtZSA9IHByb21wdChcIldoYXQncyB0aGUgdGFzayBuYW1lID9cIik7XG4gICAgbGV0IHRhc2sgPSBjcmVhdGVUYXNrKHByb21wdFRhc2tOYW1lKTtcbiAgICB0YXNrQXJyYXkucHVzaCh0YXNrKTtcbiAgICBjb25zb2xlLmxvZyh0YXNrQXJyYXkpO1xuICB9XG5cbiAgLy8gVHJ5aW5nIHRvIGNyZWF0ZSBwb3NzaWJpbGl0eSB0byBhZGQgYSBUYXNrIHRocm91Z2ggYSBidXR0b24gYnV0IHRoaXMgcmVmZXJzIHRvIHRoZSBidXR0b24sIG5vdCB0byB0aGUgb2JqZWN0LlxuXG4gIHJldHVybiB7cmVtb3ZlLCBtb3ZlLCBhZGRUYXNrLCB0aXRsZSwgdGFza0FycmF5fTtcbn07XG5cbi8vIFdPUktJTkcgW2FkZCBhIHRvIGRvIGxpc3Qgb2JqZWN0IGV4OiB3b3JrLCBsZWlzdXJlLi4uXSA6XG5mdW5jdGlvbiBhZGRUb0RvTGlzdCgpIHtcbiAgbGV0IGxpc3RuYW1lID0gcHJvbXB0KFwiV2hhdCdzIHRoZSBuYW1lIG9mIHlvdXIgbGlzdCA/XCIpO1xuICBsZXQgY3JlYXRlbGlzdCA9IGNyZWF0ZVRvRG9MaXN0KGxpc3RuYW1lKTtcbiAgdG9Eb0xpc3RBcnJheS5wdXNoKGNyZWF0ZWxpc3QpO1xuICBjb25zb2xlLmxvZyh0b0RvTGlzdEFycmF5KTtcbn1cblxuLy9GdW5jdGlvbiB0aGF0IHdpbGwgc2hvdyBhbGwgdGhlIHRvIGRvIGxpc3RzIG9uIHRoZSBET00gOiBcbmZ1bmN0aW9uIHNob3dUb0RvTGlzdHMoKSB7XG4gIGNvbnNvbGUubG9nKFwiV2UncmUgaW5zaWRlIHNob3cgVG9Eb0xpc3RzXCIpXG4gIGZvciAobGV0IGkgPSAwOyBpPHRvRG9MaXN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBhcHBlbmRUb0RvTGlzdCh0b0RvTGlzdEFycmF5W2ldKVxuICB9XG59XG5cbi8vT24gY2xpY2ssIHRoaXMgZnVuY3Rpb24gY3JlYXRlcyBhIG5ldyBUYXNrIGFuZCBhZGRzIGl0IHRvIHRoZSB0YXNrQXJyYXkgISBcbmZ1bmN0aW9uIGFkZFRhc2soKSB7XG4gIGxldCBuZXdGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0YXNrRm9ybVwiKTtcbiAgbGV0IG5ld1Rhc2sgPSBjcmVhdGVUYXNrKG5ld0Zvcm0udGl0bGUudmFsdWUsIG5ld0Zvcm0uZHVlRGF0ZS52YWx1ZSwgbmV3Rm9ybS5kZXNjcmlwdGlvbi52YWx1ZSwgbmV3Rm9ybS5wcmlvcml0eS52YWx1ZSwgbmV3Rm9ybS5wcm9qZWN0LnZhbHVlKVxuICB0YXNrQXJyYXkucHVzaChuZXdUYXNrKTtcbiAgY29uc29sZS5sb2cobmV3Rm9ybS50aXRsZS52YWx1ZSk7XG4gIGNvbnNvbGUubG9nKHRhc2tBcnJheSk7XG59XG5cbi8vIGFkZFRhc2tCdG5UZXN0LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhZGRUb0RvTGlzdCk7XG4vLyBzZWNvbmRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHNob3dUb0RvTGlzdHMpO1xuLy8gdGhpcmRCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge3RvRG9MaXN0QXJyYXlbMF0uYWRkVGFzaygpfSk7XG5cbiAgbGV0IHNhdmVUYXNrQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzYXZlVGFza0J0blwiKTtcbiAgc2F2ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIkhpIGNvbnNvbGVcIik7XG4gICAgbGV0IG5ld1Rhc2sgPSBjcmVhdGVUYXNrKHRpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHksIHByb2plY3QpO1xuICAgIHRhc2tBcnJheS5wdXNoKG5ld1Rhc2spO1xuICAgIGNvbnNvbGUubG9nKHRhc2tBcnJheSk7XG4gIH0pXG5cbmNvbnNvbGUubG9nKFwiUmVhY2hlZCB0aGUgZW5kIG9mIGluZGV4LmpzXCIpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==