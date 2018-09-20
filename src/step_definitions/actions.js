const click = async id => this.driver.click(id);

const arr = [
  [/I click on the HTML element with the ID "([^"]*)"/, click],
];

export default arr;
