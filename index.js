const inquirer = require('inquirer');
const fs = require('fs');
const htmlTemplate = require('./src/htmlTemplate.js');

const main = () => {
    let selection = null;

    const questions = () => {
        return inquirer
            .prompt(
                {
                    name: '',
                    type: 'input',
                    message: 'What is your name? (Manager\s name)'
                }
            )
    }

    

    // Creates the team dashboard webpage.
    // fs.writeFileSync("./dist/index.html", htmlTemplate.htmlString);
}

// Creates 'dist' folder if it does not already exist.
if (!fs.existsSync('./dist')) {
    fs.mkdirSync('./dist');
}

// Starts main program loop.
const getResponses = async () => {
    let responses = await main();
}