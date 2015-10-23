var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('clean', function() {
  return gulp.src('./coverage', { read: false })
    .pipe(clean());
});

