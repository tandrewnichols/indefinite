var gulp = require('gulp');
var config = require('./config');
var mocha = require('gulp-spawn-mocha');

gulp.task('int', function() {
  return gulp.src(config.tests.integration, { read: false })
    .pipe(mocha({
      reporter: 'dot',
      ui: 'mocha-given',
      require: ['coffee-script/register', 'should', 'should-sinon']
    }));
});

