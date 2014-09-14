/**
 * Compiles the main less file to the dist css folder
 */
var gulp = require('gulp');
var frep = require('gulp-frep');
var less = require('gulp-less');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var config = require('../gulp-config');

gulp.task('less', function () {
  var src = config.paths.src.root + '/styles.less';
  var dest = config.paths.dist.css;

  return gulp.src(src)
    .pipe(frep(config.replacements))
    .pipe(sourcemaps.init())
    .pipe(less({
      compress: true
    }))
    .on('error', function(err) {
      gutil.log(gutil.colors.red('Less error:'), err);
      this.emit('end');
    })
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(dest));
});