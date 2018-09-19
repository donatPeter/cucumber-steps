const click = (selector: string) => {
  return this.driver.click(selector);
};

let arr: Array<[RegExp, (selector: string) => any]> = [];
arr = [
  [/I click on "([^"]*)"/, click],
];

export default arr;
