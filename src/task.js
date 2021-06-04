export default class Task {
    constructor(name, dueDate = "", ){
        this.name = name;
        this.dueDate = dueDate;
        this.isComplete = false;
        this.isImportant = false;
        this.rootProject = "";
    }
    setName(name) {
        this.name = name;
    }
    
    getName() {
        return this.name;
    }

    setDate(dueDate) {
        this.dueDate = dueDate;
     }
     
     getDate() {
         return this.dueDate;
     }
     
    getDateFormatted() {
         const day = this.dueDate.split('/')[0];
         const month = this.dueDate.split('/')[1];
         const year = this.dueDate.split('/')[2];
         return `${month}/${day}/${year}`;
     }

    getComplete(){
        return this.isComplete;
    }

    setCompleteTrue(){
        return this.isComplete = true;
    }

    setCompleteFalse(){
        return this.isComplete = false;
    }

    getImportant(){
        return this.isImportant;
    }

    setImportantTrue(){
        return this.isImportant = true;
    }

    setImportantFalse(){
        return this.isImportant = false;
    }
    
    getRootProject(){
        return this.rootProject;
    }

    setRootProject(projectName){
        this.rootProject = projectName;
    }
    
}