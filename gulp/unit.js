var gulp = require('gulp');
var config = require('./config');
var mocha = require('gulp-mocha');

gulp.task('unit', function() {
  return gulp.src(config.tests, { read: false })
    .pipe(mocha({
      reporter: 'dot',
      ui: 'mocha-given',
      require: ['coffee-script/register', 'should', 'should-sinon']
    }));
});

