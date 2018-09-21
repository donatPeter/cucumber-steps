class Actions {
  static async click(id) {
    await this.world.driver.clickOn(id);
  }
}

module.exports = [
  [/I click on the HTML element with the ID "([^"]*)"/, Actions.click],
];
