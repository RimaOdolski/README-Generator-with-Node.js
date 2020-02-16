var inquirer = require("inquirer");
var fs = require('fs');

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