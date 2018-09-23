const { expect } = require('chai');

class DOMAssertions {
  static async isDisabled(id) {
    const elementIsDisabled = await this.world.driver.elementIsDisabled(id);
    expect(elementIsDisabled).to.equal(true);
  }

  static async isEnabled(id) {
    const elementIsDisabled = await this.world.driver.elementIsDisabled(id);
    expect(elementIsDisabled).to.equal(false);
  }
}

module.exports = [
  [/The HTML element with "([^"]*)" is disabled?/, DOMAssertions.isDisabled],
];
