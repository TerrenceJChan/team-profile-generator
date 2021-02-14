const inquirer = require('inquirer');
const fs = require('fs');
const htmlTemplate = require('./src/htmlTemplate.js');

const main = () => {
    const getInfo = (firstTime) => {
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
                            console.log('No input detected.')
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
                        if (email) {
                            return true;
                        } else {
                            console.log('No input detected.')
                            return false;
                        }
                    }
                },
                {
                    name: 'office',
                    type: 'input',
                    message: 'What is your office number?',
                    validate: office => {
                        if (office) {
                            return true;
                        } else {
                            console.log('Invalid ID. Please enter a number.')
                            return false;
                        }
                    }
                }
            ])
            .then((employeeName, id, email, office) => {
                if (firstTime === true) {
                    console.log('True!!!!');
                    makeManager(employeeName, id, email, office);
                    return
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
                        .then((selection) => {
                            if (selection === 'Engineer') {
                                makeEngineer(employeeName, id, email, office);
                            }
                            if (selection === 'Intern') {
                                makeIntern(employeeName, id, email, office);
                            }
                            if (selection === 'Manager') {
                                makeManager(employeeName, id, email, office);
                            }
                        })
                }
            });
    }

    // Checks for first use. If yes, then asks for manager information.
    if (!fs.existsSync('./dist/index.html')) {
        getInfo(true);
    } else {
        getInfo(false);
    }

    // Creates the team dashboard webpage.
    // fs.writeFileSync("./dist/index.html", htmlTemplate.htmlString);
}

// Creates 'dist' folder if it does not already exist.
if (!fs.existsSync('./dist')) {
    fs.mkdirSync('./dist');
}

// Starts main program loop.
main();