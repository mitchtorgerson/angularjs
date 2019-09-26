const webpack = require('./config/webpack.dev');

module.exports = function(config) {
  config.set({
    basePath: '',

    frameworks: ['jasmine'],

    files: [
      'src/test-config.js',
    ],

    preprocessors: {
      'src/test-config.js': ['webpack'],
      'src/**/*.spec.js': ['webpack'],
    },

    webpack,
    webpackMiddleware: {
      noInfo: true,
      stats: 'errors-only',
    },

    reporters: ['spec'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: true,
    concurrency: Infinity,
  });
}
