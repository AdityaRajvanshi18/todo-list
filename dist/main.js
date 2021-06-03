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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Project)\n/* harmony export */ });\nclass Project {\n    constructor(name){\n        this.name = name;\n        this.tasks = [];\n    }\n\n    setName(name){\n        this.name = name;\n    }\n\n    getName() {\n        return this.name;\n    }\n\n   /*  addTask(name){\n        this.task.push(new Task(name))\n    } */\n\n    setTasks(tasks) {\n        this.tasks = tasks;\n    }\n    \n    getAllTasks() {\n        return this.tasks;\n    }\n    \n    getTask(taskName) {\n        return this.tasks.find((task) => task.getName() === taskName);\n    }\n    \n    contains(taskName) {\n        return this.tasks.some((task) => task.getName() === taskName);\n    }\n    \n    addTask(task) {\n        if (this.tasks.indexOf(task) > 0) return;\n        this.tasks.push(task);\n    }\n    \n}\n\n\n//# sourceURL=webpack://todo-list/./src/project.js?");

/***/ }),

/***/ "./src/projectList.js":
/*!****************************!*\
  !*** ./src/projectList.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ projectList)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\n\nclass projectList{\n    constructor() {\n        this.projects = [];\n        this.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__.default(\"Inbox\"));\n        this.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__.default(\"Important\"));\n        this.projectNum = 2;\n    }\n\n    setProjects(projects){\n        this.projects = projects;\n        this.projectNum++;\n    }\n\n    addProject(name){\n        this.projects.push(new _project__WEBPACK_IMPORTED_MODULE_0__.default(name));\n        this.projectNum++;\n    }\n\n    popProject(){\n        this.projects.pop();\n    }\n\n    removeProject(index){\n        return this.projects.splice(index, 1);\n    }\n\n    getProjectsNum(){\n        return this.projectsNum;\n    }\n\n    getAllProjects() {\n        return this.projects;\n    }\n\n    getProject(projectName) {\n        return this.projects.find((project) => project.getName() === projectName);\n    }\n    \n    contains(projectName) {\n        return this.projects.some((project) => project.getName() === projectName);\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/projectList.js?");

/***/ }),

/***/ "./src/storage.js":
/*!************************!*\
  !*** ./src/storage.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Storage)\n/* harmony export */ });\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./projectList */ \"./src/projectList.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\n\n\n//create a list of projects\n//IMPORTANT projectsList is the VARIABLE and projectList is the OBJECT\nclass Storage{\n    static getProjectsList(){\n        const projectsList = Object.assign(new _projectList__WEBPACK_IMPORTED_MODULE_1__.default());\n\n        projectsList.setProjects(\n            projectsList\n            .getProjects()\n            .map((project) => Object.assign(new _project__WEBPACK_IMPORTED_MODULE_0__.default(), project)),\n        );\n\n        projectsList.getProjects().forEach((project) => project.setTasks(\n            project.getTasks().map((task) => Object.assign(new _task__WEBPACK_IMPORTED_MODULE_2__.default(), task)),\n            ),\n        );\n        return projectsList;\n    }\n}\n\n//# sourceURL=webpack://todo-list/./src/storage.js?");

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Task)\n/* harmony export */ });\nclass Task {\n    constructor(name, dueDate = \"\", ){\n        this.name = name;\n        this.dueDate = dueDate;\n        this.isComplete = false;\n        this.isImportant = false;\n    }\n    setName(name) {\n        this.name = name;\n    }\n    \n    getName() {\n        return this.name;\n    }\n\n    setDate(dueDate) {\n        this.dueDate = dueDate;\n     }\n     \n     getDate() {\n         return this.dueDate;\n     }\n     \n     getDateFormatted() {\n         const day = this.dueDate.split('/')[0];\n         const month = this.dueDate.split('/')[1];\n         const year = this.dueDate.split('/')[2];\n         return `${month}/${day}/${year}`;\n     }\n\n    getComplete(){\n        return this.isComplete;\n    }\n\n    setCompleteTrue(){\n        return this.isComplete = true;\n    }\n\n    setCompleteFalse(){\n        return this.isComplete = false;\n    }\n\n    getImportant(){\n        return this.isImportant;\n    }\n\n    setImportantTrue(){\n        return this.isImportant = true;\n    }\n\n    setImportantFalse(){\n        return this.isImportant = false;\n    }\n    \n    \n}\n\n//# sourceURL=webpack://todo-list/./src/task.js?");

/***/ }),

