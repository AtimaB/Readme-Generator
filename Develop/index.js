const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown.js");

const writeFileAsync = util.promisify(fs.writeFile);


// array of questions for user
function promptUser() {
    return inquirer.prompt([ 
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
            message: "Please provide the installation instructions of your project?"
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
    ]);
}
// const questions = [
    

// function to write README file
// function writeToFile(fileName, data) {
//     return writeFileAsync(fileName, data);
// }

// function to initialize program
async function init() {
    console.log ("Please enter all the details about your project.")
    try{
        const answers = await promptUser();
        const markdown = generateMarkdown(answers);
        await writeFileAsync("readme.md" , markdown);
        console.log("Successfully created readme.md!");
    } catch(err) {
        console.log(err);
    }
} 

 
// function call to initialize program
init();
