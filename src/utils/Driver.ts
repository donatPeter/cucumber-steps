import webdriver from 'selenium-webdriver';

export default class DriverFactory {
  private _driver: webdriver.ThenableWebDriver;
  constructor() {
    this._driver = new webdriver.Builder()
      .forBrowser('chrome')
      .build();
  }

  get driver(): webdriver.ThenableWebDriver {
    return this._driver;
  }
}
