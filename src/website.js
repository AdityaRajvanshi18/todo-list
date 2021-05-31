import Storage from "./storage";
import Project from "./project";
import projectList from "./projectList";
import Task from "./task";
import { add } from "date-fns";

const listOfProjects = new projectList;


function createNewProject(name){
    listOfProjects.addProject(name);
    console.log(listOfProjects);


    /* let tempName = this.previousElementSibling.value;
    const projectContainer = document.createElement("div");
    const projectImgContainer = document.createElement("div");
    const projectImg = document.createElement("img");
    const projectName = document.createElement("div");

    projectContainer.classList.add("project-container");
    projectImgContainer.classList.add("project-img-container");
    projectImg.classList.add("project-img");
    projectName.classList.add("project-title");

    projectImg.src = "img/list.png";
    projectName.textContent = tempName;

    projectImgContainer.appendChild(projectImg);
    projectContainer.appendChild(projectImgContainer);
    projectContainer.appendChild(projectName);

    listOfProjects.addProject(tempName);
    console.log(listOfProjects);
    projectContainer.addEventListener("click", loadMain); */
}

//function that takes a project and creates a DOM element
function createProject(project){
    /* const name = document.createElement("div");
    name.classList.add("project");
    name.textContent = project.getName();
    //console.log(project);
    name.addEventListener("click", loadMain); */

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

    listOfProjects.addProject(project.getName());
    //console.log(listOfProjects);
    projectContainer.addEventListener("click", loadMain);

    return projectContainer;
    //return name;
}

function createProjectDefault(project){
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

function createProjectManager(project){
    if (project.getName() === "Inbox" || project.getName() === "Important"){
        return createProjectDefault(project);
    }
    else return createProject(project);
}

function loadMain(){
    console.log(this);
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
    //console.log(listOfProjects);
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
    //console.log(projects);

    
    //call loadProjects
    loadProjects();

}

function loadProjects(){
    //const listOfProjects = new projectList;
    const projectsBar = document.getElementById("leftbar")
    const projectListDOM = document.createElement("div");
    projectListDOM.classList.add("project-list");

    listOfProjects.getAllProjects().forEach((project)=> projectListDOM.appendChild(createProjectManager(project)));

    projectListDOM.appendChild(addNewProject());
    projectsBar.appendChild(projectListDOM);

    const projectConfirmButton = document.getElementById("confirm");
    projectConfirmButton.addEventListener("click", newProjectManager);
    //on click call function that wipes all DOM on project and then 
    //draws the new list of projects and opens the main on the newest list 

    return projectsBar;
} 


function initialiseWebsite(){
    const content = document.getElementById("content");
    content.appendChild(loadProjects());
    //content.appendChild(loadMain());
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