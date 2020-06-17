const path = require('path'),
    webpack = require('webpack'),
    config = require('./webpack.common.js'),
    CopyPlugin = require('copy-webpack-plugin')


module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        loader: 'file-loader',
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'file-loader',
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'file-loader',
      },
      ...config.rules
    ],
  },
  optimization: {
    ...config.optimization
  },
  devServer: {
    hot: true,
    watchContentBase: true,
    publicPath: '/',
    compress: true,
    host: '0.0.0.0',
    port: 2000,
    open: false,
    overlay: false,
    proxy: {
      '/api': {
        target: 'http://localhost:2000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/mock'
        }
      }
    },
  },
  entry: {
    ...config.entry
  },
  output: {
    path: '/dist',
    filename: 'js/[name][hash:7].js',
  },
  plugins: [
    ...config.plugins,
  ]
};