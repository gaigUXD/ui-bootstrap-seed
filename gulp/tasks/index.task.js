/**
 * Copies the src index.html to the dist folder
 */
var gulp = require('gulp');
var frep = require('gulp-frep');
var gutil = require('gulp-util');
var rename = require('gulp-rename');
var config = require('../gulp-config');

gulp.task('index', function() {
  var src = config.paths.src.root + '/index.tpl';
  var dest = config.paths.dist.root;

  return gulp.src(src)
    .pipe(frep(config.replacements))
    .on('error', function(err) {
      gutil.log(err);
    })
    .pipe(rename(function(path) {
      path.extname = '.html';
    }))
    .pipe(gulp.dest(dest));
});