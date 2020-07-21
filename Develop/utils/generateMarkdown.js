// function to generate markdown for README
function generateMarkdown(data) {
  const licenseAbbr = data.license.replace("", "%20");

  return `# ${data.title}
  ![License: ${data.license}](https://img.shields.io/badge/License-${licenseAbbr}-blue.svg)
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
    ## Contact
    If you have any questions about the project,please contact  ${data.email}
    ## GitHub Username
    ${data.github}
    ## Contact Instructions
    ${data.question}
`;
}

module.exports = generateMarkdown;
