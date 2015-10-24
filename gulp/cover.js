var gulp = require('gulp');
var config = require('./config');
var mocha = require('gulp-mocha');
var istanbul = require('gulp-istanbul');

gulp.task('cover', ['clean:coverage', 'instrument'], function() {
  return gulp.src(config.tests, { read: false })
    .pipe(mocha({
      reporter: 'dot',
      ui: 'mocha-given',
      require: ['coffee-script/register', 'should']
    }))
    .pipe(istanbul.writeReports());
});

