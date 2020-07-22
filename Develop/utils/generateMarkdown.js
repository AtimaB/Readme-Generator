// function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}
  ![License: ${data.license}](https://img.shields.io/badge/License-${encodeURI(data.license)}-green.svg)
   

  ## Description
  ${data.description}
    
  ## Table of Content 
  * [Installation](#installation)
  * [Usage](#usage-informations)
  * [License](#license)
  * [Contributing](#contributing-guidelines)
  * [Tests](#tests-insrtuctions)
  * [Contact](#contact)
   
  ## Installation
  ${data.installation}
    
  ## Usage Informations
  ${data.usage}
   
  ## License
  This application is covered by ${data.license} license.
    
  ## Contributing Guidelines
  ${data.contributing}
    
  ## Tests Instructions
  ${data.tests}
    
  ## GitHub Username
  http://www.github.com/${data.github}
    
  ## Contact
  If you have any questions about this application,please contact  ${data.email}
  #### Contact Instruction
  ${data.question}
    `;
}




module.exports = generateMarkdown;
