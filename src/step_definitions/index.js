const actions = require('./actions');
const assertions = require('./assertions');
const navigations = require('./navigations');
const utilities = require('./utilities');

module.exports = [
  ...actions,
  ...assertions,
  ...navigations,
  ...utilities,
];
