/**
 * Standard development task
 */
var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function () {
  return runSequence(
    'rimraf',
    ['index', 'images', 'templates', 'less', 'vendor', 'watchify'],
    ['webserver', 'watch']
  );
});