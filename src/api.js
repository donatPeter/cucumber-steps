const steps = require('./step_definitions/index');
const Driver = require('./driver/webdriverjs');

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
    this.Driver = new Driver();
    this.driver = this.Driver.get();
  }

  async cleanup() {
    await this.driver.quit();
  }
}

module.exports.World = World;
module.exports.gherkin = World.gherkin;
