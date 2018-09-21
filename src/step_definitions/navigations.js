class Navigations {
  static async open(url) {
    this.world.driver.get(url);
  }
}

module.exports = [
  [/Open the "([^"]*)"/, Navigations.open],
];
