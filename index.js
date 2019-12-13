const inquirer = require("inquirer");
const fs = require("fs");

const employee = require("./lib/employee")
const engineer = require("./lib/engineer")
const manager = require("./lib/manager")
const intern = require("./lib/intern")

let finalTeamArray = [];

function startingPrompt() {
    inquirer.prompt([
        {
            message: "What is your team manager's name?",
            name: "name"
        },
        {
            message: "What is your team manager's email address?",
            name: "email"
        },

        {
            type: "number",
            message: "What is your team manager's office number?",
            name: "officeNumber"
        },
    ])

        .then(function (data) {
            console.log(data)
            addTeamMembers();
        });

}

function addTeamMembers() {
    inquirer.prompt([
        {
            type: "list",
            message: "Would you like to add more team members?",
            choices: ["Yes, add an engineer", "Yes, add an intern", "No, my team is complete"],
            name: "addMemberData"
        }
    ])

        .then(function (data) {
            console.log(data.addMemberData)
        

            switch (data.addMemberData) {
                case "Yes, add an engineer":
                    addEngineer();
                    break;

                case "Yes, add an intern":
                    addIntern();
                    break;
                case "No, my team is complete":
                    compileTeam();
                    break;
            }
        });
}

function addEngineer() {
    inquirer.prompt([
        {
            message: "What is this engineer's name?",
            name: "name"
        },
        {
            message: "What is this engineer's email address?",
            name: "email"
        },
        {
            message: "What is this engineer's Github profile?",
            name: "github"
        }
    ])

        .then(function (data) {
            console.log(data.name, data.email, data.github)
            addTeamMembers()

        });

};

function addIntern() {
    inquirer.prompt([
        {
            message: "What is this intern's name?",
            name: "name"
        },
        {
            message: "What is this intern's email address?",
            name: "email"
        },
        {
            message: "What is this intern's school?",
            name: "school"
        }
    ])

        .then(function (data) {
            console.log(data.name, data.email, data.school)
            addTeamMembers()

        });

};

function compileTeam(){
    console.log("complete!")
}



startingPrompt();


//create function with inquirer Q's for each position type, run as needed

//start with Manager question
//take results, run new Manager (class)
//push results into final array
//then ask if you want to add any engineers, intern, etc
//repeat above steps for each, add all to final array
//pull from final array for html generation