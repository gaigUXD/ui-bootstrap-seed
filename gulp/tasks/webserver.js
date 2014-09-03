/**
 * Starts a basic web server on localhost at the configured port
 */
var gulp = require('gulp');
var webserver = require('gulp-webserver');
var config = require('../config');

gulp.task('webserver', function() {
  var src = config.paths.dist.root;

  gulp.src(src)
    .pipe(webserver({
      port: config.webserver.port,
      fallback: 'index.html',
      livereload: true
    }));
});