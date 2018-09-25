const webdriver = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');
const { By, until } = require('selenium-webdriver');
const fs = require('fs');
const { randexp } = require('randexp');

class Driver {
  constructor(config) {
    if (config.browser === 'chrome') {
      this.options = new chrome.Options();
    } else {
      this.options = new firefox.Options();
    }

    if (config.headless) this.options.headless();
    if (config.mobile) this.options.setMobileEmulation(config.mobile);
    if (config.incognito) this.options.addArguments('---incognito');

    this.driver = new webdriver.Builder()
      .forBrowser(config.browser)
      .setChromeOptions(this.options)
      .build();
  }

  async clickOnElement(id) {
    await this.driver.wait(until.elementLocated(By.id(id)), 10000, 'Could not locate the child element within the time specified');
    return this.driver.findElement(By.id(id)).click();
  }

  async isCurrentURLEqual() {
    return this.driver.getCurrentUrl();
  }

  async quitBrowser() {
    return this.driver.quit();
  }

  async openUrl(url) {
    return this.driver.get(url);
  }

  async waitForSeconds(sec) {
    const milliSec = sec * 1000;
    return this.driver.sleep(milliSec);
  }

  async takeScreenshot() {
    const pic = await this.driver.takeScreenshot();
    const currentPath = process.cwd();
    const targetPath = `${currentPath}/screenshots/`;
    const fileName = `${new Date().toISOString()}.png`;
    if (!fs.existsSync(targetPath)) {
      fs.mkdirSync(targetPath);
      fs.writeFileSync(targetPath + fileName, pic, 'base64');
    } else {
      fs.writeFileSync(targetPath + fileName, pic, 'base64');
    }
  }

  async refreshPage() {
    return this.driver.navigate().refresh();
  }

  async navigateBack() {
    return this.driver.navigate().back();
  }

  async hoverOverElement(id) {
    const element = await this.driver.wait(until.elementLocated(By.id(id)), 10000, 'Could not locate the child element within the time specified');
    return this.driver.actions().mouseMove(element).perform();
  }

  async sendKeyToElement(id, key) {
    const element = await this.driver.wait(until.elementLocated(By.id(id)), 10000, 'Could not locate the child element within the time specified');
    return element.sendKeys(key);
  }

  async filloutFormFields(hash) {
    const promises = [];
    hash.raw().forEach(async ([field, value]) => {
      const arr = field.split('=');
      promises.push(this.driver.wait(until.elementLocated(By.id(arr[1])), 10000, 'Could not locate the child element within the time specified').sendKeys(value));
    });
    return Promise.all(promises);
  }

  async filloutFormFieldsWithRandom(hash) {
    const promises = [];
    hash.raw().forEach(async ([field, value]) => {
      const arr = field.split('=');
      const replaced = value.replace(/[/]+/g, '|');
      const random = randexp(replaced);
      promises.push(this.driver.wait(until.elementLocated(By.id(arr[1])), 10000, 'Could not locate the child element within the time specified').sendKeys(random));
    });
    return Promise.all(promises);
  }

  async isElementDisabled(id) {
    const element = await this.driver.wait(until.elementLocated(By.id(id)), 10000, 'Could not locate the child element within the time specified');
    const isEnabled = await element.isEnabled();
    return !isEnabled;
  }

  async selectFromDropdown(option, id) {
    const selectElement = await this.driver.wait(until.elementLocated(By.id(id)), 10000, 'Could not locate the child element within the time specified');
    await selectElement.findElement(webdriver.By.css(`option[value='${option}']`)).click();
  }

  async isElementVisible(id) {
    let isError = false;
    try {
      await this.driver.wait(until.elementLocated(By.id(id)), 10000, 'Could not locate the child element within the time specified');
    } catch (err) {
      isError = true;
    }
    return !isError;
  }

  async doesElementTextContainsText(id) {
    return this.driver.wait(until.elementLocated(By.id(id)), 10000, 'Could not locate the child element within the time specified').getText();
  }
}

module.exports = Driver;
