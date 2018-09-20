const open = async url => this.driver.get(url);

module.exports = [
  [/Open the "([^"]*)"/, open],
];
