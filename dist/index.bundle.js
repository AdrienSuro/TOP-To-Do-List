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
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createBlock);

function createBlock() {
  let body = document.getElementById("body");

  const mainDiv = document.createElement("div");
  mainDiv.setAttribute("id", "mainDiv");
  mainDiv.innerHTML = "This is a test";

  let addTaskBtn = document.createElement("button");
  addTaskBtn.setAttribute("id", "addTaskBtn");
  addTaskBtn.innerHTML = "Add a task";

  body.appendChild(mainDiv);
  body.appendChild(addTaskBtn);

  return{addTaskBtn}
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


(0,_init_js__WEBPACK_IMPORTED_MODULE_0__["default"])();

function createTask(title) {
  const test = `we are inside the ${title} task`;
  const testlog = function() {console.log("Testlog inside the task works")};
  return {title, testlog, test}
}

const createToDoList = (title) => {
  const toDoArray = [];
  const remove = () => toDoArray.slice;
  const move = () => toDoArray.splice;
  const taskArray = new Array();
  const addTask = function() {
    console.log(this);
    let promptTaskName = prompt("What's the task name?");
    this[promptTaskName] = createTask(promptTaskName);
    taskArray.push(promptTaskName);
    console.log(firstToDoList)
  }

  // Trying to create possibility to add a Task through a button but this refers to the button, not to the object.

  return {remove, move, taskArray, addTask, title };
};

const firstToDoList = createToDoList("Work");
addTaskBtn.addEventListener("click", firstToDoList.addTaskFct);
let z = firstToDoList.taskArray.length;

for (let i = z-1; i>=0; i--) {
  console.log(firstToDoList.taskArray[i]);
};

console.log("Reached the end of index.js")

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWUsV0FBVyxFQUFDOztBQUUzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7Ozs7Ozs7VUNqQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05vQzs7QUFFcEMsb0RBQVc7O0FBRVg7QUFDQSxvQ0FBb0MsT0FBTztBQUMzQyw4QkFBOEI7QUFDOUIsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxVQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixNQUFNO0FBQ3hCO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC8uL3NyYy9pbml0LmpzIiwid2VicGFjazovL3RvcC10by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY3JlYXRlQmxvY2s7XG5cbmZ1bmN0aW9uIGNyZWF0ZUJsb2NrKCkge1xuICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keVwiKTtcblxuICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbkRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5EaXZcIik7XG4gIG1haW5EaXYuaW5uZXJIVE1MID0gXCJUaGlzIGlzIGEgdGVzdFwiO1xuXG4gIGxldCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkVGFza0J0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZFRhc2tCdG5cIik7XG4gIGFkZFRhc2tCdG4uaW5uZXJIVE1MID0gXCJBZGQgYSB0YXNrXCI7XG5cbiAgYm9keS5hcHBlbmRDaGlsZChtYWluRGl2KTtcbiAgYm9keS5hcHBlbmRDaGlsZChhZGRUYXNrQnRuKTtcblxuICByZXR1cm57YWRkVGFza0J0bn1cbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IGNyZWF0ZUJsb2NrIGZyb20gXCIuL2luaXQuanNcIjtcblxuY3JlYXRlQmxvY2soKTtcblxuZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSkge1xuICBjb25zdCB0ZXN0ID0gYHdlIGFyZSBpbnNpZGUgdGhlICR7dGl0bGV9IHRhc2tgO1xuICBjb25zdCB0ZXN0bG9nID0gZnVuY3Rpb24oKSB7Y29uc29sZS5sb2coXCJUZXN0bG9nIGluc2lkZSB0aGUgdGFzayB3b3Jrc1wiKX07XG4gIHJldHVybiB7dGl0bGUsIHRlc3Rsb2csIHRlc3R9XG59XG5cbmNvbnN0IGNyZWF0ZVRvRG9MaXN0ID0gKHRpdGxlKSA9PiB7XG4gIGNvbnN0IHRvRG9BcnJheSA9IFtdO1xuICBjb25zdCByZW1vdmUgPSAoKSA9PiB0b0RvQXJyYXkuc2xpY2U7XG4gIGNvbnN0IG1vdmUgPSAoKSA9PiB0b0RvQXJyYXkuc3BsaWNlO1xuICBjb25zdCB0YXNrQXJyYXkgPSBuZXcgQXJyYXkoKTtcbiAgY29uc3QgYWRkVGFzayA9IGZ1bmN0aW9uKCkge1xuICAgIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgIGxldCBwcm9tcHRUYXNrTmFtZSA9IHByb21wdChcIldoYXQncyB0aGUgdGFzayBuYW1lP1wiKTtcbiAgICB0aGlzW3Byb21wdFRhc2tOYW1lXSA9IGNyZWF0ZVRhc2socHJvbXB0VGFza05hbWUpO1xuICAgIHRhc2tBcnJheS5wdXNoKHByb21wdFRhc2tOYW1lKTtcbiAgICBjb25zb2xlLmxvZyhmaXJzdFRvRG9MaXN0KVxuICB9XG5cbiAgLy8gVHJ5aW5nIHRvIGNyZWF0ZSBwb3NzaWJpbGl0eSB0byBhZGQgYSBUYXNrIHRocm91Z2ggYSBidXR0b24gYnV0IHRoaXMgcmVmZXJzIHRvIHRoZSBidXR0b24sIG5vdCB0byB0aGUgb2JqZWN0LlxuXG4gIHJldHVybiB7cmVtb3ZlLCBtb3ZlLCB0YXNrQXJyYXksIGFkZFRhc2ssIHRpdGxlIH07XG59O1xuXG5jb25zdCBmaXJzdFRvRG9MaXN0ID0gY3JlYXRlVG9Eb0xpc3QoXCJXb3JrXCIpO1xuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZmlyc3RUb0RvTGlzdC5hZGRUYXNrRmN0KTtcbmxldCB6ID0gZmlyc3RUb0RvTGlzdC50YXNrQXJyYXkubGVuZ3RoO1xuXG5mb3IgKGxldCBpID0gei0xOyBpPj0wOyBpLS0pIHtcbiAgY29uc29sZS5sb2coZmlyc3RUb0RvTGlzdC50YXNrQXJyYXlbaV0pO1xufTtcblxuY29uc29sZS5sb2coXCJSZWFjaGVkIHRoZSBlbmQgb2YgaW5kZXguanNcIilcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==