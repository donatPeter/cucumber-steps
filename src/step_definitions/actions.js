const { By, until } = require('selenium-webdriver');

const click = async function (id) {
  await this.driver.wait(until.elementLocated(By.id(id)), 10000, 'Could not locate the child element within the time specified');
  return this.driver.findElement(By.id(id)).click();
};

module.exports = [
  [/I click on the HTML element with the ID "([^"]*)"/, click],
];
