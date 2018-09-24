const reporter = require('cucumber-html-reporter');
const steps = require('./step_definitions/index');
const Driver = require('./driver/webdriverjs');

class World {
  constructor(config = {
    browser: 'chrome',
  }) {
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
    this.driver = new Driver(this.config);
  }

  async cleanup() {
    const options = {
      theme: 'bootstrap',
      jsonFile: 'report/cucumber_report.json',
      output: 'report/cucumber_report.html',
      reportSuiteAsScenarios: true,
      launchReport: true,
    };
    reporter.generate(options);
    await this.driver.quitBrowser();
  }
}

module.exports.World = World;
module.exports.gherkin = World.gherkin;
