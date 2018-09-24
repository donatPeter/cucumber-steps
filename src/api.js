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

  static report() {
    const options = {
      theme: 'bootstrap',
      jsonFile: 'report/report.json',
      output: 'report/report.html',
      reportSuiteAsScenarios: true,
      launchReport: true,
    };
    reporter.generate(options);
    return Promise.resolve();
  }

  hook(cucumber) {
    const self = this;
    cucumber.BeforeAll(() => self.setup());
    cucumber.AfterAll(async () => self.cleanup());
    cucumber.setWorldConstructor(function () {
      this.world = self;
    });
  }

  async setup() {
    this.driver = new Driver(this.config);
  }

  async cleanup() {
    return this.driver.quitBrowser();
  }
}

module.exports.World = World;
module.exports.gherkin = World.gherkin;
module.exports.report = World.report;
