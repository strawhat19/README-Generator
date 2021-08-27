// README Generator
console.log(`Professional README Generator for Busy Developers!`);

// TODO: Include packages needed for this application
// Declaring Constants
const fs = require(`fs`);
const inquirer = require(`inquirer`);

// TODO: Create an array of questions for user input
const questions = [
    {
        type: `input`,
        message: `What is the Title of the Application?`,
        name: `title`
    },{
        type: `input`,
        message: `Please write a short Description of the Applications Function.`,
        name: `description`
    },{
        type: `input`,
        message: `What are the Installation Instructions?`,
        name: `installation`
    },{
        type: `input`,
        message: `What are the Directions for Usage?`,
        name: `usage`
    },{
        type: `input`,
        message: `What license(s) does this Application utilize?`,
        name: `licenses`
    },{
        type: `input`,
        message: `Who contributed to this Application?`,
        name: `contributors`
    },{
        type: `input`,
        message: `What tests were made to ensure quality on this project?`,
        name: `description`
    }
]

// Function call to initialize app
init();

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}