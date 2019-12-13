const inquirer = require("inquirer");
const fs = require("fs");

const Employee = require("./lib/employee")
const Engineer = require("./lib/engineer")
const Manager = require("./lib/manager")
const Intern = require("./lib/intern")

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
            const name = data.name
            const id = 1
            const email = data.email
            const officeNumber = data.officeNumber
            const matt = new Manager(name, id, email, officeNumber)
            console.log(matt)

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
            const name = data.name
            const id = 1
            const email = data.email
            const github = data.github
            const matt = new Engineer(name, id, email, github)
            console.log(matt)
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
            const name = data.name
            const id = 1
            const email = data.email
            const school = data.school
            const matt = new Intern(name, id, email, school)
            console.log(matt)
            addTeamMembers()

        });

};

function compileTeam() {
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