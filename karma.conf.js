// Karma configuration
// Generated on Fri Oct 23 2015 14:00:27 GMT-0400 (EDT)

module.exports = function(config) {
  config.set({
    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['mocha'],
    reporters: ['dots'],
    browsers: [ 'Chrome', 'PhantomJS', 'Firefox', 'Safari' ],
    preprocessors: {
      'test/**/*.js': ['webpack']
    },

    // list of files / patterns to load in the browser
    files: [
      'node_modules/babel-polyfill/dist/polyfill.js',
      'test/**/*.js'
    ],

    webpack: {
      module: {
        rules: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            use: [
              {
                loader: 'babel-loader',
                options: {
                  presets: [
                    [ 'env', { modules: false }]
                  ]
                }
              }
            ]
          }
        ]
      }
    },

    logLevel: config.LOG_ERROR
  });
};
