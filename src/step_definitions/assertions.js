const { expect } = require('chai');

class Assertions {
  static async isEqual(url) {
    const currentURL = await this.world.driver.getCurrentURL();
    expect(currentURL).to.equal(url);
  }
}

module.exports = [
  [/I should be on "([^"]*)"/, Assertions.isEqual],
];
