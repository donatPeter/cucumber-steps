const { expect } = require('chai');

class DOMAssertions {
  static async isDisabled(id) {
    const elementIsDisabled = await this.world.driver.elementIsDisabled(id);
    expect(elementIsDisabled).to.equal(true);
  }
}

module.exports = [
  [/The HTML element with "([^"]*)" is disabled?/, DOMAssertions.isDisabled],
];
