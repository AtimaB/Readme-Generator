const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
let generateMarkdown = require('./utils/generateMarkdown');

const writeFileAsync = util.promisify(fs.writeFile);



// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of your project title?"
    },
    {
        type: "input",
        name: "description",
        message: "Please enter the description of your project?"
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter the installation instructions of your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "please enter the usage information of your project?"
    },
    {
        type: "choice",
        name: "license",
        message: "Please choose your license?"
    },
    {
        type: "input",
        name: "contributing",
        message: "What is the contributing guideline of your project?"
    },
    {
        type: "input",
        name: "tests",
        message: "Please provide tests instructions of your project?"
    },
    {
        type: "input",
        name: "email",
        message: "please enter your Email address."
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your GitHub Username."
    },
    {
        type: "input",
        name: "question",
        message: "Please provide the insrtuctions on how to reach you."
    },
];

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
