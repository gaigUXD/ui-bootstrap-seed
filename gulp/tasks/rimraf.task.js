/**
 * Deletes the dist folder
 */
var gulp = require('gulp');
var rimraf = require('rimraf');
var config = require('../gulp-config');

gulp.task('rimraf', function (cb) {
  return rimraf(config.paths.dist.root, cb);
});