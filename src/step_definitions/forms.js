class Forms {
  static async filloutFormFields(hashDataTable) {
    console.log(hashDataTable);
  }
}

module.exports = [
  [/I fill in the following:/, Forms.filloutFormFields],
];
