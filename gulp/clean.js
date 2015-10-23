var gulp = require('gulp');
var clean = require('gulp-clean');

gulp.task('clean:coverage', function() {
  return gulp.src('./coverage', { read: false })
    .pipe(clean());
});

gulp.task('clean:dist', function() {
  return gulp.src('./dist', { read: false })
    .pipe(clean());
});

