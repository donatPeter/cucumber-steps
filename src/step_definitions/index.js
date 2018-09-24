const actions = require('./actions');
const URLAssertions = require('./url-assertions');
const DOMAssertions = require('./dom-assertions');
const forms = require('./forms');
const navigations = require('./navigations');
const utilities = require('./utilities');

module.exports = [
  ...actions,
  ...URLAssertions,
  ...DOMAssertions,
  ...navigations,
  ...utilities,
  ...forms,
];
