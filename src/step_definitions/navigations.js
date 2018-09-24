class Navigations {
  static async open(url) {
    this.world.driver.getURL(url);
  }

  static async refresh() {
    this.world.driver.refresh();
  }

  static async moveBack() {
    this.world.driver.moveBack();
  }
}

module.exports = [
  [/I open the "([^"]*)"/, Navigations.open],
  [/I reload the page/, Navigations.refresh],
  [/I move backward one page/, Navigations.moveBack],
];
