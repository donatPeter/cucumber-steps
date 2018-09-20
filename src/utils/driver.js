const webdriver = require('selenium-webdriver');

export default class DriverFactory {
  constructor() {
    this.driver = new webdriver.Builder()
      .forBrowser('chrome')
      .build();
  }

  get() {
    return this.driver;
  }
}
