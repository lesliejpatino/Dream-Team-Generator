// ACCEPTANCE CRITERIA: 
// GIVEN a command-line application that accepts user input

// WHEN I am prompted for my team members and their information
// THEN an HTML file is generated that displays a nicely formatted team roster based on user input

// WHEN I click on an email address in the HTML
// THEN my default email program opens and populates the TO field of the email with the address

// WHEN I click on the GitHub username
// THEN that GitHub profile opens in a new tab

// WHEN I start the application
// THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

// WHEN I enter the team manager’s name, employee ID, email address, and office number
// THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

// WHEN I select the engineer option
// THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

// WHEN I select the intern option
// THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

// WHEN I decide to finish building my team
// THEN I exit the application, and the HTML is generated



// node modules
const fs = require('fs');
const inquirer = require("inquirer");

// team member profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

// team array
const teamArray = [];

// prompt that user will see after entering a team member
const yesOrNo = () => {
inquirer.prompt([
    {
        type: "list",
        message: "Would you like to add another team member?",
        name: "yesOrNo",
        choices: ["Yes", "No"]
    }
]).then(answers =>{
    if (answers.yesOrNo === "Yes") {
        addMember()
    } else {
        buildHtml();
    }   
})
}

// prompt that user will see each time they go to enter a new team member
const addMember = () => {
inquirer.prompt([
    {
    type: "list",
    message: "Which type of employee you will be adding to your list: ",
    name: "addTeamMember",
    choices: ["Manager", "Engineer", "Intern", "No more to add"]
    }
]).then(answers => {
    if(answers.addTeamMember === "Manager") {
        managerPrompt();
    }
        else if (answers.addTeamMember === "Engineer") {
            engineerPrompt();
        } else if (answers.addTeamMember === "Intern") {
            internPrompt();
        } else {
            buildHtml();
        }
})
}

// manager prompts
const managerPrompt = () => {
inquirer.prompt([
    {
        type: "input",
        message: "Who is the team manager?",
        name: "mgrName"
    },
    {
        type: "input",
        message: "Please enter the manager's ID number: ",
        name: "mgrId"
    },
    {
        type: "input",
        message: "Please enter the manager's email: ",
        name: "mgrEmail"
    },
    {
        type: "input",
        message: "What is the manager's office number?",
        name: "mgrOffice"
    },
    // add an option to add another team member
]).then(answers=>{
    let manager = new Manager(answers.mgrName, answers.mgrId, answers.mgrEmail, answers.mgrOffice);
    teamArray.push(manager);
    yesOrNo();
})
}

// engineer prompts
const engineerPrompt = () => {
inquirer.prompt([
    {
        type: "input",
        message: "What is the Engineer's name?",
        name: "engName"
    },
    {
        type: "input",
        message: "Please enter the engineer's ID number: ",
        name: "engId"
    },
    {
        type: "input",
        message: "Please enter the engineer's email: ",
        name: "engEmail"
    },
    {
        type: "input",
        message: "Please enter the engineer's github username: ",
        name: "engGithub"
    },
    // add an option to add another team member
])
}

// intern prompts
const internPrompt = () => {
inquirer.prompt([
    {
        type: "input",
        message: "What is the intern's name?",
        name: "internName"
    },
    {
        type: "input",
        message: "Please enter the intern's ID number: ",
        name: "internId"
    },
    {
        type: "input",
        message: "Please enter the intern's email: ",
        name: "internEmail"
    },
    {
        type: "input",
        message: "What school does the intern currently attend: ",
        name: "internSchool"
    },
    // add an option to add another team member
]).then (answers => {

});
}


