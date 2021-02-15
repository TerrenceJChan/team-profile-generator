const { builtinModules } = require("module");

// This is the HTML template to be used. Bootstrap styling is used.
// teamString is where each team member's information will be placed.
const htmlTemplate = (teamString) => {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
</head>

<body class="ml-2 mr-2">
    <h1 class="text-center">Team Dashboard</h1>

    <div class="card-deck">
        ${teamString}
    </div>
</body>

</html>
`;
}

module.exports = htmlTemplate;