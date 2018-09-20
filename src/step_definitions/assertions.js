const { expect } = require('chai');

const isEqual = async (url) => {
  const currentURL = await this.driver.getCurrentUrl();
  expect(currentURL).to.equal(url);
};

const arr = [
  [/I should be on "([^"]*)"/, isEqual],
];

export default arr;
