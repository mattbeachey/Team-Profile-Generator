const Employee = require("./employee")


class Manager extends Employee {
    constructor (name, id, title, officenumber){
        super (name, id, title)
        this.officenumber = officenumber
    }

    getRole(){
        return "Manager";
    }

    getOfficeNumber(){
        return this.officenumber;
    }

}

module.exports = Manager