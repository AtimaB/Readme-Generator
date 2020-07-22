// function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}
  ![License: ${data.license}](https://img.shields.io/badge/License-${encodeURI(data.license)}-green.svg)
    ## Description
    ${data.description}
    ## Table of Contents 
    * [Installation](#installation)
    * [Usage](#usage)
    * [License](#license)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Contact](#email)
    ## Installation
    ${data.installation}
    ## Usage Information
    ${data.usage}
    ## License
    ${data.license}
    ## Contributing Guidelines
    ${data.contributing}
    ## Tests Instructions
    ${data.tests}
    ## GitHub Username
    ${data.github}
    ## Contact
    If you have any questions about the project,please contact  ${data.email}
    ## Contact Instructions
    ${data.question}
`;
}

module.exports = generateMarkdown;
