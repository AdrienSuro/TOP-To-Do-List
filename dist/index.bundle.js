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

function createTask(title, dueDate, description, priority) {
  const test = `we are inside the ${title} task`;
  const testlog = function() {console.log("Testlog inside the task works")};
  const remove = () => {};
  return {title, testlog, test, dueDate, description, priority}
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


//const firstToDoList = createToDoList("Work");
//addTaskBtn.addEventListener("click", () => console.log(firstToDoList));
//let z = firstToDoList.taskArray.length;

//firstToDoList.addTask();  
//console.log(firstToDoList)

//for (let i = z-1; i>=0; i--) {
//  console.log(firstToDoList.taskArray[i]);
//};

console.log("Reached the end of index.js")
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxnQkFBZ0IseUJBQXlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7VUN0REE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05xQztBQUNHOztBQUV4QyxxREFBVzs7QUFFWDtBQUNBOztBQUVBO0FBQ0Esb0NBQW9DLE9BQU87QUFDM0MsOEJBQThCO0FBQzlCO0FBQ0EsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0Isd0JBQXdCO0FBQzFDLElBQUksd0RBQWM7QUFDbEI7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0NBQStDLDJCQUEyQjs7O0FBRzFFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixNQUFNO0FBQzFCO0FBQ0E7O0FBRUEsMEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC8uL3NyYy9pbml0LmpzIiwid2VicGFjazovL3RvcC10by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJsb2NrKCkge1xuICBjb25zb2xlLmxvZyhcIndlJ3JlIGluc2lkZSBjcmVhdGUgYmxvY2tcIilcbiAgbGV0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvZHlcIik7XG5cbiAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIG1haW5EaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJtYWluRGl2XCIpO1xuICBtYWluRGl2LmlubmVySFRNTCA9IFwiVGhpcyBpcyBhIHRlc3RcIjtcblxuICBsZXQgYWRkVGFza0J0blRlc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRUYXNrQnRuVGVzdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZFRhc2tCdG5UZXN0XCIpO1xuICBhZGRUYXNrQnRuVGVzdC5pbm5lckhUTUwgPSBcIkFkZCBhIGxpc3RcIjtcblxuICBsZXQgc2Vjb25kQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgc2Vjb25kQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2Vjb25kQnRuXCIpO1xuICBzZWNvbmRCdG4uaW5uZXJIVE1MID0gXCJTaG93IG5hbWVzIG9mIGFsbCB0aGUgdG8tZG8tbGlzdHNcIjtcblxuICBsZXQgdGhpcmRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICB0aGlyZEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRoaXJkQnRuXCIpO1xuICB0aGlyZEJ0bi5pbm5lckhUTUwgPSBcIkFkZCB0YXNrIHRvIHRoZSB0by1kbyBsaXN0XCI7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChtYWluRGl2KTtcbiAgYm9keS5hcHBlbmRDaGlsZChhZGRUYXNrQnRuVGVzdCk7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoc2Vjb25kQnRuKTtcbiAgYm9keS5hcHBlbmRDaGlsZCh0aGlyZEJ0bik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRUb0RvTGlzdChsaXN0KSB7XG4gIGNvbnNvbGUubG9nKFwiV2UncmUgaW5zaWRlIHRoZSBmY3QgYXBwZW5kVG9Eb0xpc3RcIilcbiAgbGV0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG5cbiAgbGV0IHRvRG9EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICB0b0RvRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidG9Eb0RpdlwiKTtcblxuICBsZXQgc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhclwiKTtcblxuICBsZXQgYWRkVGFza0J0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIGFkZFRhc2tCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGRUYXNrQnRuXCIpO1xuICBhZGRUYXNrQnRuLmlubmVySFRNTCA9IFwiQWRkIGEgdGFza1wiIDtcblxuICBsZXQgbGlzdFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbiAgbGlzdFRpdGxlLnNldEF0dHJpYnV0ZShcImlkXCIsIFwibGlzdFRpdGxlXCIpO1xuICBsaXN0VGl0bGUuaW5uZXJIVE1MID0gbGlzdC50aXRsZVxuICBcbiAgc2lkZWJhci5hcHBlbmRDaGlsZChsaXN0VGl0bGUpO1xuXG4gIGZvciAobGV0IGk9MDsgaTxsaXN0LnRhc2tBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGxldCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwidGFza0RpdlwiKTtcbiAgICB0YXNrRGl2LmlubmVySFRNTCA9IGxpc3QudGFza0FycmF5W2ldLnRpdGxlIDtcblxuICAgIHRvRG9EaXYuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG4gIH1cblxuICBtYWluLmFwcGVuZENoaWxkKHRvRG9EaXYpO1xufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2NyZWF0ZUJsb2NrfSBmcm9tICcuL2luaXQuanMnXG5pbXBvcnQge2FwcGVuZFRvRG9MaXN0fSBmcm9tICcuL2luaXQuanMnXG5cbmNyZWF0ZUJsb2NrKCk7XG5cbmxldCB0b0RvTGlzdEFycmF5ID0gW107XG5sZXQgdGFza0FycmF5ID0gW107XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSkge1xuICBjb25zdCB0ZXN0ID0gYHdlIGFyZSBpbnNpZGUgdGhlICR7dGl0bGV9IHRhc2tgO1xuICBjb25zdCB0ZXN0bG9nID0gZnVuY3Rpb24oKSB7Y29uc29sZS5sb2coXCJUZXN0bG9nIGluc2lkZSB0aGUgdGFzayB3b3Jrc1wiKX07XG4gIGNvbnN0IHJlbW92ZSA9ICgpID0+IHt9O1xuICByZXR1cm4ge3RpdGxlLCB0ZXN0bG9nLCB0ZXN0LCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHl9XG59XG5cbmNvbnN0IGNyZWF0ZVRvRG9MaXN0ID0gKHRpdGxlKSA9PiB7XG4gIGNvbnN0IHJlbW92ZSA9ICgpID0+IHRvRG9BcnJheS5zbGljZTtcbiAgY29uc3QgbW92ZSA9ICgpID0+IHRvRG9BcnJheS5zcGxpY2U7XG4gIGNvbnN0IHRhc2tBcnJheSA9IFtdO1xuICBjb25zdCBhZGRUYXNrID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IHByb21wdFRhc2tOYW1lID0gcHJvbXB0KFwiV2hhdCdzIHRoZSB0YXNrIG5hbWUgP1wiKTtcbiAgICBsZXQgdGFzayA9IGNyZWF0ZVRhc2socHJvbXB0VGFza05hbWUpO1xuICAgIHRhc2tBcnJheS5wdXNoKHRhc2spO1xuICAgIGNvbnNvbGUubG9nKHRhc2tBcnJheSk7XG4gIH1cblxuICAvLyBUcnlpbmcgdG8gY3JlYXRlIHBvc3NpYmlsaXR5IHRvIGFkZCBhIFRhc2sgdGhyb3VnaCBhIGJ1dHRvbiBidXQgdGhpcyByZWZlcnMgdG8gdGhlIGJ1dHRvbiwgbm90IHRvIHRoZSBvYmplY3QuXG5cbiAgcmV0dXJuIHtyZW1vdmUsIG1vdmUsIGFkZFRhc2ssIHRpdGxlLCB0YXNrQXJyYXl9O1xufTtcblxuLy8gV09SS0lORyBbYWRkIGEgdG8gZG8gbGlzdCBvYmplY3QgZXg6IHdvcmssIGxlaXN1cmUuLi5dIDpcbmZ1bmN0aW9uIGFkZFRvRG9MaXN0KCkge1xuICBsZXQgbGlzdG5hbWUgPSBwcm9tcHQoXCJXaGF0J3MgdGhlIG5hbWUgb2YgeW91ciBsaXN0ID9cIik7XG4gIGxldCBjcmVhdGVsaXN0ID0gY3JlYXRlVG9Eb0xpc3QobGlzdG5hbWUpO1xuICB0b0RvTGlzdEFycmF5LnB1c2goY3JlYXRlbGlzdCk7XG4gIGNvbnNvbGUubG9nKHRvRG9MaXN0QXJyYXkpO1xufVxuXG4vL0Z1bmN0aW9uIHRoYXQgd2lsbCBzaG93IGFsbCB0aGUgdG8gZG8gbGlzdHMgb24gdGhlIERPTSA6IFxuZnVuY3Rpb24gc2hvd1RvRG9MaXN0cygpIHtcbiAgY29uc29sZS5sb2coXCJXZSdyZSBpbnNpZGUgc2hvdyBUb0RvTGlzdHNcIilcbiAgZm9yIChsZXQgaSA9IDA7IGk8dG9Eb0xpc3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGFwcGVuZFRvRG9MaXN0KHRvRG9MaXN0QXJyYXlbaV0pXG4gIH1cbn1cblxuYWRkVGFza0J0blRlc3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFkZFRvRG9MaXN0KTtcbnNlY29uZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgc2hvd1RvRG9MaXN0cyk7XG50aGlyZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7dG9Eb0xpc3RBcnJheVswXS5hZGRUYXNrKCl9KTtcblxuXG4vL2NvbnN0IGZpcnN0VG9Eb0xpc3QgPSBjcmVhdGVUb0RvTGlzdChcIldvcmtcIik7XG4vL2FkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNvbnNvbGUubG9nKGZpcnN0VG9Eb0xpc3QpKTtcbi8vbGV0IHogPSBmaXJzdFRvRG9MaXN0LnRhc2tBcnJheS5sZW5ndGg7XG5cbi8vZmlyc3RUb0RvTGlzdC5hZGRUYXNrKCk7ICBcbi8vY29uc29sZS5sb2coZmlyc3RUb0RvTGlzdClcblxuLy9mb3IgKGxldCBpID0gei0xOyBpPj0wOyBpLS0pIHtcbi8vICBjb25zb2xlLmxvZyhmaXJzdFRvRG9MaXN0LnRhc2tBcnJheVtpXSk7XG4vL307XG5cbmNvbnNvbGUubG9nKFwiUmVhY2hlZCB0aGUgZW5kIG9mIGluZGV4LmpzXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9