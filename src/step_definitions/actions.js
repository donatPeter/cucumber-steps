const { By, until } = require('selenium-webdriver');

class Actions {
  static async click(id) {
    await this.world.driver.wait(until.elementLocated(By.id(id)), 10000, 'Could not locate the child element within the time specified');
    return this.world.driver.findElement(By.id(id)).click();
  }
}

module.exports = [
  [/I click on the HTML element with the ID "([^"]*)"/, Actions.click],
];
