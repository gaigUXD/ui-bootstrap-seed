var pkg = require('../package.json');
var config = require('./config');

var karmaConf = {

  basePath: './',

  autoWatch: true,
  colors: true,
  logLevel: undefined,
  port: 9876,
  reportSlowerThan: 500,

  frameworks: [
    'commonjs',
    'mocha',
    'mocha-debug',
    'sinon-chai'
  ],

  reporters: ['mocha', 'coverage'],

  client: {
    mocha: {
      ui: 'bdd'
    }
  },

  browsers: ['Chrome'],

  files: [
    {
      pattern: 'https:' + pkg.uiBootstrapCDN + '/' + pkg.uiBootstrapVersion + '/js/lib/angular/angular.js',
      watched: false,
      served: true,
      included: true
    },
    {
      pattern: 'https:' + pkg.uiBootstrapCDN + '/' + pkg.uiBootstrapVersion + '/js/lib/angular/angular-mocks.js',
      watched: false,
      served: true,
      included: true
    },
    {
      pattern: 'https:' + pkg.uiBootstrapCDN + '/' + pkg.uiBootstrapVersion + '/js/lib/angular/angular-route.js',
      watched: false,
      served: true,
      included: true
    },
    './src/**/*.js'
  ],

  plugins: [
    'karma-mocha',
    'karma-coverage',
    'karma-mocha-debug',
    'karma-sinon-chai',
    'karma-mocha-reporter',
    'karma-chrome-launcher',
    'karma-commonjs'
  ],

  preprocessors: {
    './src/**/*.js': ['coverage', 'commonjs']
  }

};

module.exports = karmaConf;