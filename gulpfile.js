var gulp = require('gulp');
require('file-manifest').generate('./gulp', ['**/*.js', '!config.js']);
gulp.task('test', ['instrument', 'cover']);
gulp.task('default', ['clean', 'lint', 'test']);
gulp.task('ci', ['lint', 'codeclimate']);
