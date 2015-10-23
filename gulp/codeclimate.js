var gulp = require('gulp');
var cp = require('child_process');
var codeclimate = require('gulp-codeclimate-reporter');

gulp.task('codeclimate', ['test'], function(cb) {
  if (process.version.indexOf('v4') > -1) {
    gulp.src('coverage/lcov.info', { read: false })
      .pipe(codeclimate());
  }
});

