const inquirer = require('inquirer');
const fs = require('fs');
const htmlTemplate = require('./src/htmlTemplate.js')

const main = () => {
    let selection = null;

    inquirer.prompt

    // Creates 'dist' folder if it does not already exist.
    if (!fs.existsSync('./dist')) {
        fs.mkdirSync('./dist');
    }

    // Creates the team dashboard webpage.
    fs.writeFileSync("./dist/index.html", htmlTemplate.htmlString);
}

// Starts main program loop.
main();