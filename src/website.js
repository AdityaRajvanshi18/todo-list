import Storage from "./storage";
import Project from "./project";
import projectList from "./projectList";
import Task from "./task";
import { add } from "date-fns";

const listOfProjects = new projectList;
let currProjectName = "Inbox";
let currProject = listOfProjects.getProject(currProjectName);
let tempTask = new Task("test1", "soon");
tempTask.setCompleteTrue();
let tempTask2 = new Task("test2", "later");
let tempTask3 = new Task("test3", "even later");
currProject.addTask(tempTask);
currProject.addTask(tempTask2);
currProject.addTask(tempTask3);


function createNewProject(name){
    if(name === ""){
        name = "Untitled Project";
        if(name === listOfProjects.contains(name)){
            console.log("duplicate exists");
            return;
        }
        
    }

    
    listOfProjects.addProject(name);
    //console.log("from inside the function", listOfProjects);

}

//function that takes a project and creates a DOM element
function renderProject(project){

    const projectContainer = document.createElement("div");
    const projectImgContainer = document.createElement("div");
    const projectImg = document.createElement("img");
    const projectName = document.createElement("div");

    projectContainer.classList.add("project-container");
    projectImgContainer.classList.add("project-img-container");
    projectImg.classList.add("project-img");
    projectName.classList.add("project-title");

    projectImg.src = "img/list.png";
    projectName.textContent = project.getName();

    projectImgContainer.appendChild(projectImg);
    projectContainer.appendChild(projectImgContainer);
    projectContainer.appendChild(projectName);

    //listOfProjects.addProject(project.getName()); THIS WAS CAUSING THE BUG
    //basically was adding the project to the list here (incorrect place) and in the correct place
    //so the project was being added twice. this is simply the renderer, nothing else.
    projectContainer.addEventListener("click", loadMain);

    return projectContainer;
    //return name;
}

function renderProjectDefault(project){
    const projectContainer = document.createElement("div");
    const projectImgContainer = document.createElement("div");
    const projectImg = document.createElement("img");
    const projectName = document.createElement("div");

    projectContainer.classList.add("project-container");
    projectImgContainer.classList.add("project-img-container");
    projectImg.classList.add("project-img");
    projectName.classList.add("project-title");

    if(project.getName() === "Inbox"){
        projectImg.src = "img/inbox.png";
        projectName.textContent = project.getName();
    }
    else if (project.getName() === "Important"){
        projectImg.src = "img/star.png";
        projectName.textContent = project.getName();
    }
    projectImgContainer.appendChild(projectImg);
    projectContainer.appendChild(projectImgContainer);
    projectContainer.appendChild(projectName);
    projectContainer.addEventListener("click", loadMain);
    return projectContainer;
}

function renderProjectManager(project){
    if (project.getName() === "Inbox" || project.getName() === "Important"){
        return renderProjectDefault(project);
    }
    else return renderProject(project);
}

//Should sit at the bottom of leftbar and be called at the end of the re-draw
function addNewProject(){
    const newProjectContainer = document.createElement("div");
    newProjectContainer.classList.add("new-project-container");

    const newProjectImg = document.createElement("img");
    newProjectImg.src = "img/plus.png";
    newProjectImg.classList.add("project-img");

    const projectInputField = document.createElement("input");
    projectInputField.classList.add("new-project-field");
    projectInputField.id = "new-project-name";
    projectInputField.setAttribute("type", "text");
    projectInputField.setAttribute("placeholder", "Add Project");

    const newProjectConfirmContainer = document.createElement("div");
    const newProjectConfirm = document.createElement("img");
    newProjectConfirmContainer.classList.add("project-confirm-container");
    newProjectConfirmContainer.id = "confirm";
    newProjectConfirm.classList.add("project-img-confirm");
    newProjectConfirm.src = "img/tick.png"

    newProjectConfirmContainer.appendChild(newProjectConfirm);
    
    newProjectContainer.appendChild(newProjectImg);
    newProjectContainer.appendChild(projectInputField);
    newProjectContainer.appendChild(newProjectConfirmContainer);

    return newProjectContainer;
}

