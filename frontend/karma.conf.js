// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    // Base path used to resolve all patterns (e.g., files, exclude)
    basePath: '',

    // Frameworks to use for testing
    frameworks: ['jasmine', '@angular-devkit/build-angular'],

    // Plugins needed to run the tests
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],

    // Client configuration
    client: {
      jasmine: {
        // You can add configuration options for Jasmine here
        // For example, you can disable random execution with `random: false`
        // or set a specific seed with `seed: 4321`
      },
      clearContext: false // Keep Jasmine Spec Runner output visible in browser
    },

    // Configuration for Jasmine HTML Reporter
    jasmineHtmlReporter: {
      suppressAll: true // Removes duplicated traces
    },

    // Configuration for coverage reporter
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage/angular-ecommerce'),
      subdir: '.',
      reporters: [
        { type: 'html' },
        { type: 'text-summary' }
      ]
    },

    // Reporters to use
    reporters: ['progress', 'kjhtml'],

    // Web server port
    port: 9876,

    // Enable/disable colors in the output (reporters and logs)
    colors: true,

    // Level of logging
    logLevel: config.LOG_INFO,

    // Enable/disable watching files and executing tests whenever any file changes
    autoWatch: true,

    // Browsers to start
    browsers: ['Chrome'],

    // Continuous Integration mode
    singleRun: false,

    // Restart browser on file change
    restartOnFileChange: true
  });
};
