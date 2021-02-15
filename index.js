const inquirer = require('inquirer');
const fs = require('fs');
const emailValidate = require('email-validator');

const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

// const makeEmployee = require('./src/makeEmployee')
// const htmlTemplate = require('./src/htmlTemplate.js');
const makePage = require('./src/makePage.js');

let team = [];
let firstRun = true;


const main = () => {
    inquirer
        .prompt([
            {
                name: 'employeeName',
                type: 'input',
                message: 'What is your name?',
                validate: employeeName => {
                    if (employeeName) {
                        return true;
                    } else {
                        console.log('No input detected')
                        return false;
                    }
                }
            },
            {
                name: 'id',
                type: 'input',
                message: 'What is your ID number?',
                validate: (id) => {
                    if (!isNaN(id)) {
                        return true;
                    } else {
                        console.log(' - Not a number!');
                        return false;
                    }
                }
            },
            {
                name: 'email',
                type: 'input',
                message: 'What is your email address?',
                validate: email => {
                    if (emailValidate.validate(email)) {
                        return true;
                    } else {
                        console.log(" - Please enter a valid email")
                        return false;
                    }

                }
            }
        ])
        .then(({ employeeName, id, email }) => {
            if (firstRun === true) {
                firstRun = false;
                inquirer
                    .prompt(
                        {
                            name: 'officeNumber',
                            type: 'input',
                            message: 'What is your office number?'
                        }
                    )
                    .then((officeNumber) => {
                        let manager = new Manager(employeeName, id, email, officeNumber);
                        team.push(manager);
                        inquirer
                            .prompt({
                                name: 'menu',
                                type: 'list',
                                message: 'Main Menu - Please select an option',
                                choices: ['Add a team member', 'Generate HTML file']
                            })
                            .then(({ menu }) => {
                                if (menu === 'Add a team member') {
                                    main();
                                } else {
                                    // Creates the team dashboard webpage.
                                    makePage(team);
                                }
                            })
                    })
            } else {
                inquirer
                    .prompt(
                        {
                            name: 'selection',
                            type: 'list',
                            message: 'What addition to your team would you like to make?',
                            choices: ['Engineer', 'Intern', 'Manager']
                        }
                    )
                    .then(({ selection }) => {
                        if (selection === 'Engineer') {
                            inquirer
                                .prompt(
                                    {
                                        name: 'github',
                                        type: 'input',
                                        message: 'What is your GitHub username?'
                                    }
                                )
                                .then((github) => {
                                    let engineer = new Engineer(employeeName, id, email, github);
                                    team.push(engineer);
                                    inquirer
                                        .prompt({
                                            name: 'menu',
                                            type: 'list',
                                            message: 'Main Menu - Please select an option',
                                            choices: ['Add a team member', 'Generate HTML file']
                                        })
                                        .then(({ menu }) => {
                                            if (menu === 'Add a team member') {
                                                main();
                                            } else {
                                                // Creates the team dashboard webpage.
                                                makePage(team);
                                            }
                                        })
                                })
                        }
                        if (selection === 'Intern') {
                            inquirer
                                .prompt(
                                    {
                                        name: 'school',
                                        type: 'input',
                                        message: 'What school did you attend?'
                                    }
                                )
                                .then((school) => {
                                    let intern = new Intern(employeeName, id, email, school);
                                    team.push(intern);
                                    inquirer
                                        .prompt({
                                            name: 'menu',
                                            type: 'list',
                                            message: 'Main Menu - Please select an option',
                                            choices: ['Add a team member', 'Generate HTML file']
                                        })
                                        .then(({ menu }) => {
                                            if (menu === 'Add a team member') {
                                                main();
                                            } else {
                                                // Creates the team dashboard webpage.
                                                makePage(team);
                                            }
                                        })
                                })
                        }
                        if (selection === 'Manager') {
                            inquirer
                                .prompt(
                                    {
                                        name: 'officeNumber',
                                        type: 'input',
                                        message: 'What is your office number?'
                                    }
                                )
                                .then((officeNumber) => {
                                    let manager = new Manager(employeeName, id, email, officeNumber);
                                    team.push(manager);
                                    inquirer
                                        .prompt({
                                            name: 'menu',
                                            type: 'list',
                                            message: 'Main Menu - Please select an option',
                                            choices: ['Add a team member', 'Generate HTML file']
                                        })
                                        .then(({ menu }) => {
                                            if (menu === 'Add a team member') {
                                                main();
                                            } else {
                                                // Creates the team dashboard webpage.
                                                makePage(team);
                                            }
                                        })
                                })
                        }
                    })
            }
        })
}

// Creates 'dist' folder if it does not already exist.
if (!fs.existsSync('./dist')) {
    fs.mkdirSync('./dist');
}

// Starts main program loop.
main()


