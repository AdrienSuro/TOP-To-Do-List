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
  const mainDiv = document.createElement('div');
  mainDiv.setAttribute('id', 'mainDiv');
  mainDiv.innerHTML = "This is a test"
  
  let body = document.getElementById('body');
  
  body.appendChild(mainDiv);
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
  }

  return {remove, move, taskArray, addTask, title };
};

const firstToDoList = createToDoList("Work");
firstToDoList.addTask();
firstToDoList.addTask();
let z = firstToDoList.taskArray.length;

for (let i = z-1; i>=0; i--) {
  console.log(firstToDoList.taskArray[i]);
};

firstToDoList.js.testlog();

console.log("Reached the end of index.js")

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWUsV0FBVyxFQUFDOztBQUUzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztVQ1ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOb0M7O0FBRXBDLG9EQUFXOztBQUVYO0FBQ0Esb0NBQW9DLE9BQU87QUFDM0MsOEJBQThCO0FBQzlCLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsTUFBTTtBQUN4QjtBQUNBOztBQUVBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3QvLi9zcmMvaW5pdC5qcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcC10by1kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNyZWF0ZUJsb2NrO1xuXG5mdW5jdGlvbiBjcmVhdGVCbG9jaygpIHtcbiAgY29uc3QgbWFpbkRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBtYWluRGl2LnNldEF0dHJpYnV0ZSgnaWQnLCAnbWFpbkRpdicpO1xuICBtYWluRGl2LmlubmVySFRNTCA9IFwiVGhpcyBpcyBhIHRlc3RcIlxuICBcbiAgbGV0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYm9keScpO1xuICBcbiAgYm9keS5hcHBlbmRDaGlsZChtYWluRGl2KTtcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVCbG9jayBmcm9tIFwiLi9pbml0LmpzXCI7XG5cbmNyZWF0ZUJsb2NrKCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUpIHtcbiAgY29uc3QgdGVzdCA9IGB3ZSBhcmUgaW5zaWRlIHRoZSAke3RpdGxlfSB0YXNrYDtcbiAgY29uc3QgdGVzdGxvZyA9IGZ1bmN0aW9uKCkge2NvbnNvbGUubG9nKFwiVGVzdGxvZyBpbnNpZGUgdGhlIHRhc2sgd29ya3NcIil9O1xuICByZXR1cm4ge3RpdGxlLCB0ZXN0bG9nLCB0ZXN0fVxufVxuXG5jb25zdCBjcmVhdGVUb0RvTGlzdCA9ICh0aXRsZSkgPT4ge1xuICBjb25zdCB0b0RvQXJyYXkgPSBbXTtcbiAgY29uc3QgcmVtb3ZlID0gKCkgPT4gdG9Eb0FycmF5LnNsaWNlO1xuICBjb25zdCBtb3ZlID0gKCkgPT4gdG9Eb0FycmF5LnNwbGljZTtcbiAgY29uc3QgdGFza0FycmF5ID0gbmV3IEFycmF5KCk7XG4gIGNvbnN0IGFkZFRhc2sgPSBmdW5jdGlvbigpIHtcbiAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICBsZXQgcHJvbXB0VGFza05hbWUgPSBwcm9tcHQoXCJXaGF0J3MgdGhlIHRhc2sgbmFtZT9cIik7XG4gICAgdGhpc1twcm9tcHRUYXNrTmFtZV0gPSBjcmVhdGVUYXNrKHByb21wdFRhc2tOYW1lKTtcbiAgICB0YXNrQXJyYXkucHVzaChwcm9tcHRUYXNrTmFtZSk7XG4gIH1cblxuICByZXR1cm4ge3JlbW92ZSwgbW92ZSwgdGFza0FycmF5LCBhZGRUYXNrLCB0aXRsZSB9O1xufTtcblxuY29uc3QgZmlyc3RUb0RvTGlzdCA9IGNyZWF0ZVRvRG9MaXN0KFwiV29ya1wiKTtcbmZpcnN0VG9Eb0xpc3QuYWRkVGFzaygpO1xuZmlyc3RUb0RvTGlzdC5hZGRUYXNrKCk7XG5sZXQgeiA9IGZpcnN0VG9Eb0xpc3QudGFza0FycmF5Lmxlbmd0aDtcblxuZm9yIChsZXQgaSA9IHotMTsgaT49MDsgaS0tKSB7XG4gIGNvbnNvbGUubG9nKGZpcnN0VG9Eb0xpc3QudGFza0FycmF5W2ldKTtcbn07XG5cbmZpcnN0VG9Eb0xpc3QuanMudGVzdGxvZygpO1xuXG5jb25zb2xlLmxvZyhcIlJlYWNoZWQgdGhlIGVuZCBvZiBpbmRleC5qc1wiKVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9