// Karma configuration
// Generated on Fri Oct 23 2015 14:00:27 GMT-0400 (EDT)
const globals = require('rollup-plugin-node-globals')
const builtins = require('rollup-plugin-node-builtins')
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')

module.exports = function(config) {
  config.set({
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],
    reporters: ['dots'],
    browsers: ['Chrome', 'PhantomJS'],
    preprocessors: {
      'test/**/*.js': ['rollup']
    },

    // list of files / patterns to load in the browser
    files: [
      { pattern: 'test/**/*.js', watched: false }
    ],

    rollupPreprocessor: {
      output: {
        format: 'iife',
        name: 'indefinite',
        sourcemap: 'inline'
      },
      plugins: [
        globals(),
        builtins(),
        commonjs(),
        babel({
          babelrc: false,
          exclude: 'node_modules/**',
          presets: [
            [
              'babel-preset-env',
              {
                targets: {
                  browsers: ['last 2 versions', 'ie >= 10']
                },
                modules: false
              }
            ]
          ]
        })
      ]
    },

    logLevel: config.LOG_ERROR
  });
}
