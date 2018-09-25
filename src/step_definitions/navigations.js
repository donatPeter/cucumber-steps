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
    this.world.driver.openUrl(url);
  }

  /**
   * @example
   * I reload the page
   */
  static async refreshPage() {
    this.world.driver.refreshPage();
  }

  /**
   * @example
   * I move backward one page
   */
  static async navigateBack() {
    this.world.driver.navigateBack();
  }
}

module.exports = [
  [/I open the "([^"]*)"/, Navigations.openUrl],
  [/I reload the page/, Navigations.refreshPage],
  [/I move backward one page/, Navigations.navigateBack],
];
