const open = async url => this.driver.get(url);

const arr = [
  [/Open the "([^"]*)"/, open],
];

export default arr;
