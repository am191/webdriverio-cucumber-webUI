# WebdriveIO + Cucumber Web UI Test Automation Project

Small test suite focused on University of Latvia's website search functionality. **The purpose for the project is to learn more about Cucumber and WebdriverIO frameworks in practice.**

Currently scenarios run consecutively, but have written to be independent so each can be ran in parallel.

### Key Features
- **Language**: Javascript
- **Design Pattern**: Page Object Model (POM) 
- **Browser Support**: Chromium, running single agent


### Prerequisites
- Node.js (v22.4.1 used)
- npm (v10.8.2 used)
- wdio and cucumber package

### Execution

Run `npx wdio run wdio.conf.js` command in the root project directory


## Test execution results
Currently, `spec` library for execution results is used, where everything is reported through the command line. It is planned to add another reporting library for outputting results into another file


## Future plans
- [ ]  Configure tests to run in parallel on several agents
- [ ]  Add reporter library that outputs formatted test result file 

