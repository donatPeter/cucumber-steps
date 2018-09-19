const click = (selector) => {
  return this.driver.click(selector);
};

const arr = [
  [/I click on "([^"]*)"/, click],
];

export default arr;