function newProjectManager(){
    //add new project to project list
    let tempName = document.getElementById("new-project-name");
    createNewProject(tempName.value);

    //clear the projects list tab
    const projects = document.querySelectorAll(".project-container");
    projects.forEach(e => e.parentNode.removeChild(e));

    const removalField = document.querySelectorAll(".new-project-container");
    removalField.forEach(e => e.parentNode.removeChild(e));
    //console.log("removed all projects", listOfProjects);

    
    //call loadProjects
    loadProjects();

}

function loadProjects(){
    //const listOfProjects = new projectList;
    const projectsBar = document.getElementById("leftbar")
    const projectListDOM = document.createElement("div");
    projectListDOM.classList.add("project-list");

    listOfProjects.getAllProjects().forEach((project)=> projectListDOM.appendChild(renderProjectManager(project)));

    projectListDOM.appendChild(addNewProject());
    projectsBar.appendChild(projectListDOM);

    const projectConfirmButton = document.getElementById("confirm");
    projectConfirmButton.addEventListener("click", newProjectManager);
    //on click call function that wipes all DOM on project and then 
    //draws the new list of projects and opens the main on the newest list 

    return projectsBar;
} 

/* LOAD MAIN STUFF HERE */

function loadMain(){
    let mainToLoad = this.textContent;
    console.log(mainToLoad);
    /* const mainSection = document.getElementById("main");
    const mainTitle = document.createElement("div");
    mainTitle.classList.add("main-title");
    mainTitle.textContent = this.mainToLoad;
    mainSection.appendChild(mainTitle); */
}

function updateTaskImportant(task){
    console.log(task);
}

function updateTaskComplete(task){
    //get the task

    //if isComplete = false then equal true and strike out
    //else set isComplete = false, remove strike out;

    
    const tempName = task.target.attributes["data-task"].value;
    //let tempTask = task.getName();
    //let tempComplete = task.getComplete();
    /* console.log(task.target.attributes["data-task"].value); */
    //console.log(task);
    
    
}

function renderTasks(task){

    const taskContainer = document.createElement("div");
    const taskCheckContainer = document.createElement("div");
    const taskCheck = document.createElement("img");
    const taskName = document.createElement("div");
    const taskDate = document.createElement("div");
    const taskStar = document.createElement("img");
    const taskLeft = document.createElement("div");
    const taskRight = document.createElement("div");

    taskContainer.classList.add("task-container");
    taskCheckContainer.classList.add("task-check-container");
    taskCheck.classList.add("task-check");
    taskName.classList.add("task-name");
    taskDate.classList.add("task-date");
    taskStar.classList.add("task-star");
    taskLeft.classList.add("task-left");
    taskRight.classList.add("task-right");
    
    
    taskCheck.setAttribute("data-task", task.getName());
    taskCheck.id = "checkbox-incomplete";
    taskCheck.src = "img/incomplete.png"
    taskName.textContent = task.getName();
    taskDate.textContent = task.getDate();
    taskStar.src = "img/star.png";
    
    taskCheckContainer.appendChild(taskCheck);
    taskLeft.appendChild(taskCheckContainer);
    taskLeft.appendChild(taskName);
    taskRight.appendChild(taskDate);
    taskRight.appendChild(taskStar);

    taskContainer.appendChild(taskLeft);
    taskContainer.appendChild(taskRight);

    taskCheck.addEventListener("click", updateTaskComplete);
    taskStar.addEventListener("click", updateTaskImportant);

    return taskContainer;
}

function renderTasksComplete(task){

    const taskContainer = document.createElement("div");
    const taskCheckContainer = document.createElement("div");
    const taskCheck = document.createElement("img");
    const taskName = document.createElement("div");
    const taskDate = document.createElement("div");
    const taskStar = document.createElement("img");
    const taskLeft = document.createElement("div");
    const taskRight = document.createElement("div");

    taskContainer.classList.add("task-container");
    taskCheckContainer.classList.add("task-check-container");
    taskCheck.classList.add("task-check");
    taskName.classList.add("task-name-completed");
    taskDate.classList.add("task-date");
    taskStar.classList.add("task-star");
    taskLeft.classList.add("task-left");
    taskRight.classList.add("task-right");
    
    taskCheck.setAttribute("data-task", task.getName());
    taskCheck.id = "checkbox-complete";
    taskCheck.src = "img/complete.png";
    taskName.textContent = task.getName();
    taskDate.textContent = task.getDate();
    taskStar.src = "img/star.png";
    
    taskCheckContainer.appendChild(taskCheck);
    taskLeft.appendChild(taskCheckContainer);
    taskLeft.appendChild(taskName);
    taskRight.appendChild(taskDate);
    taskRight.appendChild(taskStar);

    taskContainer.appendChild(taskLeft);
    taskContainer.appendChild(taskRight);

    taskCheck.addEventListener("click", updateTaskComplete);
    taskStar.addEventListener("click", updateTaskImportant);

    return taskContainer;
} 

