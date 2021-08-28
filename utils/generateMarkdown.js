// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    let licenseArray = license.split(` `);
    let licenseName = licenseArray[0];
    return `![License](https://img.shields.io/badge/License-${licenseName}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  return `
  # ${response.title}

  ${renderLicenseBadge(response.license)}

  ${response.description}

  [Preview Application](${response.preview})

  ## Table of Contents  
  ### * [Installation](#installation)  
  ### * [Usage](#usage) 
  ### * [Tests](#tests)
  ### * [Contributors](#contributors)
  ### * [Contributions](#contributions)
  ### * [Licensing](#licensing)
  ### * [Questions](#questions)

  ## Installation
  #### ${response.installation}
  
  ## Usage
  #### ${response.usage}
  
  ## Tests
  #### ${response.tests} testing was used to ensure quality on this Application.

  ## Contributors
  #### ${response.contributors}

  ## Contributions
  #### ${response.contributions}

  ## Licensing
  ${renderLicenseBadge(response.license)}
  #### ${renderLicenseLink(response.license)}
  #### ${renderLicenseSection(response.license)}
  
  ## Questions
  #### *${response.github}* — [GitHub Profile](https://github.com/${response.github})
  #### Contact me or ask me questions at [${response.email}](mailto:${response.email}).
  `;
}

module.exports = generateMarkdown;
