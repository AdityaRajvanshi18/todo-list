import Storage from "./storage";
import Project from "./project";
import projectList from "./projectList";
import Task from "./task";
import { add } from "date-fns";

const listOfProjects = new projectList;
let currProjectName = "Inbox";
let prevProjectName = "";
let currProject = listOfProjects.getProject(currProjectName);
const content = document.getElementById("content");
const main = document.getElementById("main");


let tempTask = new Task("test1", "soon");
tempTask.setCompleteTrue();
let tempTask2 = new Task("test2", "later");
let tempTask3 = new Task("test3");

tempTask.setRootProject(currProject.getName());
tempTask2.setRootProject(currProject.getName());
tempTask3.setRootProject(currProject.getName());
currProject.addTask(tempTask);
currProject.addTask(tempTask2);
currProject.addTask(tempTask3);


function createNewProject(name){
    if(name === ""){
        name = "Untitled Project";
        if(listOfProjects.contains(name)){
            alert("A project with this name already exists! \nPlease choose a different name for this project.");
            return;
        }        
    }

    
    listOfProjects.addProject(name);

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

    return projectContainer;
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
    const newProjectContainer = document.createElement("form"); //EDIT HERE
    newProjectContainer.classList.add("new-project-container");

    const newProjectImg = document.createElement("img");
    newProjectImg.src = "img/plus.png";
    newProjectImg.classList.add("project-img");

    const projectInputField = document.createElement("input");
    projectInputField.classList.add("new-project-field");
    projectInputField.id = "new-project-name";
    projectInputField.setAttribute("type", "text");
    projectInputField.setAttribute("placeholder", "Add Project");
    
    newProjectContainer.appendChild(newProjectImg);
    newProjectContainer.appendChild(projectInputField);

    return newProjectContainer;
}

function newProjectManager(){
    //add new project to project list
    let tempName = document.getElementById("new-project-name");

    if(listOfProjects.contains(tempName.value)){
        alert("A project with this name already exists! \nPlease choose a different name for this project.");
        return;
    }

    createNewProject(tempName.value);

    //clear the projects list tab
    const projects = document.querySelectorAll(".project-container");
    projects.forEach(e => e.parentNode.removeChild(e));

    const removalField = document.querySelectorAll(".new-project-container");
    removalField.forEach(e => e.parentNode.removeChild(e));
    

    
    //call loadProjects
    loadProjects();

}

function loadMainManager(project){
    //set current project to the project clicked on
    currProjectName = project.target.textContent;
    currProject = listOfProjects.getProject(currProjectName);
    
    //clear task page
    clearTaskDrawing();
    
    //clear options page

    //loadMainDefault();
    loadMainDefault();
}

function loadProjects(){
    //const listOfProjects = new projectList;
    const projectsBar = document.getElementById("leftbar")
    const projectListDOM = document.createElement("div");
    projectListDOM.classList.add("project-list");

    listOfProjects.getAllProjects().forEach((project)=> projectListDOM.appendChild(renderProjectManager(project)));

    projectListDOM.appendChild(addNewProject());
    projectsBar.appendChild(projectListDOM);

    const projectConfirmField = document.querySelector(".new-project-container");
    projectConfirmField.addEventListener("submit", newProjectManager);

    const projectToLoad = document.querySelectorAll(".project-container");
    projectToLoad.forEach((project) => project.addEventListener("click", loadMainManager));
    //on click call function that wipes all DOM on project and then 
    //draws the new list of projects and opens the main on the newest list 

    return projectsBar;
} 

/* LOAD MAIN STUFF HERE */

