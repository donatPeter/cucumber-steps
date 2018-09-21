const { Builder } = require('selenium-webdriver');
const steps = require('./step_definitions/index');

function gherkin(cucumber) {
  steps.forEach(([pattern, fn]) => {
    cucumber.defineStep(pattern, fn);
  });
}

class World {
  constructor(config = {}) {
    this.config = config;
  }

  hook(cucumber) {
    const self = this;
    cucumber.BeforeAll(() => self.setup());
    cucumber.AfterAll(() => self.cleanup());
    cucumber.setWorldConstructor(function () {
      this.world = self;
    });
  }

  async setup() {
    this.driver = await new Builder().forBrowser('chrome').build();
  }

  async cleanup() {
    await this.driver.quit();
  }
}

module.exports.World = World;
module.exports.gherkin = gherkin;
