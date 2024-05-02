// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license === 'MIT') {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]`
    } else if (license === 'Apache 2.0') {
        return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]`
    } else if (license === 'GPL 3.0') {
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)]`
    } else if (license === 'BSD 3-Clause') {
        return `[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]`
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    if (license === 'MIT') {
        return `[MIT License](https://opensource.org/licenses/MIT)`
    } else if (license === 'Apache 2.0') {
        return `[Apache 2.0 License](https://opensource.org/licenses/Apache-2.0)`
    } else if (license === 'GPL 3.0') {
        return `[GPL 3.0 License](https://www.gnu.org/licenses/gpl-3.0)`
    } else if (license === 'BSD 3-Clause') {
        return `[BSD 3-Clause License](https://opensource.org/licenses/BSD-3-Clause)`
    } else {
        return '';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
    if (license === 'None') {
        return '';
    } else {
        return `This project is licensed under the ${license} license.`
    }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `## ${data.title}
    ${renderLicenseBadge(data.license)}
    ${data.title}
## Description
    ${data.description}
## Installation
    ${data.installation}
## Table of Contents
    * [Installation](#installation)
    * [Usage](#usage)
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [License](#license)
    * [GitHub](#github)
    * [Questions](#questions)
## Usage
    ${data.usage}
## Contributing
    ${data.contributing}
## Tests
    ${data.tests}
## License
    ${renderLicenseSection(data.license)}
    ${renderLicenseLink(data.license)}
## GitHub
    my GitHub username is ${data.github} here is a link to my GitHub profile: [GitHub Profile](https://github.com/ElijahWard4)
## Questions
    if you have any questions, please contact me at ${data.email} thanks!
`;
}

module.exports = generateMarkdown;
