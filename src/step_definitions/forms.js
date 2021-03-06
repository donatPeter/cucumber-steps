class Forms {
  static async filloutFormFields(hashDataTable) {
    await this.world.driver.filloutFormFields(hashDataTable);
  }

  static async selectFromDropdown(option, id) {
    await this.world.driver.selectFromDropdown(option, id);
  }
}

module.exports = [
  [/I fill in the following:/, Forms.filloutFormFields],
  [/I select "([^"]*)" from "([^"]*)/, Forms.selectFromDropdown],
];
