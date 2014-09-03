/**
 *
 */
var gulp = require('gulp');
var browserify = require('browserify');
var watchify = require('watchify');
var gutil = require('gulp-util');
var exorcist = require('exorcist');
var frep = require('gulp-frep');
var source = require('vinyl-source-stream');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var config = require('../config');

gulp.task('watchify', function () {
  var src = config.paths.src.root + '/app.js';
  var outputFile = 'app.min.js';
  var dest = config.paths.dist.js;

  watchify.args.debug = true;
  watchify.args.fullPaths = false;
  var browserifyBundler = browserify(src, watchify.args);
  var bundler = watchify(browserifyBundler);

  bundler.on('update', rebundle);

  function rebundle(ids) {
    var idsLength = ids ? ids.length : 0;
    var map = outputFile + '.map';
    var mapFile = config.paths.dist.js + '/' + map;

    if (idsLength > 0) {
      gutil.log('Starting', '\'' + gutil.colors.cyan('rebundle') + '\'...');
    }

    bundler.on('time', function (time) {
      if (idsLength > 0) {
        gutil.log('Finished', '\'' + gutil.colors.cyan('rebundle') + '\'', 'after',
          gutil.colors.magenta(time + ' ms'));
      }
    });

    return bundler.bundle()
      // log errors if they happen
      .on('error', function (e) {
        gutil.log('Browserify Error', e);
        this.emit('end');
      })
      .pipe(exorcist(mapFile))
      .pipe(source(outputFile))
      .pipe(gulp.dest(dest))
      .pipe(buffer())
      .pipe(frep(config.replacements))
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(uglify({
        mangle: false
      }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest(dest));
  }

  return rebundle()
});