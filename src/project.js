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

    getTaskIndex(taskName){
        let index = 0;
        let iterator = 0;
        let allTasks = this.getAllTasks();
        allTasks.forEach((task) =>{
            if(task.getName() === taskName){
                index = iterator;
            }
            else{
                iterator++;
            }
        })
        return index;
    }

    popTask(){
        this.tasks.pop();
    }

    removeTask(index){
        return this.tasks.splice(index, 1);
    }

    contains(taskName){
        let flag = false;
        let allTasks = this.getAllTasks();
        allTasks.forEach((task) => {
            if (task.getName() === taskName){
                flag = true;
            }
        })
        return flag;
    }
    
    addTask(task) {
        if (this.tasks.indexOf(task) > 0) return;
        this.tasks.push(task);
    }
    
}
