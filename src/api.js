const { Builder } = require('selenium-webdriver');
const steps = require('./step_definitions/index');

class World {
  constructor(config = {}) {
    this.config = config;
  }

  static gherkin(cucumber) {
    steps.forEach(([pattern, fn]) => {
      cucumber.defineStep(pattern, fn);
    });
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
module.exports.gherkin = World.gherkin;
