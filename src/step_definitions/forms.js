class Forms {
  static async filloutFormFields(hashDataTable) {
    await this.world.driver.filloutFormFields(hashDataTable);
  }
}

module.exports = [
  [/I fill in the following:/, Forms.filloutFormFields],
];
