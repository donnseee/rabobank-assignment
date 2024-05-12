# rabobank-assignment

### Overview

This project repo contains the automated test solution for automationpractice website(http://www.automationpractice.pl/index.php). The project is using playwright-bdd as base framework and typescript for steps implementation.


### How to install dependencies
- run npm install 
 
### How to run the tests 
1. *npm run test* (use this as default option)
   - To run tests without launching the ui (browser)
  
2. *npm run ui*
   - To run tests using a browser
  
3. *npm run debug*
   - To run tests in debug mode


### How to view report 
- run npx playwright show-report
- report during CI is published as an artifact


### CI/CD
- At the moment, CI only runs during push on main branch. This can be updated when needed.
