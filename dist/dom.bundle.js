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
/* harmony export */   "taskForm": () => (/* binding */ taskForm)
/* harmony export */ });
/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ "./src/index.js");


const sidebarProjects = document.getElementById("sidebarProjects")
const taskSpace = document.getElementById("taskSpace");
const body = document.getElementById("body");
const taskForm = document.getElementById("taskForm");

// Function that filters taskArray according to the Project (to be used in the left column)
// DOMELEMENT.addEventListener("click",() => testFunction("Javascript", taskArray));


// Retrieves all the Projects from TaskArray and show them in sidebar
function appendProjects() {
  for (let i=0; i<_index_js__WEBPACK_IMPORTED_MODULE_0__.projectArray.length; i++) {
    let project = document.createElement('button');
    project.innerHTML = _index_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[i];
    project.setAttribute("id", "projectBtn");
    project.addEventListener("click", () => {
      let filteredArray = (0,_index_js__WEBPACK_IMPORTED_MODULE_0__.filterTasks)(_index_js__WEBPACK_IMPORTED_MODULE_0__.projectArray[i], _index_js__WEBPACK_IMPORTED_MODULE_0__.taskArray);
      taskSpace.innerHTML = "";
      for (let i=0; i<filteredArray.length; i++) {
      taskSpace.innerHTML += 
        `<div id="taskDiv">
        <p>${filteredArray[i].dueDate}</p>
        <p>${filteredArray[i].title}</p>
        <p>${filteredArray[i].priority}</p>`
      }
    })
    sidebarProjects.appendChild(project)
    taskForm.style.visibility = "hidden" ;
  }
};

const testBtn2 = document.getElementById("testBtn2");
testBtn2.addEventListener("click", () => {
  _index_js__WEBPACK_IMPORTED_MODULE_0__.projectArray.push(prompt("Project name :"))
  console.log(_index_js__WEBPACK_IMPORTED_MODULE_0__.projectArray);
  sidebarProjects.innerHTML = "";
  appendProjects();
});

//Show tasks on the page : 
const testBtn1 = document.getElementById("testBtn1")
// testBtn1.addEventListener("click", )

//ShowForm on the page dynamically;
testBtn1.addEventListener("click", () => {
  taskForm.style.visibility = "visible" ;
})






/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterTasks": () => (/* binding */ filterTasks),
/* harmony export */   "projectArray": () => (/* binding */ projectArray),
/* harmony export */   "taskArray": () => (/* binding */ taskArray)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/dom.js");

;

let taskArray = [];
let projectArray = ["Default"];

(0,_dom__WEBPACK_IMPORTED_MODULE_0__.appendProjects)()


function createTask(title, dueDate, description, priority, project) {
  const testlog = function() {console.log("Testlog inside the task works")};
  return {testlog, title, dueDate, description, priority, project}
}

// Filter the task array according to project 
function filterTasks(project, array) {
  const filteredTaskArray = array.filter(task => task.project === project)
  return filteredTaskArray
}

let saveTaskBtn = document.getElementById("saveTaskBtn");
saveTaskBtn.addEventListener("click", () => {
  let newForm = document.getElementById("taskForm");
  let newTask = createTask(newForm.title.value, newForm.dueDate.value, newForm.description.value, newForm.priority.value, newForm.project.value)
  taskArray.push(newTask);
  console.log(taskArray);
  _dom__WEBPACK_IMPORTED_MODULE_0__.taskForm.style.visibility = "hidden" ;
})

console.log("test")

