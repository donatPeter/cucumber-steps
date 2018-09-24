class Forms {
  static async filloutFormFields(hashDataTable) {
    await this.world.driver.filloutFormFields(hashDataTable);
  }

  static async selectFromDropdown(option, id) {
    await this.world.driver.selectFromDropdown(option, id);
  }

  static async filloutFormFieldsWithRandom(hashDataTable) {
    await this.world.driver.filloutFormFieldsWithRandom(hashDataTable);
  }
}

module.exports = [
  [/I fill in the following:/, Forms.filloutFormFields],
  [/I fill in the following random values:/, Forms.filloutFormFieldsWithRandom],
  [/I select "([^"]*)" from "([^"]*)/, Forms.selectFromDropdown],
];
