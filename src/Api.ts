import cucumber, { defineStep, AfterAll, setWorldConstructor } from 'cucumber';
import webdriver from 'selenium-webdriver';
import steps from './step_definitions/Actions';

import DriverFactory from './utils/Driver';

export class Api {
  private driver: webdriver.ThenableWebDriver;
  constructor() {
    this.driver = new DriverFactory().driver;
  }

  public hook() {
    cucumber.BeforeAll(() => this.connect());
    cucumber.AfterAll(() => this.cleanup());
  }

  private async cleanup() {
    await this.driver.quit();
  }

  private connect() {
    steps.forEach(([pattern, fn]) => {
      cucumber.defineStep(pattern, fn);
    });
  }
}
