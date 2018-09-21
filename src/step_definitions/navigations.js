class Navigations {
  static async open(url) {
    this.world.driver.getURL(url);
  }
}

module.exports = [
  [/Open the "([^"]*)"/, Navigations.open],
];
