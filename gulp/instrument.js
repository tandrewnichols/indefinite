var gulp = require('gulp');
var istanbul = require('gulp-istanbul');
var config = require('./config');

gulp.task('instrument', function() {
  gulp.src(config.lib)
    .pipe(istanbul({
      includeUntested: true
    }))
    .pipe(istanbul.hookRequire());
});
