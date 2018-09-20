const { expect } = require('chai');

const isEqual = async function (url) {
  const currentURL = await this.driver.getCurrentUrl();
  expect(currentURL).to.equal(url);
};

module.exports = [
  [/I should be on "([^"]*)"/, isEqual],
];
