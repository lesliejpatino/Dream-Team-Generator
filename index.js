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
    ]).then(answers => {
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
        if (answers.addTeamMember === "Manager") {
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

addMember();

// manager prompts
const managerPrompt = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "Who is the team manager?",
            name: "memberName"
        },
        {
            type: "input",
            message: "Please enter the manager's ID number: ",
            name: "memberId"
        },
        {
            type: "input",
            message: "Please enter the manager's email: ",
            name: "memberEmail"
        },
        {
            type: "input",
            message: "What is the manager's office number?",
            name: "memberOffice"
        },
        // pushes response to the teamArray & runs the yesOrNo function, which will ask the user if they'd like to add another team member.
    ]).then(answers => {
        let manager = new Manager(answers.memberName, answers.memberId, answers.memberEmail, answers.memberOffice);
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
            name: "memberName"
        },
        {
            type: "input",
            message: "Please enter the engineer's ID number: ",
            name: "memberId"
        },
        {
            type: "input",
            message: "Please enter the engineer's email: ",
            name: "memberEmail"
        },
        {
            type: "input",
            message: "Please enter the engineer's github username: ",
            name: "memberGithub"
        },
        // pushes response to the teamArray & runs the yesOrNo function, which will ask the user if they'd like to add another team member.
    ]).then(answers => {
        let engineer = new Engineer(answers.memberName, answers.memberId, answers.memberEmail, answers.memberGithub);
        teamArray.push(engineer);
        yesOrNo();
    })
}

// intern prompts
const internPrompt = () => {
    inquirer.prompt([
        {
            type: "input",
            message: "What is the intern's name?",
            name: "memberName"
        },
        {
            type: "input",
            message: "Please enter the intern's ID number: ",
            name: "memberId"
        },
        {
            type: "input",
            message: "Please enter the intern's email: ",
            name: "memberEmail"
        },
        {
            type: "input",
            message: "What school does the intern currently attend: ",
            name: "memberSchool"
        },
        // pushes response to the teamArray & runs the yesOrNo function, which will ask the user if they'd like to add another team member.
    ]).then(answers => {
        let intern = new Intern(answers.memberName, answers.memberId, answers.memberEmail, answers.memberSchool);
        teamArray.push(intern);
        yesOrNo();
        return intern;
    })
}



const buildHtml = () => {
    // cardHtml will store all cards from the data in teamArray
    let cardsHtml = ``
    for (let i = 0; i < teamArray.length; i++) {
        cardsHtml += cardRender(teamArray[i]);
    }
    let htmlFile = `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">

    <title>My Team</title>
    <style>
    body {
        background-color: rgb(136, 155, 207);
    }
    </style>
</head>

<body>
    <div class="container-fluid bg-dark bg-gradient text-white p-4 text-center">
        <h1>The Engineering Team</h1>
        <span style='font-size:60px;'>&#128187;</span>
    </div>

    <div class="container">
        <div class="row justify-content-center">

    ${cardsHtml}

        </div>
    </div>
    </body>

</html>`

    fs.writeFile('index.html', htmlFile, (err) => {
        if (err) {
            console.log(err);
        }
    })
}

// this function will create the cards that will display the team member info
const cardRender = (member) => {

    let query = `
    <div class="col-3 m-3">
                <div class="card text-center">
                    <div class="card-header bg-dark bg-gradient text-white">
                        <h2> ${member.name}</h2>
                        <h3> ${member.getRole()} </h3>
                    </div>
                    <div class="card-body">
                        <p> ID: ${member.id}</p>
                        <p> Email: <a href="mailto:">${member.email} </a></p>
                        <p>
                        
                        ${member.officeNumber ? "<p>Office Number: " + member.officeNumber + "</p>" : 
                            member.github ? "<p>GitHub: " + member.github + "</p>" : 
                            member.school ? "<p>School: " + member.school + "</p>" : ""}
                        </p>
                    </div>
                </div>

            </div>`

    return query;
}