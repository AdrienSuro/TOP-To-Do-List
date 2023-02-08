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

  let secondBtn = document.createElement("button");
  secondBtn.setAttribute("id", "secondBtn");
  secondBtn.innerHTML = "Show names of all the to-do-lists";

  let thirdBtn = document.createElement("button");
  thirdBtn.setAttribute("id", "thirdBtn");
  thirdBtn.innerHTML = "Add task to the to-do list";

  body.appendChild(mainDiv);
  body.appendChild(addTaskBtn);
  body.appendChild(secondBtn);
  body.appendChild(thirdBtn);

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

let toDoListArray = [];

function createTask(title) {
  const test = `we are inside the ${title} task`;
  const testlog = function() {console.log("Testlog inside the task works")};
  return {title, testlog, test}
}

const createToDoList = (title) => {
  const remove = () => toDoArray.slice;
  const move = () => toDoArray.splice;
  const taskArray = [];
  const addTask = function() {
    let promptTaskName = prompt("What's the task name?");
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

//WORKING [show the title of each to-do list (ex: work, leisure)]
function showToDoListArray() {
  let body = document.getElementById("body");
  let listArrayParagraph = document.createElement('div');
  let z = toDoListArray.length;
  for (let i = z-1; i>=0; i--) {
    console.log(toDoListArray[i].title);
    listArrayParagraph.innerHTML += toDoListArray[i].title + " ";
  }
  body.appendChild(listArrayParagraph);
}

addTaskBtn.addEventListener("click", addToDoList);
secondBtn.addEventListener("click", showToDoListArray);
thirdBtn.addEventListener("click", function() {toDoListArray[1].addTask()});


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUVBQWUsV0FBVyxFQUFDOztBQUUzQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTO0FBQ1Q7Ozs7Ozs7VUMzQkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05tQzs7QUFFbkMsb0RBQVc7O0FBRVg7O0FBRUE7QUFDQSxvQ0FBb0MsT0FBTztBQUMzQyw4QkFBOEI7QUFDOUIsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLE1BQU07QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsK0NBQStDLDJCQUEyQjs7O0FBRzFFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG9CQUFvQixNQUFNO0FBQzFCO0FBQ0E7O0FBRUEsMEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC8uL3NyYy9pbml0LmpzIiwid2VicGFjazovL3RvcC10by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY3JlYXRlQmxvY2s7XG5cbmZ1bmN0aW9uIGNyZWF0ZUJsb2NrKCkge1xuICBsZXQgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keVwiKTtcblxuICBjb25zdCBtYWluRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgbWFpbkRpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1haW5EaXZcIik7XG4gIG1haW5EaXYuaW5uZXJIVE1MID0gXCJUaGlzIGlzIGEgdGVzdFwiO1xuXG4gIGxldCBhZGRUYXNrQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkVGFza0J0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImFkZFRhc2tCdG5cIik7XG4gIGFkZFRhc2tCdG4uaW5uZXJIVE1MID0gXCJBZGQgYSB0YXNrXCI7XG5cbiAgbGV0IHNlY29uZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHNlY29uZEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlY29uZEJ0blwiKTtcbiAgc2Vjb25kQnRuLmlubmVySFRNTCA9IFwiU2hvdyBuYW1lcyBvZiBhbGwgdGhlIHRvLWRvLWxpc3RzXCI7XG5cbiAgbGV0IHRoaXJkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdGhpcmRCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0aGlyZEJ0blwiKTtcbiAgdGhpcmRCdG4uaW5uZXJIVE1MID0gXCJBZGQgdGFzayB0byB0aGUgdG8tZG8gbGlzdFwiO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQobWFpbkRpdik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoYWRkVGFza0J0bik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoc2Vjb25kQnRuKTtcbiAgYm9keS5hcHBlbmRDaGlsZCh0aGlyZEJ0bik7XG5cbiAgcmV0dXJue2FkZFRhc2tCdG59XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCBjcmVhdGVCbG9jayBmcm9tICcuL2luaXQuanMnXG5cbmNyZWF0ZUJsb2NrKCk7XG5cbmxldCB0b0RvTGlzdEFycmF5ID0gW107XG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUpIHtcbiAgY29uc3QgdGVzdCA9IGB3ZSBhcmUgaW5zaWRlIHRoZSAke3RpdGxlfSB0YXNrYDtcbiAgY29uc3QgdGVzdGxvZyA9IGZ1bmN0aW9uKCkge2NvbnNvbGUubG9nKFwiVGVzdGxvZyBpbnNpZGUgdGhlIHRhc2sgd29ya3NcIil9O1xuICByZXR1cm4ge3RpdGxlLCB0ZXN0bG9nLCB0ZXN0fVxufVxuXG5jb25zdCBjcmVhdGVUb0RvTGlzdCA9ICh0aXRsZSkgPT4ge1xuICBjb25zdCByZW1vdmUgPSAoKSA9PiB0b0RvQXJyYXkuc2xpY2U7XG4gIGNvbnN0IG1vdmUgPSAoKSA9PiB0b0RvQXJyYXkuc3BsaWNlO1xuICBjb25zdCB0YXNrQXJyYXkgPSBbXTtcbiAgY29uc3QgYWRkVGFzayA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBwcm9tcHRUYXNrTmFtZSA9IHByb21wdChcIldoYXQncyB0aGUgdGFzayBuYW1lP1wiKTtcbiAgICBsZXQgdGFzayA9IGNyZWF0ZVRhc2socHJvbXB0VGFza05hbWUpO1xuICAgIHRhc2tBcnJheS5wdXNoKHRhc2spO1xuICAgIGNvbnNvbGUubG9nKHRhc2tBcnJheSk7XG4gIH1cblxuICAvLyBUcnlpbmcgdG8gY3JlYXRlIHBvc3NpYmlsaXR5IHRvIGFkZCBhIFRhc2sgdGhyb3VnaCBhIGJ1dHRvbiBidXQgdGhpcyByZWZlcnMgdG8gdGhlIGJ1dHRvbiwgbm90IHRvIHRoZSBvYmplY3QuXG5cbiAgcmV0dXJuIHtyZW1vdmUsIG1vdmUsIGFkZFRhc2ssIHRpdGxlLCB0YXNrQXJyYXl9O1xufTtcblxuLy8gV09SS0lORyBbYWRkIGEgdG8gZG8gbGlzdCBvYmplY3QgZXg6IHdvcmssIGxlaXN1cmUuLi5dIDpcbmZ1bmN0aW9uIGFkZFRvRG9MaXN0KCkge1xuICBsZXQgbGlzdG5hbWUgPSBwcm9tcHQoXCJXaGF0J3MgdGhlIG5hbWUgb2YgeW91ciBsaXN0ID9cIik7XG4gIGxldCBjcmVhdGVsaXN0ID0gY3JlYXRlVG9Eb0xpc3QobGlzdG5hbWUpO1xuICB0b0RvTGlzdEFycmF5LnB1c2goY3JlYXRlbGlzdCk7XG4gIGNvbnNvbGUubG9nKHRvRG9MaXN0QXJyYXkpO1xufVxuXG4vL1dPUktJTkcgW3Nob3cgdGhlIHRpdGxlIG9mIGVhY2ggdG8tZG8gbGlzdCAoZXg6IHdvcmssIGxlaXN1cmUpXVxuZnVuY3Rpb24gc2hvd1RvRG9MaXN0QXJyYXkoKSB7XG4gIGxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2R5XCIpO1xuICBsZXQgbGlzdEFycmF5UGFyYWdyYXBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGxldCB6ID0gdG9Eb0xpc3RBcnJheS5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSB6LTE7IGk+PTA7IGktLSkge1xuICAgIGNvbnNvbGUubG9nKHRvRG9MaXN0QXJyYXlbaV0udGl0bGUpO1xuICAgIGxpc3RBcnJheVBhcmFncmFwaC5pbm5lckhUTUwgKz0gdG9Eb0xpc3RBcnJheVtpXS50aXRsZSArIFwiIFwiO1xuICB9XG4gIGJvZHkuYXBwZW5kQ2hpbGQobGlzdEFycmF5UGFyYWdyYXBoKTtcbn1cblxuYWRkVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYWRkVG9Eb0xpc3QpO1xuc2Vjb25kQnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBzaG93VG9Eb0xpc3RBcnJheSk7XG50aGlyZEJ0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7dG9Eb0xpc3RBcnJheVsxXS5hZGRUYXNrKCl9KTtcblxuXG4vL2NvbnN0IGZpcnN0VG9Eb0xpc3QgPSBjcmVhdGVUb0RvTGlzdChcIldvcmtcIik7XG4vL2FkZFRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IGNvbnNvbGUubG9nKGZpcnN0VG9Eb0xpc3QpKTtcbi8vbGV0IHogPSBmaXJzdFRvRG9MaXN0LnRhc2tBcnJheS5sZW5ndGg7XG5cbi8vZmlyc3RUb0RvTGlzdC5hZGRUYXNrKCk7ICBcbi8vY29uc29sZS5sb2coZmlyc3RUb0RvTGlzdClcblxuLy9mb3IgKGxldCBpID0gei0xOyBpPj0wOyBpLS0pIHtcbi8vICBjb25zb2xlLmxvZyhmaXJzdFRvRG9MaXN0LnRhc2tBcnJheVtpXSk7XG4vL307XG5cbmNvbnNvbGUubG9nKFwiUmVhY2hlZCB0aGUgZW5kIG9mIGluZGV4LmpzXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9