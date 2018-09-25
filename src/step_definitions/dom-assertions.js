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
    const elementIsDisabled = await this.world.driver.elementIsDisabled(id);
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
    const elementIsDisabled = await this.world.driver.elementIsDisabled(id);
    expect(elementIsDisabled).to.equal(false);
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
    const elementIsVisible = await this.world.driver.elementIsVisible(id);
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
    const elementIsVisible = await this.world.driver.elementIsVisible(id);
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
    const elementText = await this.world.driver.elementTextContainsText(id);
    expect(elementText).to.equal(expectation);
  }
}

module.exports = [
  [/The HTML element with "([^"]*)" is disabled?/, DOMAssertions.isDisabled],
  [/The HTML element with "([^"]*)" is enabled?/, DOMAssertions.isEnabled],
  [/The "([^"]*)" element should be visible$/, DOMAssertions.isVisible],
  [/The "([^"]*)" element should not be visible$/, DOMAssertions.isNotVisible],
  [/I should see "([^"]*)" in the "([^"]*)" element text$/, DOMAssertions.elementTextContainsText],
  // Aliases
  [/The "([^"]*)" element is not visible$/, DOMAssertions.isNotVisible],
  [/The "([^"]*)" element is visible$/, DOMAssertions.isVisible],
];
