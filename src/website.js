import Storage from "./storage";
import Project from "./project";
import projectList from "./projectList";
import Task from "./task";

//function that takes a project and creates a DOM element
function createProject(project){
    const name = document.createElement("div");
    name.classList.add("project");
    name.textContent = project.getName();
    console.log(project);
    return name;
}
function loadProjects(){
    const listOfProjects = new projectList;
    const projectsBar = document.getElementById("leftbar")
    const projectListDOM = document.createElement("div");
    projectListDOM.classList.add("project-list");

    listOfProjects.getAllProjects().forEach((project)=> projectListDOM.appendChild(createProject(project)));
    projectsBar.appendChild(projectListDOM);
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
    <div id="main">
        <div id="project-title">
            Project title
        </div>
    </div>
    <div id="optionsbar">
        <div id="options-container">Options</div>
    </div>
</div> */