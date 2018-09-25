/**
 * @static
 * Utilities steps
 */
class Utilities {
  /**
   * @param {*} sec 
   * @example
   * I wait (\d+) seconds?
   * 
   * I wait 5 seconds
   */
  static async waitForSeconds(sec) {
    return this.world.driver.waitForSeconds(sec);
  }

  /**
   * @example
   * I take a screenshot
   */
  static async takeScreenshot() {
    return this.world.driver.screenshot();
  }
}

module.exports = [
  [/I wait (\d+) seconds?/, Utilities.waitForSeconds],
  [/I take a screenshot/, Utilities.takeScreenshot],
];
