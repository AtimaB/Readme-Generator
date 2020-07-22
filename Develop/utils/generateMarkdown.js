// function to generate markdown for README
function generateMarkdown(data) {

  return `# ${data.title}
  ![License: ${data.license}](https://img.shields.io/badge/License-${encodeURI(data.license)}-green.svg)
   

  ## Description
  ${data.description}
    
  ## Table of Contents 
  * [Installation](#installation)
  * [Usage](#usage-information)
  * [License](#license)
  * [Contribution](#contribution-guidelines)
  * [Tests](#tests-instructions)
  * [Questions](#questions)
   
  ## Installation
  ${data.installation}
    
  ## Usage Information
  ${data.usage}
       
  ## Contribution Guidelines
  ${data.contributing}
    
  ## Tests Instructions
  ${data.tests}
  
  ## License
  This application is covered by ${data.license} license.
    
  ## Questions
  #### GitHub
  http://www.github.com/${data.github}

  If you have any questions about this application,please contact  ${data.email}
  #### Contact Instruction
  ${data.question}
    `;
}




module.exports = generateMarkdown;
