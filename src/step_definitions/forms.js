/**
 * @static
 * Form related steps
 */
class Forms {
  /**
   * @param {table} hashDataTable Example table
   * @example
   * I fill in the following:
   * 
   * And I fill in the following:
   * | id=signin-input-email    | test@infullmobile.com |
   */
  static async filloutFormFields(hashDataTable) {
    await this.world.driver.filloutFormFields(hashDataTable);
  }

  /**
   * @param {string} option The option to select
   * @param {string} id The id of the HTML select element
   * @example 
   * I select "([^"]*)" from "([^"]*)
   * 
   * I select "Poland" from "county-selection-id"
   */
  static async selectFromDropdown(option, id) {
    await this.world.driver.selectFromDropdown(option, id);
  }

  /**
   * @param {table} hashDataTable Example table filled with regexp (the / stand for |)
   * @example
   * I fill in the following random values:
   * 
   * And I fill in the following random values:
   * | id=name        | (myName/yourName) |
   * | id=text-box    | (.+)              |
   */
  static async filloutFormFieldsWithRandom(hashDataTable) {
    await this.world.driver.filloutFormFieldsWithRandom(hashDataTable);
  }
}

module.exports = [
  [/I fill in the following:/, Forms.filloutFormFields],
  [/I fill in the following random values:/, Forms.filloutFormFieldsWithRandom],
  [/I select "([^"]*)" from "([^"]*)/, Forms.selectFromDropdown],
];