const createToDoList = (title) => {
  const remove = () => toDoArray.slice;
  const move = () => toDoArray.splice;
  const addTask = function() {
    let promptTaskName = prompt("What's the task name ?");
    let task = createTask(promptTaskName);
    taskArray.push(task);
    console.log(taskArray);
  }
  return {remove, move, addTask, title};
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQW1FOztBQUVuRTtBQUNBO0FBQ0E7QUFDTzs7QUFFUDtBQUNBOzs7QUFHQTtBQUNPO0FBQ1AsZ0JBQWdCLEVBQUUsMERBQW1CLEVBQUU7QUFDdkM7QUFDQSx3QkFBd0IsbURBQVk7QUFDcEM7QUFDQTtBQUNBLDBCQUEwQixzREFBVyxDQUFDLG1EQUFZLEtBQUssZ0RBQVM7QUFDaEU7QUFDQSxvQkFBb0Isd0JBQXdCO0FBQzVDO0FBQ0E7QUFDQSxhQUFhLHlCQUF5QjtBQUN0QyxhQUFhLHVCQUF1QjtBQUNwQyxhQUFhLDBCQUEwQjtBQUN2QztBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSx3REFBaUI7QUFDbkIsY0FBYyxtREFBWTtBQUMxQjtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hENEM7QUFDN0MsQ0FBaUQ7O0FBRWpEO0FBQ0E7O0FBRUEsb0RBQWM7OztBQUdkO0FBQ0EsOEJBQThCO0FBQzlCLFVBQVU7QUFDVjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkRBQXlCO0FBQzNCLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOzs7Ozs7VUN6Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1VFTkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC8uL3NyYy9kb20uanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3QvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvcC10by1kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3RvcC10by1kby1saXN0L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdGFza0FycmF5LCBmaWx0ZXJUYXNrcywgcHJvamVjdEFycmF5LCAgfSBmcm9tIFwiLi9pbmRleC5qc1wiXG5cbmNvbnN0IHNpZGViYXJQcm9qZWN0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2lkZWJhclByb2plY3RzXCIpXG5jb25zdCB0YXNrU3BhY2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tTcGFjZVwiKTtcbmNvbnN0IGJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImJvZHlcIik7XG5leHBvcnQgY29uc3QgdGFza0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tGb3JtXCIpO1xuXG4vLyBGdW5jdGlvbiB0aGF0IGZpbHRlcnMgdGFza0FycmF5IGFjY29yZGluZyB0byB0aGUgUHJvamVjdCAodG8gYmUgdXNlZCBpbiB0aGUgbGVmdCBjb2x1bW4pXG4vLyBET01FTEVNRU5ULmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCgpID0+IHRlc3RGdW5jdGlvbihcIkphdmFzY3JpcHRcIiwgdGFza0FycmF5KSk7XG5cblxuLy8gUmV0cmlldmVzIGFsbCB0aGUgUHJvamVjdHMgZnJvbSBUYXNrQXJyYXkgYW5kIHNob3cgdGhlbSBpbiBzaWRlYmFyXG5leHBvcnQgZnVuY3Rpb24gYXBwZW5kUHJvamVjdHMoKSB7XG4gIGZvciAobGV0IGk9MDsgaTxwcm9qZWN0QXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBsZXQgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHByb2plY3QuaW5uZXJIVE1MID0gcHJvamVjdEFycmF5W2ldO1xuICAgIHByb2plY3Quc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0QnRuXCIpO1xuICAgIHByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgIGxldCBmaWx0ZXJlZEFycmF5ID0gZmlsdGVyVGFza3MocHJvamVjdEFycmF5W2ldLCB0YXNrQXJyYXkpO1xuICAgICAgdGFza1NwYWNlLmlubmVySFRNTCA9IFwiXCI7XG4gICAgICBmb3IgKGxldCBpPTA7IGk8ZmlsdGVyZWRBcnJheS5sZW5ndGg7IGkrKykge1xuICAgICAgdGFza1NwYWNlLmlubmVySFRNTCArPSBcbiAgICAgICAgYDxkaXYgaWQ9XCJ0YXNrRGl2XCI+XG4gICAgICAgIDxwPiR7ZmlsdGVyZWRBcnJheVtpXS5kdWVEYXRlfTwvcD5cbiAgICAgICAgPHA+JHtmaWx0ZXJlZEFycmF5W2ldLnRpdGxlfTwvcD5cbiAgICAgICAgPHA+JHtmaWx0ZXJlZEFycmF5W2ldLnByaW9yaXR5fTwvcD5gXG4gICAgICB9XG4gICAgfSlcbiAgICBzaWRlYmFyUHJvamVjdHMuYXBwZW5kQ2hpbGQocHJvamVjdClcbiAgICB0YXNrRm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIiA7XG4gIH1cbn07XG5cbmNvbnN0IHRlc3RCdG4yID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXN0QnRuMlwiKTtcbnRlc3RCdG4yLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHByb2plY3RBcnJheS5wdXNoKHByb21wdChcIlByb2plY3QgbmFtZSA6XCIpKVxuICBjb25zb2xlLmxvZyhwcm9qZWN0QXJyYXkpO1xuICBzaWRlYmFyUHJvamVjdHMuaW5uZXJIVE1MID0gXCJcIjtcbiAgYXBwZW5kUHJvamVjdHMoKTtcbn0pO1xuXG4vL1Nob3cgdGFza3Mgb24gdGhlIHBhZ2UgOiBcbmNvbnN0IHRlc3RCdG4xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0ZXN0QnRuMVwiKVxuLy8gdGVzdEJ0bjEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIClcblxuLy9TaG93Rm9ybSBvbiB0aGUgcGFnZSBkeW5hbWljYWxseTtcbnRlc3RCdG4xLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHRhc2tGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcInZpc2libGVcIiA7XG59KVxuXG5cblxuXG4iLCJleHBvcnQge3Rhc2tBcnJheSwgcHJvamVjdEFycmF5LCBmaWx0ZXJUYXNrc31cbmltcG9ydCB7IGFwcGVuZFByb2plY3RzLCB0YXNrRm9ybSB9IGZyb20gXCIuL2RvbVwiO1xuXG5sZXQgdGFza0FycmF5ID0gW107XG5sZXQgcHJvamVjdEFycmF5ID0gW1wiRGVmYXVsdFwiXTtcblxuYXBwZW5kUHJvamVjdHMoKVxuXG5cbmZ1bmN0aW9uIGNyZWF0ZVRhc2sodGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgcHJvamVjdCkge1xuICBjb25zdCB0ZXN0bG9nID0gZnVuY3Rpb24oKSB7Y29uc29sZS5sb2coXCJUZXN0bG9nIGluc2lkZSB0aGUgdGFzayB3b3Jrc1wiKX07XG4gIHJldHVybiB7dGVzdGxvZywgdGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgcHJvamVjdH1cbn1cblxuLy8gRmlsdGVyIHRoZSB0YXNrIGFycmF5IGFjY29yZGluZyB0byBwcm9qZWN0IFxuZnVuY3Rpb24gZmlsdGVyVGFza3MocHJvamVjdCwgYXJyYXkpIHtcbiAgY29uc3QgZmlsdGVyZWRUYXNrQXJyYXkgPSBhcnJheS5maWx0ZXIodGFzayA9PiB0YXNrLnByb2plY3QgPT09IHByb2plY3QpXG4gIHJldHVybiBmaWx0ZXJlZFRhc2tBcnJheVxufVxuXG5sZXQgc2F2ZVRhc2tCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNhdmVUYXNrQnRuXCIpO1xuc2F2ZVRhc2tCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgbGV0IG5ld0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRhc2tGb3JtXCIpO1xuICBsZXQgbmV3VGFzayA9IGNyZWF0ZVRhc2sobmV3Rm9ybS50aXRsZS52YWx1ZSwgbmV3Rm9ybS5kdWVEYXRlLnZhbHVlLCBuZXdGb3JtLmRlc2NyaXB0aW9uLnZhbHVlLCBuZXdGb3JtLnByaW9yaXR5LnZhbHVlLCBuZXdGb3JtLnByb2plY3QudmFsdWUpXG4gIHRhc2tBcnJheS5wdXNoKG5ld1Rhc2spO1xuICBjb25zb2xlLmxvZyh0YXNrQXJyYXkpO1xuICB0YXNrRm9ybS5zdHlsZS52aXNpYmlsaXR5ID0gXCJoaWRkZW5cIiA7XG59KVxuXG5jb25zb2xlLmxvZyhcInRlc3RcIilcblxuY29uc3QgY3JlYXRlVG9Eb0xpc3QgPSAodGl0bGUpID0+IHtcbiAgY29uc3QgcmVtb3ZlID0gKCkgPT4gdG9Eb0FycmF5LnNsaWNlO1xuICBjb25zdCBtb3ZlID0gKCkgPT4gdG9Eb0FycmF5LnNwbGljZTtcbiAgY29uc3QgYWRkVGFzayA9IGZ1bmN0aW9uKCkge1xuICAgIGxldCBwcm9tcHRUYXNrTmFtZSA9IHByb21wdChcIldoYXQncyB0aGUgdGFzayBuYW1lID9cIik7XG4gICAgbGV0IHRhc2sgPSBjcmVhdGVUYXNrKHByb21wdFRhc2tOYW1lKTtcbiAgICB0YXNrQXJyYXkucHVzaCh0YXNrKTtcbiAgICBjb25zb2xlLmxvZyh0YXNrQXJyYXkpO1xuICB9XG4gIHJldHVybiB7cmVtb3ZlLCBtb3ZlLCBhZGRUYXNrLCB0aXRsZX07XG59OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvZG9tLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9