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
    await this.world.driver.wait(until.elementLocated(By.id(id)), 10000, 'Could not locate the child element within the time specified');
    return this.world.driver.findElement(By.id(id)).click();
  }
}

module.exports = Driver;
