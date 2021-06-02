export default class Project {
    constructor(name){
        this.name = name;
        this.tasks = [];
    }

    setName(name){
        this.name = name;
    }

    getName() {
        return this.name;
    }

   /*  addTask(name){
        this.task.push(new Task(name))
    } */

    setTasks(tasks) {
        this.tasks = tasks;
    }
    
    getAllTasks() {
        return this.tasks;
    }
    
    getTask(taskName) {
        return this.tasks.find((task) => task.getName() === taskName);
    }
    
    contains(taskName) {
        return this.tasks.some((task) => task.getName() === taskName);
    }
    
    addTask(task) {
        if (this.tasks.indexOf(task) > 0) return;
        this.tasks.push(task);
    }
    
}
