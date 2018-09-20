const webdriver = require('selenium-webdriver');
const steps = require('./step_definitions/index');

function gherkin(cucumber) {
  steps.forEach(([pattern, fn]) => {
    cucumber.defineStep(pattern, fn);
  });
}

function World(config = {}) {
  this.config = config;
}

World.prototype.hook = (cucumber) => {
  const self = this;
  cucumber.BeforeAll(() => this.setup());
  cucumber.AfterAll(() => this.cleanup());
  cucumber.setWorldConstructor(() => {
    this.world = self;
  });
};

World.prototype.setup = async () => {
  this.driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
};

World.prototype.cleanup = async () => {
  await this.driver.quit();
};

World.prototype.cleanup = async () => {
  await this.driver.quit();
};

module.exports.World = World;
module.exports.gherkin = gherkin;
