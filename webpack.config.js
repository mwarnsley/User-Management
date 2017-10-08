const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');

module.exports = {
  entry: ['./client/client.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client'),
  },
  watch: true,
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-1'],
        },
      },
      {
        test: /\.(sass|scss)$/,
        loaders: ExtractTextPlugin.extract(['css-loader', 'sass-loader']),
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader',
      },
    ],
  },
  //   plugins: [
  //     new ExtractTextPlugin({
  //       filename: 'bundle.css',
  //       allChunks: true,
  //     }),
  //   ],
};
