const webdriver = require('../../../../../Library/Caches/typescript/2.9/node_modules/@types/selenium-webdriver');

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
