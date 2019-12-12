const Employee = require("./employee")

class Engineer extends Employee {
    constructor(name, id, title, github){
        super (name, id, title)
        this.github = github;
        this.title = "Engineer"
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return this.title;
    }
}

module.exports = Engineer