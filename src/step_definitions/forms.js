class Forms {
  static async filloutFormFields(hashDataTable) {
    await this.world.driver.filloutFormFields(hashDataTable);
  }

  static async selectFromDropdown(id, option) {
    await this.world.driver.selectFromDropdown(id, option);
  }
}

module.exports = [
  [/I fill in the following:/, Forms.filloutFormFields],
  [/I select "([^"]*)" from "([^"]*)/, Forms.selectFromDropdown],
];
