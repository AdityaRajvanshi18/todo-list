export default class Task {
    constructor(name, dueDate = "", ){
        this.name = name;
        this.dueDate = dueDate;
        this.isComplete = false;
    }
    setName(name) {
        this.name = name;
    }
    
    getName() {
        return this.name;
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
}