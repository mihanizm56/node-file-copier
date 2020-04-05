const path = require('path');

const webpack = require('webpack'); // eslint-disable-line
const UglifyJsPlugin = require('uglifyjs-3-webpack-plugin');
const ProgressBarPlugin = require('progress-bar-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  entry: ['./lib/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: path.join('index.js'),
    library: 'Copier',
    libraryTarget: 'umd',
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
  },
  mode: 'development',
  plugins: [
    new CleanWebpackPlugin(),
    new UglifyJsPlugin({
      uglifyOptions: {
        sourceMap: true,
        warnings: true,
      },
    }),
    new ProgressBarPlugin(),
  ],
};
