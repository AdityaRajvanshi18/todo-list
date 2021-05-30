import {getProjectsList} from "./storage";

function createProjects(){
    const projectsBar = document.createElement("div");
    projectsBar.id = "leftbar";

    


    return projectsBar;
}



function initializeWebsite(){
    const content = document.getElementById("content");
    content.appendChild(createProjects());
    content.appendChild(createMain());
    content.appendChild(createOptions());
    console.log(content);
    loadPage();
}

export default initializeWebsite;

{/* 
<div id="leftbar">
    <div id="today">
        Today
    </div>
</div>
<div id="main">
    <div id="project-title">
        Project title
    </div>
</div>
<div id="optionsbar">
    <div id="options-container">Options</div>
</div> */}