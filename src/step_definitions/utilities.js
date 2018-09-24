class Utilities {
  static async wait(sec) {
    return this.world.driver.waitForSeconds(sec);
  }

  static async screenshot() {
    return this.world.driver.screenshot();
  }
}

module.exports = [
  [/I wait (\d+) seconds?/, Utilities.wait],
  [/I take a screenshot/, Utilities.screenshot],
];