function importantManager(task){
    let taskIndex = 0;
    let taskName = task.target.attributes["data-task"].value;
    let currTaskObj = currProject.getTask(taskName);
    //if we are in important projects and the task is important and originated from important projects then do this
    if(currProject.getName() === "Important"){
        if(currTaskObj.getImportant()){
            if(currTaskObj.getRootProject() === "Important"){
                //set task to not important
                currTaskObj.setImportantFalse();
                //set tasks root project to inbox in case it is made important from inbox
                currTaskObj.setRootProject("Inbox");
                //set previous project to current project (ie. set prev to important)
                prevProjectName = currProjectName;
                //set current to Inbox
                currProjectName = "Inbox";
                //change currProject to inbox
                currProject = listOfProjects.getProject(currProjectName);
                //make sure task does not already exist in inbox
                if(currProject.contains(currTaskObj.getName())){
                    alert("This task already exists in Inbox. The task will be deleted from Important and will not be added to Inbox.")
                    let tempTask = currProject.getTask(currTaskObj.getName())
                    tempTask.setImportantFalse();
                }
                //add task to inbox
                else{
                    currProject.addTask(currTaskObj);
                }
                //go back to previous project
                currProjectName = prevProjectName;
                prevProjectName = currProjectName;
                currProject = listOfProjects.getProject(currProjectName);
                //remove task from previous project and draw
                taskIndex = currProject.getTaskIndex(currTaskObj.getName());
                currProject.removeTask(taskIndex);
            }
            else{
                //set task to not important
                currTaskObj.setImportantFalse();
                //DO NOT: set tasks root project to inbox in case it is made important from inbox
                //currTaskObj.setRootProject("Inbox");
                //set previous project to current project
                prevProjectName = currProjectName;
                //set current to Inbox
                currProjectName = currTaskObj.getRootProject();
                //change currProject to inbox
                currProject = listOfProjects.getProject(currProjectName);
                //make sure task does not already exist in inbox
                if(currProject.contains(currTaskObj.getName())){
                    //alert(`This task already exists in ${currProject.getName()}. The task will be deleted from Important and will not be added to ${currProject.getName()}.`);
                    let tempTask = currProject.getTask(currTaskObj.getName())
                    tempTask.setImportantFalse();
                }
                //add task to inbox
                else{
                    currProject.addTask(currTaskObj);
                }
                //go back to previous project
                currProjectName = prevProjectName;
                prevProjectName = "";
                currProject = listOfProjects.getProject(currProjectName);
                //remove task from previous project and draw
                let taskIndex = currProject.getTaskIndex(currTaskObj.getName());
                currProject.removeTask(taskIndex);
            }

        }
    }
    //if we are not in important and task is not important then
    //make task important and add to important list 

    //If currentproject is not important
    else if(currProject.getName() !== "Important"){
        //if current task is not important
        if(currTaskObj.getImportant() === false){
            //set task to important
            currTaskObj.setImportantTrue();
            //set previous project to current project
            prevProjectName = currProject.getName();
            //set current project to important
            currProjectName = "Important"
            currProject = listOfProjects.getProject(currProjectName);
            //add task to important 
            if(currProject.contains(currTaskObj.getName())){
                alert("This task already exists in the Inbox, either change the task's name or delete it.")
                return;
            }
            else{
                currProject.addTask(currTaskObj);
                
            }
            //navigate back to previous project"This task already exists in the Inbox, either change the task's name or delete it."
            currProjectName = prevProjectName;
            prevProjectName = "";
            currProject = listOfProjects.getProject(currProjectName);
        }
        //else if we are not in important and task is important then
        //make task not important and remove from important list
        else if(currTaskObj.getImportant() === true){
            //set task to not important
            currTaskObj.setImportantFalse();
            //set previous project to current project
            prevProjectName = currProject.getName();
            //set current project to important
            currProjectName = "Important"
            currProject = listOfProjects.getProject(currProjectName);
            //remove task from important 
            if(!currProject.contains(currTaskObj.getName())){
                alert("This task does not exist in Important.")
                return;
            }
            else{
                taskIndex = currProject.getTaskIndex(currTaskObj.getName())
                currProject.removeTask(taskIndex);
            }
            //navigate back to previous project"This task already exists in the Inbox, either change the task's name or delete it."
            currProjectName = prevProjectName;
            prevProjectName = "";
            currProject = listOfProjects.getProject(currProjectName);
        }
    }


    //emptying the entire task page
    clearTaskDrawing();
    

    //redraw
    loadMainDefault();
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
    
    taskContainer.setAttribute("data-task", task.getName());
    taskCheck.setAttribute("data-task", task.getName());
    taskStar.setAttribute("data-task", task.getName());
    taskCheck.id = "checkbox-incomplete";
    taskCheck.src = "img/incomplete.png"
    taskName.textContent = task.getName();
    taskDate.textContent = task.getDate();
    if(!task.isImportant){
        taskStar.src = "img/star.png";
    }
    else{
        taskStar.src = "img/starblue.png";
    }
    
    
    taskCheckContainer.appendChild(taskCheck);
    taskLeft.appendChild(taskCheckContainer);
    taskLeft.appendChild(taskName);
    taskRight.appendChild(taskDate);
    taskRight.appendChild(taskStar);

    taskContainer.appendChild(taskLeft);
    taskContainer.appendChild(taskRight);

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
    taskStar.setAttribute("data-task", task.getName());
    taskCheck.id = "checkbox-complete";
    taskCheck.src = "img/complete.png";
    taskName.textContent = task.getName();
    taskDate.textContent = task.getDate();
    if(!task.isImportant){
        taskStar.src = "img/star.png";
    }
    else{
        taskStar.src = "img/starblue.png";
    }
    
    taskCheckContainer.appendChild(taskCheck);
    taskLeft.appendChild(taskCheckContainer);
    taskLeft.appendChild(taskName);
    taskRight.appendChild(taskDate);
    taskRight.appendChild(taskStar);

    taskContainer.appendChild(taskLeft);
    taskContainer.appendChild(taskRight);

    return taskContainer;
} 

