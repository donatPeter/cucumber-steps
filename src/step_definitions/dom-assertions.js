const { expect } = require('chai');

/**
 * @static
 * DOM assertion related steps
 */
class DOMAssertions {
  /**
   * 
   * @param {string} id The id of the HTML select element
   * @example
   * The HTML element with "([^"]*)" is disabled?
   * 
   * Then The HTML element with "signin-button-id" is disabled
   */
  static async isElementDisabled(id) {
    const elementIsDisabled = await this.world.driver.isElementDisabled(id);
    expect(elementIsDisabled).to.equal(true);
  }

  /**
   * 
   * @param {string} id The id of the HTML select element
   * @example
   * The HTML element with "([^"]*)" is enabled?
   * 
   * Then The HTML element with "signin-button-id" is enabled
   */
  static async isElementEnabled(id) {
    const elementIsEnabled = await this.world.driver.isElementDisabled(id);
    expect(elementIsEnabled).to.equal(false);
  }

  /**
   * 
   * @param {string} id The id of the HTML select element
   * @example
   * The "([^"]*)" element should be visible$
   * The "([^"]*)" element is visible$
   * 
   * Then The "logout-button-id" element is visible
   */
  static async isElementVisible(id) {
    const elementIsVisible = await this.world.driver.isElementVisible(id);
    expect(elementIsVisible).to.equal(true);
  }

  /**
   * 
   * @param {string} id The id of the HTML select element
   * @example
   * The "([^"]*)" element should not be visible$
   * The "([^"]*)" element is not visible$
   * 
   * Then The "logout-button-id" element is not visible
   * 
   */
  static async isElementNotVisible(id) {
    const elementIsVisible = await this.world.driver.isElementVisible(id);
    expect(elementIsVisible).to.equal(false);
  }

  /**
   * 
   * @param {string} expectation The expected text to contain
   * @param {string} id The id of the HTML select element
   * @example
   * I should see "([^"]*)" in the "([^"]*)" element text$
   * 
   * Then I should see "Sign up" in the "signup-button-id" element text
   */
  static async doesElementTextContainsText(expectation, id) {
    const elementText = await this.world.driver.doesElementTextContainsText(id);
    expect(elementText).to.equal(expectation);
  }
}

module.exports = [
  [/The HTML element with "([^"]*)" is disabled?/, DOMAssertions.isElementDisabled],
  [/The HTML element with "([^"]*)" is enabled?/, DOMAssertions.isElementEnabled],
  [/The "([^"]*)" element should be visible$/, DOMAssertions.isElementVisible],
  [/The "([^"]*)" element should not be visible$/, DOMAssertions.isElementNotVisible],
  [/I should see "([^"]*)" in the "([^"]*)" element text$/, DOMAssertions.doesElementTextContainsText],
  // Aliases
  [/The "([^"]*)" element is not visible$/, DOMAssertions.isElementNotVisible],
  [/The "([^"]*)" element is visible$/, DOMAssertions.isElementVisible],
];
