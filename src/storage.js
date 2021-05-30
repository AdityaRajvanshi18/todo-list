import Project from "./project";
import projectList from "./projectList";
import Task from "./task";

//create a list of projects
//IMPORTANT projectsList is the VARIABLE and projectList is the OBJECT
export default class Storage{
    static getProjectsList(){
        const projectsList = Object.assign(new projectList());

        projectsList.setProjects(
            projectsList
            .getProjects()
            .map((project) => Object.assign(new Project(), project)),
        );

        projectsList.getProjects().forEach((project) => project.setTasks(
            project.getTasks().map((task) => Object.assign(new Task(), task)),
            ),
        );
        return projectsList;
    }
}