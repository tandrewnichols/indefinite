const webpack = require('webpack');
const package = require('./package');
const { createVariants } = require('parallel-webpack');

const create = (opts) => {
  let filename = '[name]';
  if (opts.target !== 'window') {
    filename = `${filename}.${opts.target}`;
  }

  if (opts.minified) {
    filename = `${filename}.min`;
  }

  filename = `${filename}.js`;

  return {
    entry: {
      'indefinite': require.resolve(`./${package.main}`),
    },
    output: {
      library: 'indefinite',
      libraryTarget: opts.target,
      path: `${__dirname}/dist`,
      filename
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
                  ['env', { modules: false }]
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
};

module.exports = createVariants({
  target: ['window', 'commonjs', 'commonjs2', 'amd', 'umd'],
  minified: [false, true]
}, create);
