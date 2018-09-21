class Actions {
  static async click(id) {
    await this.world.Driver.clickOn(id);
  }
}

module.exports = [
  [/I click on the HTML element with the ID "([^"]*)"/, Actions.click],
];
