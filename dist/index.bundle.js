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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUU7O0FBRW5FO0FBQ0E7QUFDQTtBQUNPOztBQUVQO0FBQ0E7OztBQUdBO0FBQ087QUFDUCxnQkFBZ0IsRUFBRSwwREFBbUIsRUFBRTtBQUN2QztBQUNBLHdCQUF3QixtREFBWTtBQUNwQztBQUNBO0FBQ0EsMEJBQTBCLHNEQUFXLENBQUMsbURBQVksS0FBSyxnREFBUztBQUNoRTtBQUNBLG9CQUFvQix3QkFBd0I7QUFDNUM7QUFDQTtBQUNBLGFBQWEseUJBQXlCO0FBQ3RDLGFBQWEsdUJBQXVCO0FBQ3BDLGFBQWEsMEJBQTBCO0FBQ3ZDO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFLHdEQUFpQjtBQUNuQixjQUFjLG1EQUFZO0FBQzFCO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEQ0QztBQUM3QyxDQUFpRDs7QUFFakQ7QUFDQTs7QUFFQSxvREFBYzs7O0FBR2Q7QUFDQSw4QkFBOEI7QUFDOUIsVUFBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRSwyREFBeUI7QUFDM0IsQ0FBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7Ozs7OztVQ3pDQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7VUVOQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3RvcC10by1kby1saXN0Ly4vc3JjL2RvbS5qcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b3AtdG8tZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvcC10by1kby1saXN0L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vdG9wLXRvLWRvLWxpc3Qvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3RvcC10by1kby1saXN0L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0YXNrQXJyYXksIGZpbHRlclRhc2tzLCBwcm9qZWN0QXJyYXksICB9IGZyb20gXCIuL2luZGV4LmpzXCJcblxuY29uc3Qgc2lkZWJhclByb2plY3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzaWRlYmFyUHJvamVjdHNcIilcbmNvbnN0IHRhc2tTcGFjZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza1NwYWNlXCIpO1xuY29uc3QgYm9keSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYm9keVwiKTtcbmV4cG9ydCBjb25zdCB0YXNrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0Zvcm1cIik7XG5cbi8vIEZ1bmN0aW9uIHRoYXQgZmlsdGVycyB0YXNrQXJyYXkgYWNjb3JkaW5nIHRvIHRoZSBQcm9qZWN0ICh0byBiZSB1c2VkIGluIHRoZSBsZWZ0IGNvbHVtbilcbi8vIERPTUVMRU1FTlQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCkgPT4gdGVzdEZ1bmN0aW9uKFwiSmF2YXNjcmlwdFwiLCB0YXNrQXJyYXkpKTtcblxuXG4vLyBSZXRyaWV2ZXMgYWxsIHRoZSBQcm9qZWN0cyBmcm9tIFRhc2tBcnJheSBhbmQgc2hvdyB0aGVtIGluIHNpZGViYXJcbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRQcm9qZWN0cygpIHtcbiAgZm9yIChsZXQgaT0wOyBpPHByb2plY3RBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBwcm9qZWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgcHJvamVjdC5pbm5lckhUTUwgPSBwcm9qZWN0QXJyYXlbaV07XG4gICAgcHJvamVjdC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RCdG5cIik7XG4gICAgcHJvamVjdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICAgICAgbGV0IGZpbHRlcmVkQXJyYXkgPSBmaWx0ZXJUYXNrcyhwcm9qZWN0QXJyYXlbaV0sIHRhc2tBcnJheSk7XG4gICAgICB0YXNrU3BhY2UuaW5uZXJIVE1MID0gXCJcIjtcbiAgICAgIGZvciAobGV0IGk9MDsgaTxmaWx0ZXJlZEFycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgICB0YXNrU3BhY2UuaW5uZXJIVE1MICs9IFxuICAgICAgICBgPGRpdiBpZD1cInRhc2tEaXZcIj5cbiAgICAgICAgPHA+JHtmaWx0ZXJlZEFycmF5W2ldLmR1ZURhdGV9PC9wPlxuICAgICAgICA8cD4ke2ZpbHRlcmVkQXJyYXlbaV0udGl0bGV9PC9wPlxuICAgICAgICA8cD4ke2ZpbHRlcmVkQXJyYXlbaV0ucHJpb3JpdHl9PC9wPmBcbiAgICAgIH1cbiAgICB9KVxuICAgIHNpZGViYXJQcm9qZWN0cy5hcHBlbmRDaGlsZChwcm9qZWN0KVxuICAgIHRhc2tGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiIDtcbiAgfVxufTtcblxuY29uc3QgdGVzdEJ0bjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlc3RCdG4yXCIpO1xudGVzdEJ0bjIuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgcHJvamVjdEFycmF5LnB1c2gocHJvbXB0KFwiUHJvamVjdCBuYW1lIDpcIikpXG4gIGNvbnNvbGUubG9nKHByb2plY3RBcnJheSk7XG4gIHNpZGViYXJQcm9qZWN0cy5pbm5lckhUTUwgPSBcIlwiO1xuICBhcHBlbmRQcm9qZWN0cygpO1xufSk7XG5cbi8vU2hvdyB0YXNrcyBvbiB0aGUgcGFnZSA6IFxuY29uc3QgdGVzdEJ0bjEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlc3RCdG4xXCIpXG4vLyB0ZXN0QnRuMS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKVxuXG4vL1Nob3dGb3JtIG9uIHRoZSBwYWdlIGR5bmFtaWNhbGx5O1xudGVzdEJ0bjEuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgdGFza0Zvcm0uc3R5bGUudmlzaWJpbGl0eSA9IFwidmlzaWJsZVwiIDtcbn0pXG5cblxuXG5cbiIsImV4cG9ydCB7dGFza0FycmF5LCBwcm9qZWN0QXJyYXksIGZpbHRlclRhc2tzfVxuaW1wb3J0IHsgYXBwZW5kUHJvamVjdHMsIHRhc2tGb3JtIH0gZnJvbSBcIi4vZG9tXCI7XG5cbmxldCB0YXNrQXJyYXkgPSBbXTtcbmxldCBwcm9qZWN0QXJyYXkgPSBbXCJEZWZhdWx0XCJdO1xuXG5hcHBlbmRQcm9qZWN0cygpXG5cblxuZnVuY3Rpb24gY3JlYXRlVGFzayh0aXRsZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBwcm9qZWN0KSB7XG4gIGNvbnN0IHRlc3Rsb2cgPSBmdW5jdGlvbigpIHtjb25zb2xlLmxvZyhcIlRlc3Rsb2cgaW5zaWRlIHRoZSB0YXNrIHdvcmtzXCIpfTtcbiAgcmV0dXJuIHt0ZXN0bG9nLCB0aXRsZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5LCBwcm9qZWN0fVxufVxuXG4vLyBGaWx0ZXIgdGhlIHRhc2sgYXJyYXkgYWNjb3JkaW5nIHRvIHByb2plY3QgXG5mdW5jdGlvbiBmaWx0ZXJUYXNrcyhwcm9qZWN0LCBhcnJheSkge1xuICBjb25zdCBmaWx0ZXJlZFRhc2tBcnJheSA9IGFycmF5LmZpbHRlcih0YXNrID0+IHRhc2sucHJvamVjdCA9PT0gcHJvamVjdClcbiAgcmV0dXJuIGZpbHRlcmVkVGFza0FycmF5XG59XG5cbmxldCBzYXZlVGFza0J0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2F2ZVRhc2tCdG5cIik7XG5zYXZlVGFza0J0bi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xuICBsZXQgbmV3Rm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGFza0Zvcm1cIik7XG4gIGxldCBuZXdUYXNrID0gY3JlYXRlVGFzayhuZXdGb3JtLnRpdGxlLnZhbHVlLCBuZXdGb3JtLmR1ZURhdGUudmFsdWUsIG5ld0Zvcm0uZGVzY3JpcHRpb24udmFsdWUsIG5ld0Zvcm0ucHJpb3JpdHkudmFsdWUsIG5ld0Zvcm0ucHJvamVjdC52YWx1ZSlcbiAgdGFza0FycmF5LnB1c2gobmV3VGFzayk7XG4gIGNvbnNvbGUubG9nKHRhc2tBcnJheSk7XG4gIHRhc2tGb3JtLnN0eWxlLnZpc2liaWxpdHkgPSBcImhpZGRlblwiIDtcbn0pXG5cbmNvbnNvbGUubG9nKFwidGVzdFwiKVxuXG5jb25zdCBjcmVhdGVUb0RvTGlzdCA9ICh0aXRsZSkgPT4ge1xuICBjb25zdCByZW1vdmUgPSAoKSA9PiB0b0RvQXJyYXkuc2xpY2U7XG4gIGNvbnN0IG1vdmUgPSAoKSA9PiB0b0RvQXJyYXkuc3BsaWNlO1xuICBjb25zdCBhZGRUYXNrID0gZnVuY3Rpb24oKSB7XG4gICAgbGV0IHByb21wdFRhc2tOYW1lID0gcHJvbXB0KFwiV2hhdCdzIHRoZSB0YXNrIG5hbWUgP1wiKTtcbiAgICBsZXQgdGFzayA9IGNyZWF0ZVRhc2socHJvbXB0VGFza05hbWUpO1xuICAgIHRhc2tBcnJheS5wdXNoKHRhc2spO1xuICAgIGNvbnNvbGUubG9nKHRhc2tBcnJheSk7XG4gIH1cbiAgcmV0dXJuIHtyZW1vdmUsIG1vdmUsIGFkZFRhc2ssIHRpdGxlfTtcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==