/**
 * @static
 * Form related steps
 */
class Forms {
  /**
   * @static
   * @async
   * @param {table} hashDataTable 
   * @param {regexp} regexp I fill in the following:
   * @example 
   * And I fill in the following:
    | id=signin-input-email    | test@infullmobile.com |
   */
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
