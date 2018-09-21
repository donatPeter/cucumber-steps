const webdriver = require('selenium-webdriver');
const { By, until } = require('selenium-webdriver');

class Driver {
  constructor() {
    this.driver = new webdriver.Builder()
      .forBrowser('chrome')
      .build();
  }

  get() {
    return this.driver;
  }

  async clickOn(id) {
    await this.driver.wait(until.elementLocated(By.id(id)), 10000, 'Could not locate the child element within the time specified');
    return this.driver.findElement(By.id(id)).click();
  }

  async getCurrentURL() {
    return this.driver.getCurrentUrl();
  }

  async quitBrowser() {
    return this.driver.quit();
  }

  async getURL(url) {
    return this.driver.get(url);
  }

  async wait(sec) {
    const milliSec = sec * 1000;
    return this.driver.sleep(milliSec);
  }

  async screenshot() {
    await this.driver.screenshot();
  }
}

module.exports = Driver;
