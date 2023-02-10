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



(0,_init_js__WEBPACK_IMPORTED_MODULE_0__.createBlock)();

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

addTaskBtnTest.addEventListener("click", addToDoList);
secondBtn.addEventListener("click", showToDoLists);
thirdBtn.addEventListener("click", function() {toDoListArray[0].addTask()});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IseUJBQXlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7VUN0REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05xQztBQUNHOztBQUV4QyxxREFBVzs7QUFFWDtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLE9BQU87QUFDM0MsOEJBQThCO0FBQzlCO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDLElBQUksd0RBQWM7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0NBQStDLDJCQUEyQjs7QUFFMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSCwyQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC10by1kby1saXN0Ly4vc3JjL2luaXQuanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcC10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZnVuY3Rpb24gY3JlYXRlQmxvY2soKSB7XG4gIGNvbnNvbGUubG9nKFwid2UncmUgaW5zaWRlIGNyZWF0ZSBibG9ja1wiKVxuICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keVwiKTtcblxuICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbkRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5EaXZcIik7XG4gIG1haW5EaXYuaW5uZXJIVE1MID0gXCJUaGlzIGlzIGEgdGVzdFwiO1xuXG4gIGxldCBhZGRUYXNrQnRuVGVzdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFRhc2tCdG5UZXN0LnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkVGFza0J0blRlc3RcIik7XG4gIGFkZFRhc2tCdG5UZXN0LmlubmVySFRNTCA9IFwiQWRkIGEgbGlzdFwiO1xuXG4gIGxldCBzZWNvbmRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBzZWNvbmRCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJzZWNvbmRCdG5cIik7XG4gIHNlY29uZEJ0bi5pbm5lckhUTUwgPSBcIlNob3cgbmFtZXMgb2YgYWxsIHRoZSB0by1kby1saXN0c1wiO1xuXG4gIGxldCB0aGlyZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHRoaXJkQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGhpcmRCdG5cIik7XG4gIHRoaXJkQnRuLmlubmVySFRNTCA9IFwiQWRkIHRhc2sgdG8gdGhlIHRvLWRvIGxpc3RcIjtcblxuICBib2R5LmFwcGVuZENoaWxkKG1haW5EaXYpO1xuICBib2R5LmFwcGVuZENoaWxkKGFkZFRhc2tCdG5UZXN0KTtcbiAgYm9keS5hcHBlbmRDaGlsZChzZWNvbmRCdG4pO1xuICBib2R5LmFwcGVuZENoaWxkKHRoaXJkQnRuKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFwcGVuZFRvRG9MaXN0KGxpc3QpIHtcbiAgY29uc29sZS5sb2coXCJXZSdyZSBpbnNpZGUgdGhlIGZjdCBhcHBlbmRUb0RvTGlzdFwiKVxuICBsZXQgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWFpblwiKTtcblxuICBsZXQgdG9Eb0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIHRvRG9EaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0b0RvRGl2XCIpO1xuXG4gIGxldCBzaWRlYmFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyXCIpO1xuXG4gIGxldCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkVGFza0J0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZFRhc2tCdG5cIik7XG4gIGFkZFRhc2tCdG4uaW5uZXJIVE1MID0gXCJBZGQgYSB0YXNrXCIgO1xuXG4gIGxldCBsaXN0VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xuICBsaXN0VGl0bGUuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJsaXN0VGl0bGVcIik7XG4gIGxpc3RUaXRsZS5pbm5lckhUTUwgPSBsaXN0LnRpdGxlXG4gIFxuICBzaWRlYmFyLmFwcGVuZENoaWxkKGxpc3RUaXRsZSk7XG5cbiAgZm9yIChsZXQgaT0wOyBpPGxpc3QudGFza0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgbGV0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIHRhc2tEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0YXNrRGl2XCIpO1xuICAgIHRhc2tEaXYuaW5uZXJIVE1MID0gbGlzdC50YXNrQXJyYXlbaV0udGl0bGUgO1xuXG4gICAgdG9Eb0Rpdi5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgfVxuXG4gIG1haW4uYXBwZW5kQ2hpbGQodG9Eb0Rpdik7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7Y3JlYXRlQmxvY2t9IGZyb20gJy4vaW5pdC5qcydcbmltcG9ydCB7YXBwZW5kVG9Eb0xpc3R9IGZyb20gJy4vaW5pdC5qcydcblxuY3JlYXRlQmxvY2soKTtcblxubGV0IHRvRG9MaXN0QXJyYXkgPSBbXTtcbmxldCB0YXNrQXJyYXkgPSBbXTtcblxuZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gIGNvbnN0IHRlc3QgPSBgd2UgYXJlIGluc2lkZSB0aGUgJHt0aXRsZX0gdGFza2A7XG4gIGNvbnN0IHRlc3Rsb2cgPSBmdW5jdGlvbigpIHtjb25zb2xlLmxvZyhcIlRlc3Rsb2cgaW5zaWRlIHRoZSB0YXNrIHdvcmtzXCIpfTtcbiAgY29uc3QgcmVtb3ZlID0gKCkgPT4ge307XG4gIHJldHVybiB7dGl0bGUsIHRlc3Rsb2csIHRlc3QsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgcHJvamVjdH1cbn1cblxuY29uc3QgY3JlYXRlVG9Eb0xpc3QgPSAodGl0bGUpID0+IHtcbiAgY29uc3QgcmVtb3ZlID0gKCkgPT4gdG9Eb0FycmF5LnNsaWNlO1xuICBjb25zdCBtb3ZlID0gKCkgPT4gdG9Eb0FycmF5LnNwbGljZTtcbiAgY29uc3QgdGFza0FycmF5ID0gW107XG4gIGNvbnN0IGFkZFRhc2sgPSBmdW5jdGlvbigpIHtcbiAgICBsZXQgcHJvbXB0VGFza05hbWUgPSBwcm9tcHQoXCJXaGF0J3MgdGhlIHRhc2sgbmFtZSA/XCIpO1xuICAgIGxldCB0YXNrID0gY3JlYXRlVGFzayhwcm9tcHRUYXNrTmFtZSk7XG4gICAgdGFza0FycmF5LnB1c2godGFzayk7XG4gICAgY29uc29sZS5sb2codGFza0FycmF5KTtcbiAgfVxuXG4gIC8vIFRyeWluZyB0byBjcmVhdGUgcG9zc2liaWxpdHkgdG8gYWRkIGEgVGFzayB0aHJvdWdoIGEgYnV0dG9uIGJ1dCB0aGlzIHJlZmVycyB0byB0aGUgYnV0dG9uLCBub3QgdG8gdGhlIG9iamVjdC5cblxuICByZXR1cm4ge3JlbW92ZSwgbW92ZSwgYWRkVGFzaywgdGl0bGUsIHRhc2tBcnJheX07XG59O1xuXG4vLyBXT1JLSU5HIFthZGQgYSB0byBkbyBsaXN0IG9iamVjdCBleDogd29yaywgbGVpc3VyZS4uLl0gOlxuZnVuY3Rpb24gYWRkVG9Eb0xpc3QoKSB7XG4gIGxldCBsaXN0bmFtZSA9IHByb21wdChcIldoYXQncyB0aGUgbmFtZSBvZiB5b3VyIGxpc3QgP1wiKTtcbiAgbGV0IGNyZWF0ZWxpc3QgPSBjcmVhdGVUb0RvTGlzdChsaXN0bmFtZSk7XG4gIHRvRG9MaXN0QXJyYXkucHVzaChjcmVhdGVsaXN0KTtcbiAgY29uc29sZS5sb2codG9Eb0xpc3RBcnJheSk7XG59XG5cbi8vRnVuY3Rpb24gdGhhdCB3aWxsIHNob3cgYWxsIHRoZSB0byBkbyBsaXN0cyBvbiB0aGUgRE9NIDogXG5mdW5jdGlvbiBzaG93VG9Eb0xpc3RzKCkge1xuICBjb25zb2xlLmxvZyhcIldlJ3JlIGluc2lkZSBzaG93IFRvRG9MaXN0c1wiKVxuICBmb3IgKGxldCBpID0gMDsgaTx0b0RvTGlzdEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgYXBwZW5kVG9Eb0xpc3QodG9Eb0xpc3RBcnJheVtpXSlcbiAgfVxufVxuXG5hZGRUYXNrQnRuVGVzdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkVG9Eb0xpc3QpO1xuc2Vjb25kQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93VG9Eb0xpc3RzKTtcbnRoaXJkQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHt0b0RvTGlzdEFycmF5WzBdLmFkZFRhc2soKX0pO1xuXG4gIGxldCBzYXZlVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2F2ZVRhc2tCdG5cIik7XG4gIHNhdmVUYXNrQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJIaSBjb25zb2xlXCIpO1xuICAgIGxldCBuZXdUYXNrID0gY3JlYXRlVGFzayh0aXRsZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBwcm9qZWN0KTtcbiAgICB0YXNrQXJyYXkucHVzaChuZXdUYXNrKTtcbiAgICBjb25zb2xlLmxvZyh0YXNrQXJyYXkpO1xuICB9KVxuXG5jb25zb2xlLmxvZyhcIlJlYWNoZWQgdGhlIGVuZCBvZiBpbmRleC5qc1wiKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=