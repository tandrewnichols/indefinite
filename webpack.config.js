const webpack = require('webpack');
const package = require('./package');

module.exports = {
  entry: {
    'indefinite': require.resolve(`./${package.main}`),
    'indefinite.min': require.resolve(`./${package.main}`)
  },
  output: {
    library: 'indefinite',
    libraryTarget: 'umd',
    path: `${__dirname}/dist`,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /lib.*\.js$/,
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
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      include: /\.min\.js$/,
      minimize: true
    })
  ]
};
