var gulp = require('gulp');
var cp = require('child_process');
var codeclimate = require('gulp-codeclimate-reporter');

gulp.task('codeclimate', function() {
  if (process.version.indexOf('v4') > -1) {
    gulp.src('coverage/lcov.info', { read: false })
      .pipe(codeclimate({
        token: '7db887541ba6df3075e3a6ead2456b0ddf6bee65969308191c62afe1ea461566'
      }));
  }
});

