// function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}
  ![License: ${data.license}](https://img.shields.io/badge/License-${encodeURI(data.license)}-green.svg)
   

  ## Description
  ${data.description}
    
  ## Table of Content 
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Contact](#contact)
   
  ## Installation
  ${data.installation}
    
  ## Usage
  ${data.usage}
   
  ## License
  This application is covered by ${data.license} license.
    
  ## Contributing
  ${data.contributing}
    
  ## Tests
  ${data.tests}
    
  ## GitHub
  http://www.github.com/${data.github}
    
  ## Contact
  If you have any questions about this application,please contact  ${data.email}
  #### Contact Instruction
  ${data.question}
    `;
}




module.exports = generateMarkdown;
