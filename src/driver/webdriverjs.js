const webdriver = require('selenium-webdriver');
const { By, until } = require('selenium-webdriver');
const fs = require('fs');

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

  async waitForSeconds(sec) {
    const milliSec = sec * 1000;
    return this.driver.sleep(milliSec);
  }

  async screenshot() {
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
}

module.exports = Driver;
