var path = require('path');
var webpack = require('webpack');
var CopyPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = {
  entry: {
    build: './src/index.js'
  },
  output: {
    path: __dirname + '/build',
    filename: '[name].js',
  },
  resolveLoader: {
    root: path.join(__dirname, 'node_modules')
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new OptimizeCSSPlugin({
      cssProcessorOptions: config.build.productionSourceMap
          ? {safe: true, map: {inline: false}}
          : {safe: true}
    }),
    new CopyPlugin({
      patterns: [
        {
          from: 'static',
          to: 'dist/static'
        },
        // If absolute path is a `glob` we replace backslashes with forward slashes, because only forward slashes can be used in the `glob`
        path.posix.join(
            path.resolve(__dirname, 'src').replace(/\\/g, '/'),
            '*.txt'
        ),
      ],
    })
  ]
};