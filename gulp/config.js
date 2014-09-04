/**
 * Gulp configuration file
 */
var pkg = require('../package.json');
var config = {};

/**
 * Main module name
 */
config.app = 'gaigApp';

/**
 * Define build src and dist paths
 */
config.paths = {
  src: {
    root: './src',
    common: './src/common',
    modules: './src/modules',
    vendor: './bower_components'
  },

  dist: {
    root: './build',
    css: './build/css',
    images: './build/images',
    templates: './build/templates',
    js: './build/js',
    vendor: './build/js/vendor'
  }
};

/**
 * Configure webserver
 */
config.webserver = {
  port: 9000
};

/**
 * Define replacement patterns
 */
config.replacements = [
  {
    pattern: /\$\{app\}/g,
    replacement: config.app
  },
  {
    pattern: /\$\{appVersion\}/g,
    replacement: pkg.version
  },
  {
    pattern: /\$\{gaigCDN\}/g,
    replacement: pkg.gaigCDN
  },
  {
    pattern: /\$\{uiBootstrapVersion\}/g,
    replacement: pkg.uiBootstrapVersion
  },
  {
    pattern: /<!-- inject:uiBootstrapCSS -->/g,
    replacement: '<link rel="stylesheet" href="' + pkg.gaigCDN + '/'
      + pkg.uiBootstrapVersion + '/css/gaig-bootstrap.css">'
  },
  {
    pattern: /<!-- inject:uiBootstrapJS -->/g,
    replacement: '<script src="' + pkg.gaigCDN + '/' + pkg.uiBootstrapVersion
      + '/js/lib/jquery/jquery-2.1.1.min.js"></script>\n<script src="' + pkg.gaigCDN + '/' + pkg.uiBootstrapVersion
      + '/js/lib/angular/angular.min.js"></script>\n<script src="' + pkg.gaigCDN + '/' + pkg.uiBootstrapVersion
      + '/js/gaig-ui-bootstrap.js"></script>'
  }
];

/**
 * An array of source files to push to ./dist/js/vendor
 */
config.vendor = [
    config.paths.src.vendor + '/angular-route/angular-route.js',
    config.paths.src.vendor + '/ui-router/release/angular-ui-router.js'
];

/**
 * Karma config
 */
config.karma = {
  logLevel: 'LOG_DEBUG' // LOG_DISABLE, LOG_ERROR, LOG_WARN, LOG_INFO, LOG_DEBUG
};

module.exports = config;