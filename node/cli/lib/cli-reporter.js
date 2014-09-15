'use strict';

var gutil = require('gulp-util');

module.exports = {

  error: function (err) {
    gutil.log(gutil.colors.red('Error:'), err);
  },

  warn: function (warning) {
    gutil.log(gutil.colors.yellow('Warning:'), warning);
  },

  log: function(msg) {
    gutil.log(gutil.colors.blue('Log:'), msg);
  },

  anon: function(msg) {
    gutil.log(gutil.colors.green(msg));
  }
};