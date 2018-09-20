const click = async id => this.driver.click(id);

module.exports = [
  [/I click on the HTML element with the ID "([^"]*)"/, click],
];
