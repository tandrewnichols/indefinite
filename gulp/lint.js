var gulp = require('gulp');
var config = require('./config');
var jshint = require('gulp-jshint');

gulp.task('lint', function() {
  return gulp.src(config.lib)
    .pipe(jshint({
      lookup: false,
      eqeqeq: true,
      es3: true,
      indent: 2,
      newcap: true,
      quotmark: 'single',
      boss: true
    })).pipe(jshint.reporter('jshint-stylish'));
});

