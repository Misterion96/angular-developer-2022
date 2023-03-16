const path = require('path');

module.exports.getConfig = function (localPath) {
  const outputDir = path.join(
    path.relative(__dirname, localPath),
    './coverage'
  )

  return {
    basePath: 'karma',
    frameworks: [
      'jasmine',
      '@angular-devkit/build-angular',
    ],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma'),
      require('karma-jasmine-order-reporter'),
    ],
    client: {
      jasmine: {
        random: false,
        // Specify if you need to re-run the same seed.
        // Should be a string, https://github.com/dfederm/karma-jasmine-html-reporter/issues/19.
        // seed: '1234'
      },
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },
    coverageIstanbulReporter: {
      dir: outputDir,
      reports: ['html', 'lcovonly', 'text-summary'],
      fixWebpackSourcePaths: true,
    },
    customLaunchers: {
      // eslint-disable-next-line @typescript-eslint/naming-convention
      ChromeHeadlessNoSandbox: {
        base: 'ChromeHeadless',
        flags: [
          '--no-sandbox', // required to run without privileges in docker
        ],
      },
    },
    reporters: ['progress', 'kjhtml'],
    port: 9876,
    colors: true,
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    restartOnFileChange: false,
  };
};
