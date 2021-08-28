// README Generator
console.log(`Professional README Generator for Busy Developers!`);

// TODO: Include packages needed for this application
// Declaring Constants
const fs = require(`fs`);
const inquirer = require(`inquirer`);
const generateMarkdown = require(`./utils/generateMarkdown`);

// TODO: Create an array of questions for user input
const questions = [
    {
        name: `github`,
        type: `input`,
        message: `What is your Github Username?`,
        validate(username) {
            if (username == ``) {
              return `You must enter your Github Username`;
            }
            return true;
        }
    },{
        name: `email`,
        type: `input`,
        message: `Please enter your Email Address.`,
        filter(email) {
            return email.toLowerCase();
        },
        validate(email) {
            if (email == ``) {
              return `You must enter a valid Email Address`;
            }
            return true;
        }
    },{
        name: `title`,
        type: `input`,
        message: `What is the Title of the Application?`,
        default: `Generic App`
    },{
        name: `description`,
        type: `input`,
        message: `Please write a short Description of the Applications Function.`,
        default: `A Generic App`
    },{
        name: `ifPreview`,
        type: `confirm`,
        message: `Do you have a valid link to either an Image, GIF, or Video of the Application?`,
        default: false
    },{
        name: `preview`,
        type: `input`,
        message: `Please enter a link to an Image // GIF // Video of the Application`,
        when(response) {
            return response.ifPreview !== false;
        }
    },{
        name: `installation`,
        type: `input`,
        message: `What are the Application Installation Instructions?`,
        default: `NPM Install`
    },{
        name: `usage`,
        type: `input`,
        message: `What are the Directions for Usage?`,
        default: `Node.js`
    },{
        name: `ifLicense`,
        type: `confirm`,
        message: `Does this Application use a License?`,
        default: false
    },{
        name: `license`,
        type: `list`,
        message: `What license does this Application utilize?`,
        choices: [
            `MIT // Massachusetts Institute of Technology License`,
            `BSD // Berkeley Software Distribution License`,
            `ISC // Internet Software Consortium License`,
            `GNU // GPL General Public License`,
            `APACHE // Apache License`
          ],
        default: 0,
        when(response) {
            return response.ifLicense !== false;
        }
    },{
        name: `tests`,
        type: `input`,
        message: `What Tests were made to Ensure Quality on this Application?`,
        default: `Jest, NPM Tests`
        
    },{
        name: `contributors`,
        type: `input`,
        message: `Who contributed to this Application?`,
        default: `Just Me!`
    },{
        name: `contributions`,
        type: `input`,
        message: `How can other Developers Contribute to this Application?`,
        default: `Fork it, Clone it, Branch it!`
    }
]

// TODO: Create a function to write README file
function writeToFile(response) {
    fs.writeFile(`README-Test.md`, generateMarkdown(response), (error => {
            error ? console.log(error) : console.log(`README Successfully Generated! You can find it within this folder!`);
        })
    )
}

// TODO: Create a function to initialize app
init = () => {

    // Use Inquirer
    inquirer
    .prompt(questions)
    .then(response => {
        console.log(response);
        generateMarkdown(response);
        writeToFile(response);
        console.log(`README Successfully Generated! You can find it within this folder!`);
        return response;
    })
    .catch(error => {
        if (error.isTtyError) {
        console.log(`Prompt couldn't be rendered in the current environment.`);
        } else {
        console.log(error);
        }
    });

}

// Function call to initialize app
init();