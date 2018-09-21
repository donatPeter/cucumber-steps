const webdriver = require('selenium-webdriver');

class Driver {
  constructor() {
    this.driver = new webdriver.Builder()
      .forBrowser('chrome')
      .build();
  }

  get() {
    return this.driver;
  }
}

module.exports = Driver;
