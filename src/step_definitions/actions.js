/**
 * @static
 * Move and keyboard usage related steps
 */
class Actions {
  /**
   * @param {string} id The id of the HTML select element
   * @example
   * I click on the HTML element with the ID "([^"]*)"
   * 
   * I click on the HTML element with the ID "button-id"
   */
  static async clickOnElement(id) {
    await this.world.driver.clickOnElement(id);
  }

  /**
   * @param {string} id The id of the HTML select element
   * @example
   * I hover over the HTML element with the ID "([^"]*)"
   * 
   * I hover over the HTML element with the ID "button-id"
   */
  static async hoverOverElement(id) {
    await this.world.driver.hoverOverElement(id);
  }

  /**
   * @param {string} id The id of the HTML select element
   * @param {string} key The keys are sent to the element
   * @example
   * I send key "([^"]*)" in "([^"]*)" element
   * 
   * I send key "Hello World!" in "text-box-id" element
   */
  static async sendKeyToElement(id, key) {
    await this.world.driver.sendKeyToElement(id, key);
  }
}

module.exports = [
  [/I click on the HTML element with the ID "([^"]*)"/, Actions.clickOnElement],
  [/I hover over the HTML element with the ID "([^"]*)"/, Actions.hoverOverElement],
  [/I send key "([^"]*)" in "([^"]*)" element/, Actions.sendKeyToElement],
];
