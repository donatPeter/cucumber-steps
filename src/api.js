const { Builder } = require('selenium-webdriver');
const steps = require('./step_definitions/index');

function gherkin(cucumber) {
  steps.forEach(([pattern, fn]) => {
    cucumber.defineStep(pattern, fn);
  });
}

function World(config = {}) {
  this.config = config;
}

World.prototype.hook = function (cucumber) {
  const self = this;
  cucumber.BeforeAll(() => self.setup());
  cucumber.AfterAll(() => self.cleanup());
  cucumber.setWorldConstructor(function () {
    this.mink = self;
  });
};

World.prototype.setup = async function () {
  this.driver = await new Builder().forBrowser('chrome').build();
};

World.prototype.cleanup = async function () {
  await this.driver.quit();
};

module.exports.World = World;
module.exports.gherkin = gherkin;
