var gulp = require('gulp');
require('file-manifest').generate('./gulp', ['**/*.js', '!config.js']);
gulp.task('test', ['instrument', 'cover']);
gulp.task('default', ['lint', 'test']);
gulp.task('dist', ['uglify']);
gulp.task('ci', ['lint', 'codeclimate']);
