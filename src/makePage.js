const fs = require('fs');
const htmlTemplate = require('./htmlTemplate.js');

const makePage = (teamMembers) => {
    let teamString = "";

    const employeeCards = (obj) => {
        console.log(obj);
        let role = obj.getRole();
        let getExtraInfo;
        if (role === 'Intern') {
            getExtraInfo = obj.school.school;
        } else if (role === 'Engineer') {
            getExtraInfo = `<a href="https://github.com/${obj.github.github}">GitHub Account - ${obj.github.github}</a>`;
        } else {
            getExtraInfo = obj.officeNumber.officeNumber;
        }

        return `
            <div class="card">
                <div class="card-body">
                    <h2 class="card-title">${obj.employeeName}</h2>
                    <p class="card-text">${role}</p>
                    <p class="card-text">${obj.id}</p>
                    <p class="card-text">${getExtraInfo}</p>
                    <p class="card-text"><a href="mailto:${obj.email}">${obj.email}</a></p>
                </div>
            </div>
        `
    }

    for (let i = 0; i < teamMembers.length; i++) {
        teamString = teamString + employeeCards(teamMembers[i]);
    }

    fs.writeFileSync("./dist/index.html", htmlTemplate(teamString));
    console.log('Page created in dist folder!');
}

module.exports = makePage;

// // Creates the team dashboard webpage.
// fs.writeFileSync("./dist/index.html", htmlTemplate.htmlString);