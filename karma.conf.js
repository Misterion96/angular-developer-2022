// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html
const baseConfig = require('./karma.base.config');

module.exports = function (config) {
  config.set({
    ...baseConfig.getConfig(__dirname)
  });
};
