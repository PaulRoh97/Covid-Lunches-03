# Covid-Lunches-03

## Notes)
- download the "config.js" and "config.json" from the Discord "stakeholder-dialog" for "Download More Ram"
  
## Required Technologies)
- Node.js 14.16.0
- run "npm install" to install dependencies for running/testing
  
## Running Instructions)
- run "npm start" from "Covid Lunches/express/express-bootstrap" folder to run application
- navigate to "localhost:3000/" to view application
  - list of urls:
    - homepage: localhost:3000/
    - profile settings: localhost:3000/profile
    - inner page: localhost:3000/inner-page
  - non url navigations:
    - login page: from homepage, click on the login button
    - sign up: from homepage, click on the sign up button
  
## Test Instructions)
- run the running instructions -> "node app"
- while application is running, run the following scripts individually from the "Covid Lunches/express/express-bootstrap" folder:
  - npm test -- login.test.js
  - npm test -- profilePage.test.js
  - npm test -- innerPage.test.js
  - npm test -- menu.test.js