function clearTaskDrawing(){
    const projectTitle = document.querySelectorAll(".main-title");
    projectTitle.forEach(e => e.parentNode.removeChild(e));

    const newtask = document.querySelectorAll(".task-list");
    newtask.forEach(e => e.parentNode.removeChild(e));

    const tasks = document.querySelectorAll(".new-task");
    tasks.forEach(e => e.parentNode.removeChild(e));

    const completedTitle = document.querySelectorAll(".completed-title");
    completedTitle.forEach(e => e.parentNode.removeChild(e));

    const completedTasks = document.querySelectorAll(".completed-list");
    completedTasks.forEach(e => e.parentNode.removeChild(e));
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
    clearTaskDrawing();
    

    //redraw
    loadMainDefault();
}

function newTaskManager(){
    //add new task to project list
    let tempName = document.querySelector(".new-task-input");

    if(tempName.value === ""){
        tempName.value = "Untitled Task";
    }
    if(currProject.contains(tempName.value)){
        alert("A task with this name already exists! \nPlease choose a different name for this task.");
        return;
    }

    let newTask = new Task(tempName.value);
    newTask.setRootProject(currProject.getName());

    if(currProject.getName() === "Important"){
        newTask.setImportantTrue();
    }
    else{
        newTask.setImportantFalse();
    }
    currProject.addTask(newTask);

    //clear the tasks list tab
    clearTaskDrawing();
    
    //call loadProjects
    loadMainDefault();

}


function drawMainTitle(){
    const mainTitle = document.createElement("div");
    mainTitle.classList.add("main-title");
    mainTitle.textContent = currProject.name;
    return mainTitle;
}

function drawNewTaskBar(){
    const addNewTask = document.createElement("form");
    const addNewTaskImg = document.createElement("img");
    const addNewTaskInput = document.createElement("input");
    
    addNewTask.classList.add("new-task");
    addNewTaskImg.classList.add("new-task-img");
    addNewTaskImg.src = "img/plus.png";
    addNewTaskInput.classList.add("new-task-input");
    addNewTaskInput.setAttribute("type", "text");
    addNewTaskInput.setAttribute("placeholder", "Add a task");
    
    addNewTask.appendChild(addNewTaskImg);
    addNewTask.appendChild(addNewTaskInput);
    return addNewTask;
}

function drawTaskList(){
    const taskListDOM = document.createElement("div");
    taskListDOM.classList.add("task-list");

    currProject.getAllTasks().forEach((task) => {
        if(!task.getComplete()){
            taskListDOM.appendChild(renderTasks(task));
        }
    });
    return taskListDOM;
}

