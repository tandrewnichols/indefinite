var gulp = require('gulp');
require('file-manifest').generate('./gulp', ['**/*.js', '!config.js', '!karma.conf.js']);
gulp.task('test', ['cover', 'browser']);
gulp.task('default', ['lint', 'test']);
gulp.task('dist', ['uglify']);
gulp.task('ci', ['lint', 'codeclimate', 'phantom']);
