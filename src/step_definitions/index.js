const actions = require('./actions');
const assertions = require('./assertions');
const navigations = require('./navigations');

module.exports = [
  ...actions,
  ...assertions,
  ...navigations,
];
