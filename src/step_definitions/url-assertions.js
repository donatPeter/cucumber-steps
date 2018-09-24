const { expect } = require('chai');

class URLAssertions {
  static async isEqual(url) {
    const currentURL = await this.world.driver.getCurrentURL();
    expect(currentURL).to.equal(url);
  }
}

module.exports = [
  [/I should be on "([^"]*)"/, URLAssertions.isEqual],
];
