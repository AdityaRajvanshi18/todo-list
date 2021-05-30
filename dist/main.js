/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _website__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./website */ \"./src/website.js\");\n//load homepage on website initialisation\n\n(0,_website__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n//THIS IS LOGIC FOR OPENING OPTIONS TAB\n/* const todayTab = document.getElementById(\"project-title\")\nconst optionsColumn =  document.getElementById(\"optionsbar\");\nconst content = document.getElementById(\"content\");\nconst main = document.getElementById(\"main\");\n\nfunction createOptionsColumn(){\n    console.log(\"works\");\n    content.style.gridTemplateColumns = \"20em 1fr 1fr\";\n    \n    console.log(content.style.gridTemplateColumns);\n    optionsColumn.style.display = \"inline\";\n}\n\ntodayTab.addEventListener(\"click\", createOptionsColumn); */\n\n//# sourceURL=webpack://todo-list/./src/index.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n    constructor(name){\n        this.name = name;\n    }\n\n    setName(name){\n        this.name = name;\n    }\n\n    getName() {\n        return this.name;\n    }\n}\n\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/projectList.js":
/*!****************************!*\
  !*** ./src/projectList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ projectList)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\n\nclass projectList{\n    constructor() {\n        this.projects = [];\n        this.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__.default(\"Today\"));\n        this.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__.default(\"Important\"));\n    }\n\n    setProjects(projects){\n        this.projects = projects;\n    }\n\n    getProjects() {\n        return this.projects;\n    }\n\n    getProject(projectName) {\n        return this.projects.find((project) => project.getName() === projectName);\n    }\n    \n    contains(projectName) {\n        return this.projects.some((project) => project.getName() === projectName);\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/projectList.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectList */ \"./src/projectList.js\");\n\n\n\n//create a list of projects\n//IMPORTANT projectsList is the VARIABLE and projectList is the OBJECT\nclass Storage{\n    static getProjectsList(){\n        const projectsList = Object.assign(new _projectList__WEBPACK_IMPORTED_MODULE_1__.default());\n\n        projectsList.setProjects(projectsList.getProjects().map((project) => Object.assign(new _project__WEBPACK_IMPORTED_MODULE_0__.default(), project)),);\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/storage.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n    constructor(name, dueDate = \"No date\"){\n        this.name = name;\n        this.dueDate = dueDate;\n    }\n    setName(name) {\n        this.name = name;\n    }\n    \n    getName() {\n        return this.name;\n    }\n    \n    setDate(dueDate) {\n       this.dueDate = dueDate;\n    }\n    \n    getDate() {\n        return this.dueDate;\n    }\n    \n    getDateFormatted() {\n        const day = this.dueDate.split('/')[0];\n        const month = this.dueDate.split('/')[1];\n        const year = this.dueDate.split('/')[2];\n        return `${month}/${day}/${year}`;\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/task.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n\n\nfunction createProjects(){\n    const projectsBar = document.createElement(\"div\");\n    projectsBar.id = \"leftbar\";\n\n    \n\n\n    return projectsBar;\n}\n\n\n\nfunction initializeWebsite(){\n    const content = document.getElementById(\"content\");\n    content.appendChild(createProjects());\n    content.appendChild(createMain());\n    content.appendChild(createOptions());\n    console.log(content);\n    loadPage();\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initializeWebsite);\n\n{/* \n<div id=\"leftbar\">\n    <div id=\"today\">\n        Today\n    </div>\n</div>\n<div id=\"main\">\n    <div id=\"project-title\">\n        Project title\n    </div>\n</div>\n<div id=\"optionsbar\">\n    <div id=\"options-container\">Options</div>\n</div> */}\n\n//# sourceURL=webpack://todo-list/./src/website.js?");

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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;