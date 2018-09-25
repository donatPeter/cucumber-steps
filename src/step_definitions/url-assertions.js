const { expect } = require('chai');

/**
 * @static
 * URL assertion related steps
 */
class URLAssertions {
  /**
   * 
   * @param {string} url The URL to check
   * @example
   * I should be on "([^"]*)"
   * 
   * Then I should be on "http://localhost:3000/checkout"
   */
  static async isCurrentURLEqual(url) {
    const currentURL = await this.world.driver.getCurrentURL();
    expect(currentURL).to.equal(url);
  }
}

module.exports = [
  [/I should be on "([^"]*)"/, URLAssertions.isCurrentURLEqual],
];
