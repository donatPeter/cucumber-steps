# cucumber-steps

This is a Cucumber steps library

## Install

1) Install the module by `npm i cucumber-steps` in your project
2) Write your `*.feature` file using the module's API
3) Hook in the steps to your project by adding the following to **/features/step_definitions/world-gherkin.js:

```
const cucumber = require('cucumber');
const world = require('cucumber-steps');
world.gherkin(cucumber);
```

4)Initialize the test environment by adding the following to **/features/support/world.js:

```
const cucumber = require('cucumber');
const world = require('cucumber-steps');

const driver = new world.World(options);
driver.hook(cucumber);
```

Possible configurations during initialization (options parameter):

```
browser: string (supported: 'chrome' or 'firefox')
headless: boolean
mobile: {
  deviceName: string (e.g.: 'Pixel 2', 'Galaxy S5', etc)
}
```

5) Run the tests by the `npx cucumber-js` command


## API

- Open the "([^"]*)"
- I click on the HTML element with the ID "([^"]*)"
- I should be on "([^"]*)"
- etc


## Inspired

This module is inspired by [cucumber-mink](https://github.com/Adezandee/cucumber-mink).
