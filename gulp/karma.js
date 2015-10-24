var gulp = require('gulp');
var Server = require('karma').Server;
var path = require('path');

gulp.task('browser', function(done) {
  new Server({
    configFile: path.resolve(__dirname, '../karma.conf.js'),
    singleRun: true
  }, done).start();
});

gulp.task('phantom', function(done) {
  new Server({
    configFile: path.resolve(__dirname, '../karma.conf.js'),
    browsers: ['PhantomJS'],
    singleRun: true
  }, done).start();
});

gulp.task('ci', function(done) {
  new Server({
    configFile: path.resolve(__dirname, '../karma.conf.js')
  }, done).start();
});
