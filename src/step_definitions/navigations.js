const open = async function (url) {
  this.driver.get(url);
};

module.exports = [
  [/Open the "([^"]*)"/, open],
];
