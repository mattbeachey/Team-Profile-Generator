const inquirer = require("inquirer");
const fs = require("fs");

const employee = require("./lib/employee")
const engineer = require("./lib/engineer")
const manager = require("./lib/manager")
const intern = require("./lib/intern")


inquirer.prompt([
    {
        message: "Please enter your name",
        name: "username"
    },
    {
        message: "How many people are on your team?",
        name: "teamSize"
    },
    {
        message: "Please enter your name",
        name: "username"
    },
])

.then(function(data){
    console.log(data.teamSize)
});