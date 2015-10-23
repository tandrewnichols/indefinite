var gulp = require('gulp');
var config = require('./config');

gulp.task('copy', ['clean:dist'], function() {
  gulp.src(config.lib)
    .pipe(gulp.dest('dist'));
});
