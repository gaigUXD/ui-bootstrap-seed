/**
 * Watches src files for changes and runs associated tasks
 */
var gulp = require('gulp');
var config = require('../gulp-config');

gulp.task('watch', function() {
  var indexSrc = config.paths.src.root + '/index.html';
  var templatesSrc = config.paths.src.root + '/**/*.tpl';
  var lessSrc = config.paths.src.root + '/**/*.less';
  var imagesSrc = [
      config.paths.src.root + '/**/*.png',
      config.paths.src.root + '/**/*.jpg',
      config.paths.src.root + '/**/*.jpeg',
      config.paths.src.root + '/**/*.gif',
      config.paths.src.root + '/**/*.svg'
  ];
  var vendorSrc = (config.vendor) ? config.vendor : [];

  gulp.watch(indexSrc, ['index']);
  gulp.watch(templatesSrc, ['templates']);
  gulp.watch(lessSrc, ['less']);
  gulp.watch(imagesSrc, ['images']);
  gulp.watch(vendorSrc, ['vendor']);
});