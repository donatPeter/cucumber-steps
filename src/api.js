const cucumber = require('cucumber');
const steps = require('./step_definitions/actions');
const DriverFactory = require('./utils/driver');

export default class Api {
  constructor() {
    this.driver = new DriverFactory().driver;
  }

  hook() {
    cucumber.BeforeAll(() => this.connect());
    cucumber.AfterAll(() => this.cleanup());
  }

  async cleanup() {
    await this.driver.quit();
  }

  connect() {
    steps.forEach(([pattern, fn]) => {
      cucumber.defineStep(pattern, fn);
    });
  }
}
