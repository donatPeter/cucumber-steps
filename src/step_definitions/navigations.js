/**
 * @static
 * Navigation related steps
 */
class Navigations {
  /**
   * @param {string} url Url to open
   * @example
   * I open the "([^"]*)
   * 
   * Given I open the "http://localhost:3000" URL
   */
  static async openUrl(url) {
    this.world.driver.getURL(url);
  }

  /**
   * @example
   * I reload the page
   */
  static async refreshPage() {
    this.world.driver.refresh();
  }

  /**
   * @example
   * I move backward one page
   */
  static async navigateBack() {
    this.world.driver.moveBack();
  }
}

module.exports = [
  [/I open the "([^"]*)"/, Navigations.open],
  [/I reload the page/, Navigations.refresh],
  [/I move backward one page/, Navigations.moveBack],
];
