const path = require('path');
const config = require('./webpack.common.js')

module.exports = {
  ...config,
  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    contentBase: './pages',
    compress: true,
    host: 'localhost',
    port: 2000,
    open: false,
    overlay: false,
    proxy: {
      '/api': {
        target: '',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
        }
      }
    },
  },
  entry: {
    pageOne: './src/index/index.js',
    pageTwo: './src/other/index.js',
  },
  output: {
    path: '/dist',
    filename: '[name].js',
    publicPath: "/assets"
  },
};