function completeManager(task){
    let taskName = task.target.attributes["data-task"].value;
    
    let currTaskObj = currProject.getTask(taskName);
    if(currTaskObj.getComplete() === false){
        currTaskObj.setCompleteTrue();
    }
    else if(currTaskObj.getComplete() === true){
        currTaskObj.setCompleteFalse();
    }

    //emptying the entire task page
    const projectTitle = document.querySelectorAll(".main-title");
    projectTitle.forEach(e => e.parentNode.removeChild(e));

    const tasks = document.querySelectorAll(".task-list");
    tasks.forEach(e => e.parentNode.removeChild(e));

    const completedTitle = document.querySelectorAll(".completed-title");
    completedTitle.forEach(e => e.parentNode.removeChild(e));

    const completedTasks = document.querySelectorAll(".completed-list");
    completedTasks.forEach(e => e.parentNode.removeChild(e));

    //redraw
    loadMainDefault();
}

function loadMainDefault(){
    //let currProject = listOfProjects.getProject("Inbox");
    //console.log(currProject.name);
    const mainSection = document.getElementById("main");
    const mainTitle = document.createElement("div");
    mainTitle.classList.add("main-title");
    mainTitle.textContent = currProject.name;

    const addNewTask = document.createElement("div");
    
    const taskListDOM = document.createElement("div");
    taskListDOM.classList.add("task-list");

    //get tasks for default project
    /* let tempTask = new Task("test1", "soon");
    tempTask.setCompleteTrue();
    let tempTask2 = new Task("test2", "later");
    let tempTask3 = new Task("test3", "even later");
    currProject.addTask(tempTask);
    currProject.addTask(tempTask2);
    currProject.addTask(tempTask3); */
    console.log(currProject.getAllTasks())
    currProject.getAllTasks().forEach((task) => {
        if(!task.getComplete()){
            taskListDOM.appendChild(renderTasks(task));
            }
        });
    

    const completedSection = document.createElement("div");
    const completedListDOM = document.createElement("div");
    completedSection.classList.add("completed-title");
    completedListDOM.classList.add("completed-list");

    completedSection.textContent = "Completed";
    currProject.getAllTasks().forEach((task) => {
        if(task.getComplete()){
            completedListDOM.appendChild(renderTasksComplete(task));
            }
        });
    mainSection.appendChild(mainTitle);
    mainSection.appendChild(addNewTask);
    mainSection.appendChild(taskListDOM);
    mainSection.appendChild(completedSection);
    mainSection.appendChild(completedListDOM);

    const taskComplete = Array.from(document.getElementsByClassName("task-check"));
    //console.log("this is taskComplete", taskComplete);

    taskComplete.forEach(task => task.addEventListener("click", completeManager))


    //for each task call "renderTasks"

    return mainSection;
}

function initialiseWebsite(){
    const content = document.getElementById("content");
    content.appendChild(loadProjects());
    content.appendChild(loadMainDefault());


    //content.appendChild(loadOptions());
    //console.log(content);
}

export default  initialiseWebsite;


/* 
<div id = "content">
    <div id="leftbar">
        <div id="project-list" this is flex box with each flex item as a project name>
            <div class="project">
                <div>project name</div>
            </div>
        </div>
    </div>
    <div id="main" this is a flexbox with first item as title and second as tasks>
        <div id="project-title">Project title</div>
        <div id="tasks-container">
            <load tasks the same way as loaded project list>
        </div>
    </div>
    <div id="optionsbar">
        <div id="options-container">Options</div>
    </div>
</div> */