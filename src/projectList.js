import Project from './project';
import Task from './task';

export default class projectList{
    constructor() {
        this.projects = [];
        this.projects.push(new Project("Inbox"));
        this.projects.push(new Project("Important"));
        this.projectNum = 2;
    }

    setProjects(projects){
        this.projects = projects;
        this.projectNum++;
    }

    addProject(name){
        this.projects.push(new Project(name));
        this.projectNum += 1;
    }

    getProjectsNum(){
        return this.projectsNum;
    }

    getAllProjects() {
        return this.projects;
    }

    getProject(projectName) {
        return this.projects.find((project) => project.getName() === projectName);
    }
    
    contains(projectName) {
        return this.projects.some((project) => project.getName() === projectName);
    }
}