// An example configuration file
var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome'
  },

  specs: ['./PageObjectModel/BasicTest.js'],

  onPrepare: function() {
browser.driver.manage().window().maximize();
    jasmine.getEnv().addReporter(
    new Jasmine2HtmlReporter({
    savePath: 'target/screenshots'
    })
    );
  },

  suites: 
  {
    smoke : ['dropDown.js','ActionsSwitchWindow.js','practiceExer2.js']
  },
  // Spec patterns are relative to the configuration file location passed
  // to protractor (in this example conf.js).
  // They may include glob patterns.


  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true, // Use colors in the command line report.
  }
};