/***/ "./src/website.js":
/*!************************!*\
  !*** ./src/website.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./storage */ \"./src/storage.js\");\n/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ \"./src/project.js\");\n/* harmony import */ var _projectList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./projectList */ \"./src/projectList.js\");\n/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task */ \"./src/task.js\");\n\n\n\n\n\n\nconst listOfProjects = new _projectList__WEBPACK_IMPORTED_MODULE_2__.default;\nlet currProjectName = \"Inbox\";\nlet currProject = listOfProjects.getProject(currProjectName);\nlet tempTask = new _task__WEBPACK_IMPORTED_MODULE_3__.default(\"test1\", \"soon\");\ntempTask.setCompleteTrue();\nlet tempTask2 = new _task__WEBPACK_IMPORTED_MODULE_3__.default(\"test2\", \"later\");\nlet tempTask3 = new _task__WEBPACK_IMPORTED_MODULE_3__.default(\"test3\");\ncurrProject.addTask(tempTask);\ncurrProject.addTask(tempTask2);\ncurrProject.addTask(tempTask3);\n\n\nfunction createNewProject(name){\n    if(name === \"\"){\n        name = \"Untitled Project\";\n        if(name === listOfProjects.contains(name)){\n            console.log(\"duplicate exists\");\n            return;\n        }\n        \n    }\n\n    \n    listOfProjects.addProject(name);\n\n}\n\n//function that takes a project and creates a DOM element\nfunction renderProject(project){\n\n    const projectContainer = document.createElement(\"div\");\n    const projectImgContainer = document.createElement(\"div\");\n    const projectImg = document.createElement(\"img\");\n    const projectName = document.createElement(\"div\");\n\n    projectContainer.classList.add(\"project-container\");\n    projectImgContainer.classList.add(\"project-img-container\");\n    projectImg.classList.add(\"project-img\");\n    projectName.classList.add(\"project-title\");\n\n    projectImg.src = \"img/list.png\";\n    projectName.textContent = project.getName();\n\n    projectImgContainer.appendChild(projectImg);\n    projectContainer.appendChild(projectImgContainer);\n    projectContainer.appendChild(projectName);\n\n    return projectContainer;\n}\n\nfunction renderProjectDefault(project){\n    const projectContainer = document.createElement(\"div\");\n    const projectImgContainer = document.createElement(\"div\");\n    const projectImg = document.createElement(\"img\");\n    const projectName = document.createElement(\"div\");\n\n    projectContainer.classList.add(\"project-container\");\n    projectImgContainer.classList.add(\"project-img-container\");\n    projectImg.classList.add(\"project-img\");\n    projectName.classList.add(\"project-title\");\n\n    if(project.getName() === \"Inbox\"){\n        projectImg.src = \"img/inbox.png\";\n        projectName.textContent = project.getName();\n    }\n    else if (project.getName() === \"Important\"){\n        projectImg.src = \"img/star.png\";\n        projectName.textContent = project.getName();\n    }\n    projectImgContainer.appendChild(projectImg);\n    projectContainer.appendChild(projectImgContainer);\n    projectContainer.appendChild(projectName);\n\n    return projectContainer;\n}\n\nfunction renderProjectManager(project){\n    if (project.getName() === \"Inbox\" || project.getName() === \"Important\"){\n        return renderProjectDefault(project);\n    }\n    else return renderProject(project);\n}\n\n//Should sit at the bottom of leftbar and be called at the end of the re-draw\nfunction addNewProject(){\n    const newProjectContainer = document.createElement(\"div\");\n    newProjectContainer.classList.add(\"new-project-container\");\n\n    const newProjectImg = document.createElement(\"img\");\n    newProjectImg.src = \"img/plus.png\";\n    newProjectImg.classList.add(\"project-img\");\n\n    const projectInputField = document.createElement(\"input\");\n    projectInputField.classList.add(\"new-project-field\");\n    projectInputField.id = \"new-project-name\";\n    projectInputField.setAttribute(\"type\", \"text\");\n    projectInputField.setAttribute(\"placeholder\", \"Add Project\");\n\n    const newProjectConfirmContainer = document.createElement(\"div\");\n    const newProjectConfirm = document.createElement(\"img\");\n    newProjectConfirmContainer.classList.add(\"project-confirm-container\");\n    newProjectConfirmContainer.id = \"confirm\";\n    newProjectConfirm.classList.add(\"project-img-confirm\");\n    newProjectConfirm.src = \"img/tick.png\"\n\n    newProjectConfirmContainer.appendChild(newProjectConfirm);\n    \n    newProjectContainer.appendChild(newProjectImg);\n    newProjectContainer.appendChild(projectInputField);\n    newProjectContainer.appendChild(newProjectConfirmContainer);\n\n    return newProjectContainer;\n}\n\nfunction newProjectManager(){\n    //add new project to project list\n    let tempName = document.getElementById(\"new-project-name\");\n    createNewProject(tempName.value);\n\n    //clear the projects list tab\n    const projects = document.querySelectorAll(\".project-container\");\n    projects.forEach(e => e.parentNode.removeChild(e));\n\n    const removalField = document.querySelectorAll(\".new-project-container\");\n    removalField.forEach(e => e.parentNode.removeChild(e));\n    \n\n    \n    //call loadProjects\n    loadProjects();\n\n}\n\nfunction loadMainManager(project){\n    //set current project to the project clicked on\n    currProjectName = project.target.textContent;\n    currProject = listOfProjects.getProject(currProjectName);\n    //console.log(currProject);\n    \n    //clear task page\n    clearTaskDrawing();\n\n    //loadMainDefault();\n    loadMainDefault();\n}\n\nfunction loadProjects(){\n    //const listOfProjects = new projectList;\n    const projectsBar = document.getElementById(\"leftbar\")\n    const projectListDOM = document.createElement(\"div\");\n    projectListDOM.classList.add(\"project-list\");\n\n    listOfProjects.getAllProjects().forEach((project)=> projectListDOM.appendChild(renderProjectManager(project)));\n\n    projectListDOM.appendChild(addNewProject());\n    projectsBar.appendChild(projectListDOM);\n\n    const projectConfirmButton = document.getElementById(\"confirm\");\n    projectConfirmButton.addEventListener(\"click\", newProjectManager);\n\n    const projectToLoad = document.querySelectorAll(\".project-container\");\n    //console.log(projectToLoad);\n    projectToLoad.forEach((project) => project.addEventListener(\"click\", loadMainManager));\n    //on click call function that wipes all DOM on project and then \n    //draws the new list of projects and opens the main on the newest list \n\n    return projectsBar;\n} \n\n/* LOAD MAIN STUFF HERE */\n\nfunction updateTaskImportant(task){\n    console.log(task);\n}\n\n\nfunction renderTasks(task){\n    const taskContainer = document.createElement(\"div\");\n    const taskCheckContainer = document.createElement(\"div\");\n    const taskCheck = document.createElement(\"img\");\n    const taskName = document.createElement(\"div\");\n    const taskDate = document.createElement(\"div\");\n    const taskStar = document.createElement(\"img\");\n    const taskLeft = document.createElement(\"div\");\n    const taskRight = document.createElement(\"div\");\n\n    taskContainer.classList.add(\"task-container\");\n    taskCheckContainer.classList.add(\"task-check-container\");\n    taskCheck.classList.add(\"task-check\");\n    taskName.classList.add(\"task-name\");\n    taskDate.classList.add(\"task-date\");\n    taskStar.classList.add(\"task-star\");\n    taskLeft.classList.add(\"task-left\");\n    taskRight.classList.add(\"task-right\");\n    \n    \n    taskCheck.setAttribute(\"data-task\", task.getName());\n    taskCheck.id = \"checkbox-incomplete\";\n    \n    taskCheck.src = \"img/incomplete.png\"\n    taskName.textContent = task.getName();\n    taskDate.textContent = task.getDate();\n    if(!task.isImportant){\n        taskStar.src = \"img/star.png\";\n    }\n    else{\n        taskStar.src = \"img/starblue.png\";\n    }\n    \n    \n    taskCheckContainer.appendChild(taskCheck);\n    taskLeft.appendChild(taskCheckContainer);\n    taskLeft.appendChild(taskName);\n    taskRight.appendChild(taskDate);\n    taskRight.appendChild(taskStar);\n\n    taskContainer.appendChild(taskLeft);\n    taskContainer.appendChild(taskRight);\n\n    return taskContainer;\n}\n\nfunction renderTasksComplete(task){\n\n    const taskContainer = document.createElement(\"div\");\n    const taskCheckContainer = document.createElement(\"div\");\n    const taskCheck = document.createElement(\"img\");\n    const taskName = document.createElement(\"div\");\n    const taskDate = document.createElement(\"div\");\n    const taskStar = document.createElement(\"img\");\n    const taskLeft = document.createElement(\"div\");\n    const taskRight = document.createElement(\"div\");\n\n    taskContainer.classList.add(\"task-container\");\n    taskCheckContainer.classList.add(\"task-check-container\");\n    taskCheck.classList.add(\"task-check\");\n    taskName.classList.add(\"task-name-completed\");\n    taskDate.classList.add(\"task-date\");\n    taskStar.classList.add(\"task-star\");\n    taskLeft.classList.add(\"task-left\");\n    taskRight.classList.add(\"task-right\");\n    \n    taskCheck.setAttribute(\"data-task\", task.getName());\n    taskCheck.id = \"checkbox-complete\";\n    taskCheck.src = \"img/complete.png\";\n    taskName.textContent = task.getName();\n    taskDate.textContent = task.getDate();\n    if(!task.isImportant){\n        taskStar.src = \"img/star.png\";\n    }\n    else{\n        taskStar.src = \"img/starblue.png\";\n    }\n    \n    taskCheckContainer.appendChild(taskCheck);\n    taskLeft.appendChild(taskCheckContainer);\n    taskLeft.appendChild(taskName);\n    taskRight.appendChild(taskDate);\n    taskRight.appendChild(taskStar);\n\n    taskContainer.appendChild(taskLeft);\n    taskContainer.appendChild(taskRight);\n\n    return taskContainer;\n} \n\nfunction clearTaskDrawing(){\n    const projectTitle = document.querySelectorAll(\".main-title\");\n    projectTitle.forEach(e => e.parentNode.removeChild(e));\n\n    const newtask = document.querySelectorAll(\".task-list\");\n    newtask.forEach(e => e.parentNode.removeChild(e));\n\n    const tasks = document.querySelectorAll(\".new-task\");\n    tasks.forEach(e => e.parentNode.removeChild(e));\n\n    const completedTitle = document.querySelectorAll(\".completed-title\");\n    completedTitle.forEach(e => e.parentNode.removeChild(e));\n\n    const completedTasks = document.querySelectorAll(\".completed-list\");\n    completedTasks.forEach(e => e.parentNode.removeChild(e));\n}\n\nfunction completeManager(task){\n    let taskName = task.target.attributes[\"data-task\"].value;\n    \n    let currTaskObj = currProject.getTask(taskName);\n    if(currTaskObj.getComplete() === false){\n        currTaskObj.setCompleteTrue();\n    }\n    else if(currTaskObj.getComplete() === true){\n        currTaskObj.setCompleteFalse();\n    }\n\n    //emptying the entire task page\n    clearTaskDrawing();\n    \n\n    //redraw\n    loadMainDefault();\n}\n\nfunction newTaskManager(){\n    //add new task to project list\n    let tempName = document.querySelector(\".new-task-input\");\n\n    let newTask = new _task__WEBPACK_IMPORTED_MODULE_3__.default(tempName.value);\n    \n    if(currProject.getName() === \"Important\"){\n        newTask.setImportantTrue();\n    }\n    else{\n        newTask.setImportantFalse();\n    }\n    currProject.addTask(newTask);\n    //clear the tasks list tab\n    clearTaskDrawing();\n    \n    //call loadProjects\n    loadMainDefault();\n\n}\n\nfunction loadMainDefault(){\n    //let currProject = listOfProjects.getProject(\"Inbox\");\n    \n    const mainSection = document.getElementById(\"main\");\n    const mainTitle = document.createElement(\"div\");\n    mainTitle.classList.add(\"main-title\");\n    mainTitle.textContent = currProject.name;\n\n    const addNewTask = document.createElement(\"div\");\n    const addNewTaskImg = document.createElement(\"img\");\n    const addNewTaskInput = document.createElement(\"input\");\n    const addNewTaskTick = document.createElement(\"img\");\n    \n    addNewTask.classList.add(\"new-task\");\n    addNewTaskImg.classList.add(\"new-task-img\");\n    addNewTaskImg.src = \"img/plus.png\";\n    addNewTaskInput.classList.add(\"new-task-input\");\n    addNewTaskInput.setAttribute(\"type\", \"text\");\n    addNewTaskInput.setAttribute(\"placeholder\", \"Add a task\");\n    addNewTaskTick.classList.add(\"new-task-tick\");\n    addNewTaskTick.src = \"img/tick.png\";\n    \n\n    addNewTask.appendChild(addNewTaskImg);\n    addNewTask.appendChild(addNewTaskInput);\n    addNewTask.appendChild(addNewTaskTick);\n    \n    const taskListDOM = document.createElement(\"div\");\n    taskListDOM.classList.add(\"task-list\");\n\n    currProject.getAllTasks().forEach((task) => {\n        if(!task.getComplete()){\n            taskListDOM.appendChild(renderTasks(task));\n            }\n        });\n    \n\n    const completedSection = document.createElement(\"div\");\n    const completedListDOM = document.createElement(\"div\");\n    completedSection.classList.add(\"completed-title\");\n    completedListDOM.classList.add(\"completed-list\");\n\n    completedSection.textContent = \"Completed\";\n    currProject.getAllTasks().forEach((task) => {\n        if(task.getComplete()){\n            completedListDOM.appendChild(renderTasksComplete(task));\n            }\n        });\n    mainSection.appendChild(mainTitle);\n    mainSection.appendChild(addNewTask);\n    mainSection.appendChild(taskListDOM);\n    mainSection.appendChild(completedSection);\n    mainSection.appendChild(completedListDOM);\n\n    const taskComplete = Array.from(document.getElementsByClassName(\"task-check\"));\n    taskComplete.forEach(task => task.addEventListener(\"click\", completeManager))\n\n    const addATask = document.querySelector(\".new-task-tick\");\n    addATask.addEventListener(\"click\", newTaskManager);\n    //for each task call \"renderTasks\"\n\n    return mainSection;\n}\n\nfunction initialiseWebsite(){\n    const content = document.getElementById(\"content\");\n    content.appendChild(loadProjects());\n    content.appendChild(loadMainDefault());\n\n\n    //content.appendChild(loadOptions());\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialiseWebsite);\n\n\n/* \n<div id = \"content\">\n    <div id=\"leftbar\">\n        <div id=\"project-list\" this is flex box with each flex item as a project name>\n            <div class=\"project\">\n                <div>project name</div>\n            </div>\n        </div>\n    </div>\n    <div id=\"main\" this is a flexbox with first item as title and second as tasks>\n        <div id=\"project-title\">Project title</div>\n        <div id=\"tasks-container\">\n            <load tasks the same way as loaded project list>\n        </div>\n    </div>\n    <div id=\"optionsbar\">\n        <div id=\"options-container\">Options</div>\n    </div>\n</div> */\n\n//# sourceURL=webpack://todo-list/./src/website.js?");

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