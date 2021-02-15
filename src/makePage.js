const fs = require('fs');
const htmlTemplate = require('./htmlTemplate.js');

// Generates HTML page.
const makePage = (teamMembers) => {
    let teamString = "";

    // EmployeeCards adds the variable team members to the body section of the HTML template.
    const employeeCards = (obj) => {
        let role = obj.getRole();
        let extraInfo;
        if (role === 'Intern') {
            extraInfo = `School: ${obj.school.school}`;
        } else if (role === 'Engineer') {
            extraInfo = `<a href="https://github.com/${obj.github.github}">GitHub Account - ${obj.github.github}</a>`;
        } else {
            extraInfo = `Office Number: ${obj.officeNumber.officeNumber}`;
        }

        // Team members are added as Bootstrap cards.
        return `
            <div class="card">
                <div class="card-body">
                    <h2 class="card-title">${obj.employeeName}</h2>
                    <p class="card-text">Role: ${role}</p>
                    <p class="card-text">ID Number: ${obj.id}</p>
                    <p class="card-text">${extraInfo}</p>
                    <p class="card-text"><a href="mailto:${obj.email}">${obj.email}</a></p>
                </div>
            </div>
        `
    }

    // Creates a long string holding each team member's information to inject into the template.
    for (let i = 0; i < teamMembers.length; i++) {
        teamString = teamString + employeeCards(teamMembers[i]);
    }

    // Creates or overwrites the HTML file.
    fs.writeFileSync("./dist/index.html", htmlTemplate(teamString));
    console.log('Page created in dist folder!');
}

module.exports = makePage;