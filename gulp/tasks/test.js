/**
 *
 */
var gulp = require('gulp');
var karma = require('karma').server;
var config = require('../config');
var karmaConf = require('../karma.config');

gulp.task('test', function(done) {
  return karma.start(karmaConf, done);
});