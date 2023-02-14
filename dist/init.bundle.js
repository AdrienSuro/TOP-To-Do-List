/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
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
/*!*********************!*\
  !*** ./src/init.js ***!
  \*********************/
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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTk87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdCQUFnQix5QkFBeUI7QUFDekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC10by1kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvcC10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvcC10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3QvLi9zcmMvaW5pdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCbG9jaygpIHtcbiAgY29uc29sZS5sb2coXCJ3ZSdyZSBpbnNpZGUgY3JlYXRlIGJsb2NrXCIpXG4gIGxldCBib2R5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJib2R5XCIpO1xuXG4gIGNvbnN0IG1haW5EaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBtYWluRGl2LnNldEF0dHJpYnV0ZShcImlkXCIsIFwibWFpbkRpdlwiKTtcbiAgbWFpbkRpdi5pbm5lckhUTUwgPSBcIlRoaXMgaXMgYSB0ZXN0XCI7XG5cbiAgbGV0IGFkZFRhc2tCdG5UZXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgYWRkVGFza0J0blRlc3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJhZGRUYXNrQnRuVGVzdFwiKTtcbiAgYWRkVGFza0J0blRlc3QuaW5uZXJIVE1MID0gXCJBZGQgYSBsaXN0XCI7XG5cbiAgbGV0IHNlY29uZEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gIHNlY29uZEJ0bi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNlY29uZEJ0blwiKTtcbiAgc2Vjb25kQnRuLmlubmVySFRNTCA9IFwiU2hvdyBuYW1lcyBvZiBhbGwgdGhlIHRvLWRvLWxpc3RzXCI7XG5cbiAgbGV0IHRoaXJkQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgdGhpcmRCdG4uc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJ0aGlyZEJ0blwiKTtcbiAgdGhpcmRCdG4uaW5uZXJIVE1MID0gXCJBZGQgdGFzayB0byB0aGUgdG8tZG8gbGlzdFwiO1xuXG4gIGJvZHkuYXBwZW5kQ2hpbGQobWFpbkRpdik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQoYWRkVGFza0J0blRlc3QpO1xuICBib2R5LmFwcGVuZENoaWxkKHNlY29uZEJ0bik7XG4gIGJvZHkuYXBwZW5kQ2hpbGQodGhpcmRCdG4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kVG9Eb0xpc3QobGlzdCkge1xuICBjb25zb2xlLmxvZyhcIldlJ3JlIGluc2lkZSB0aGUgZmN0IGFwcGVuZFRvRG9MaXN0XCIpXG4gIGxldCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtYWluXCIpO1xuXG4gIGxldCB0b0RvRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgdG9Eb0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRvRG9EaXZcIik7XG5cbiAgbGV0IHNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNpZGViYXJcIik7XG5cbiAgbGV0IGFkZFRhc2tCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICBhZGRUYXNrQnRuLnNldEF0dHJpYnV0ZShcImlkXCIsIFwiYWRkVGFza0J0blwiKTtcbiAgYWRkVGFza0J0bi5pbm5lckhUTUwgPSBcIkFkZCBhIHRhc2tcIiA7XG5cbiAgbGV0IGxpc3RUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2gxJyk7XG4gIGxpc3RUaXRsZS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImxpc3RUaXRsZVwiKTtcbiAgbGlzdFRpdGxlLmlubmVySFRNTCA9IGxpc3QudGl0bGVcbiAgXG4gIHNpZGViYXIuYXBwZW5kQ2hpbGQobGlzdFRpdGxlKTtcblxuICBmb3IgKGxldCBpPTA7IGk8bGlzdC50YXNrQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgdGFza0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgdGFza0Rpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2tEaXZcIik7XG4gICAgdGFza0Rpdi5pbm5lckhUTUwgPSBsaXN0LnRhc2tBcnJheVtpXS50aXRsZSA7XG5cbiAgICB0b0RvRGl2LmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuICB9XG5cbiAgbWFpbi5hcHBlbmRDaGlsZCh0b0RvRGl2KTtcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==