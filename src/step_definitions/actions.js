class Actions {
  static async click(id) {
    await this.world.driver.clickOn(id);
  }

  static async hoverOver(id) {
    await this.world.driver.hoverOver(id);
  }

  static async sendKey(id, key) {
    await this.world.driver.sendKey(id, key);
  }
}

module.exports = [
  [/I click on the HTML element with the ID "([^"]*)"/, Actions.click],
  [/I hover over the HTML element with the ID "([^"]*)"/, Actions.hoverOver],
  [/I send key "([^"]*)" in "([^"]*)" element/, Actions.sendKey],
];
