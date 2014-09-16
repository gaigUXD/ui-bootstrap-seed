/**
 * Copies files defined in config.vendor array to the ./dist/js/vendor folder
 */
var gulp = require('gulp');
var flatten = require('gulp-flatten');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var rename = require('gulp-rename');
var config = require('../gulp-config');

gulp.task('vendor', function () {
  var src = config.vendor;
  var dest = config.paths.dist.vendor;

  if (src.length > 0) {
    return gulp.src(src)
      .pipe(flatten())
//      .pipe(sourcemaps.init())
//      .pipe(uglify())
//      .pipe(rename(function(path) {
//        path.basename = path.basename + '.min';
//      }))
//      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(dest));
  } else {
    return;
  }
});