/**
 * Copies src png, jpg, jpeg, gif, and svg files to ./dist/images
 */
var gulp = require('gulp');
var flatten = require('gulp-flatten');
var config = require('../config');

gulp.task('images', function () {
  var src = [
      config.paths.src.root + '/**/*.png',
      config.paths.src.root + '/**/*.jpg',
      config.paths.src.root + '/**/*.jpeg',
      config.paths.src.root + '/**/*.gif',
      config.paths.src.root + '/**/*.svg'
  ];
  var dest = config.paths.dist.images;

  return gulp.src(src)
    .pipe(flatten())
    .pipe(gulp.dest(dest));
});