function drawCompletedTitle(){
    const completedSection = document.createElement("div");
    completedSection.classList.add("completed-title");
    completedSection.textContent = "Completed";
    return completedSection;
}

function drawCompletedList(){
    const completedListDOM = document.createElement("div");
    completedListDOM.classList.add("completed-list");

    currProject.getAllTasks().forEach((task) => {
        if(task.getComplete()){
            completedListDOM.appendChild(renderTasksComplete(task));
        }
    });
    return completedListDOM;
}


function loadMainDefault(){
    //let currProject = listOfProjects.getProject("Inbox");

    
    const mainSection = document.getElementById("main");

    mainSection.appendChild(drawMainTitle());
    mainSection.appendChild(drawNewTaskBar());
    mainSection.appendChild(drawTaskList());
    mainSection.appendChild(drawCompletedTitle());
    mainSection.appendChild(drawCompletedList());

    const taskComplete = Array.from(document.getElementsByClassName("task-check"));
    taskComplete.forEach(task => task.addEventListener("click", completeManager))

    const taskImportant = Array.from(document.getElementsByClassName("task-star"));
    taskImportant.forEach(task => task.addEventListener("click", importantManager))

    const taskOptions = Array.from(document.getElementsByClassName("task-container"));
    taskOptions.forEach(task => task.addEventListener("click", loadOptionsColumn));

    const addATaskField = document.querySelector(".new-task");
    addATaskField.addEventListener("submit", newTaskManager);

    return mainSection;
}

/* OPTIONS SECTION */

function clearOptionsColumn(){
    const options = document.querySelectorAll("#optionsbar");
    options.forEach(e => e.parentNode.removeChild(e));
}

function loadOptionsColumn(e){
    let currTask = e.target.dataset.task;
    console.log(e.target.dataset.task);

    //clear options column
    if(document.querySelector("#optionsbar") !== null){
        clearOptionsColumn();       
    }
    

    console.log(document.querySelector("#optionsbar"));
    if(document.querySelector("#optionsbar") === null){
        //create options bar
        content.style.gridTemplateColumns = "18em 1fr 20em";        
    }
    const optionsBar = document.createElement("div");
    optionsBar.id = "optionsbar";
    optionsBar.style.display = "inline";

    const optionsContainer = document.createElement("div");
    optionsContainer.classList.add("options-container"); //flex box

    const nameEditForm = document.createElement("form");
    const nameEdit = document.createElement("input");
    nameEditForm.classList.add("name-edit-form");
    nameEdit.classList.add("name-edit");
    nameEdit.setAttribute("type", "text");
    nameEdit.setAttribute("placeholder", currTask);

    const dueDateContainer = document.createElement("div");
    dueDateContainer.classList.add("due-date-cont");

    const dueDateTitle = document.createElement("div");
    dueDateTitle.classList.add("due-date-title");
    dueDateTitle.textContent = "Set a new due date";

    const dueDate = document.createElement("input");
    dueDate.setAttribute("type", "date");
    dueDate.classList.add("due-date");

    const confirmButton = document.createElement("button");
    confirmButton.id = "confirm";

    const deleteButton = document.createElement("button");
    deleteButton.id = "delete";

    nameEditForm.appendChild(nameEdit);
    optionsContainer.appendChild(nameEditForm);
    optionsContainer.appendChild(dueDateTitle);
    optionsContainer.appendChild(dueDate);

    optionsBar.appendChild(optionsContainer);

    const buttonsBar = document.createElement("div");




    content.appendChild(optionsBar);

    //event listeners


    
    /* content.style.gridTemplateColumns = "18em 1fr 1fr";
    const optionsBar = document.createElement("div");
    optionsBar.id = "optionsbar";
    optionsBar.style.display = "inline";
    content.appendChild(optionsBar); */
    
    //edit name
    //


    //delete task
    //add due date
    //add desc maybe

}   


function initialiseWebsite(){
    const content = document.getElementById("content");
    content.appendChild(loadProjects());
    content.appendChild(loadMainDefault());
    //content.appendChild(loadOptions());
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