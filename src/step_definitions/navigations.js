const open = async function (url) {
  this.world.driver.get(url);
};

module.exports = [
  [/Open the "([^"]*)"/, open],
];
