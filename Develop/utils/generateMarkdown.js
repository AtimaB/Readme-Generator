// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    ## Description
    ${data.description}
    ## Table of Contents 
    * [Installation](#installation)
    * [Usage](#usage)
    * [Credits](#credits)
    * [License](#license)
    * [Tests](#tests)
    * [Questions](#questions)
    * [Contributing](#contributing)
    * [GitHub](#github)
    * [Email](#email) 
    ## Installation
    ${data.installation}
    ## Usage Information
    ${data.usage}
    ## License
    ${data.licens}
    ## Contributing Guidelines
    ${data.contributing}
    ## Tests Instructions
    ${data.tests}
    ## Email Address
    ${data.email}
    ## GitHub Username
    ${data.github}
    ### Contact Instructions
    ${data.question}
`;
}

module.exports = generateMarkdown;
