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

  static async isVisible(id) {
    const elementIsVisible = await this.world.driver.elementIsVisible(id);
    expect(elementIsVisible).to.equal(true);
  }

  static async isNotVisible(id) {
    const elementIsVisible = await this.world.driver.elementIsVisible(id);
    expect(elementIsVisible).to.equal(false);
  }
}

module.exports = [
  [/The HTML element with "([^"]*)" is disabled?/, DOMAssertions.isDisabled],
  [/The HTML element with "([^"]*)" is enabled?/, DOMAssertions.isEnabled],
  [/The "([^"]*)" element should be visible$/, DOMAssertions.isVisible],
  [/The "([^"]*)" element should not be visible$/, DOMAssertions.isNotVisible],
  // Aliases
  [/The "([^"]*)" element is not visible$/, DOMAssertions.isNotVisible],
  [/The "([^"]*)" element is visible$/, DOMAssertions.isVisible],
];
