class DOMAssertions {
  static async isDisabled(id) {
    await this.world.driver.elementIsDisabled(id);
  }
}

module.exports = [
  [/The HTML element with "([^"]*)" is disabled?/, DOMAssertions.isDisabled],
];
