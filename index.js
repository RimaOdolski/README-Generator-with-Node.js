let inquirer = require("inquirer");
let fs = require('fs');
let writeFileAsync = util.promisify(fs.writeFile);
const util = require("util");



inquirer.prompt([
    {
        type:"input",
        name: "username",
        message: "What is your Github username?",
    },

    {
        type:"input",
        name: "project",
        message: "What is your project name?",
    },
    {
        type:"input",
        name:"description",
        message:"Please write a short description of your project?",
    },
    {

        type:"list",
        name:"license",
        message: "What kind of license should your project have? User can choose from list of items?",
        choices:[
            "MIT",
            "Mozilla",
            "Zlib",
        ]
    },
    {
        type:"input",
        name:"dependicies",
        message:"What command should be run to install dependencies?"
    },

    {
        type:"input",
        name:"test",
        message:"What command should be run to run tests?",
    },
    {
        type:"input",
        name:"additionalInfo",
        message:"What does the user need to know about using the repo?",
    },
    {
        type:"input",
        name:"contribute",
        message:"What does the user need to know about contributing to the repo?",

    },

])


function generateReadMe (answers) {
 return `
 ##  ${answers.project}

 ## Description
  ${answers.description}
 
 ## Table of Contents 
 
 
 * [Installation](#installation)
 
 * [Usage](#usage)
 
 * [License](#license)
 
 * [Contributing](#contributing)
 
 * [Tests](#tests)
 
 * [Questions](#questions)
 
 ## Installation
 ${answers.dependencies}
 
 ## Usage
 ${answers.additionalInfo}
 
 
 ## License
 ${answers.choices}
 ## Contributing
 ${answers.contribute}
 
 
 ## Tests
 ${answers.test}
 
 
 ## Questions
 
 <img src="" alt="avatar" style="border-radius: 16px" width="30" />
 
 If you have any questions about the repo, open an issue or contact [${answers.username}](https://api.github.com/users/${answers.username}).
 `



}

promptUser()
.then(function(answers){

    const readMe = generateReadMe (answers);
    return writeFileAsync ("template.md", readMe);
})
.then(function() {
    console.log("Successfully wrote to template.md");
  })

