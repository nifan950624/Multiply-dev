const path = require('path');
var webpack = require('webpack');
const config = require('./webpack.common.js')
const router = require('./router.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');
const entry = {}
const htmls = []

for (let key in router) {
  let isIinject = true

  if (key === 'header') {
    isIinject = false
  } else if (key === 'footer') {
    isIinject = false
  } else {
    entry[key] = path.join(__dirname, router[key])
  }
  htmls.push(
      new HtmlWebpackPlugin({
        template: `./${key}.html`,
        chunks: [key],
        filename: `${key}.html`,
        inject: isIinject
      })
  )
}

module.exports = {
  mode: 'development',
  devServer: {
    clientLogLevel: 'warning',
    watchContentBase: true,
    hot: true,
    publicPath: '/',
    compress: true,
    host: 'localhost',
    port: 2000,
    open: false,
    overlay: false,
    progress: true,
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
    ...entry
  },
  output: {
    path: '/dist',
    filename: 'js/[name][hash:7].js',
  },
  plugins: [...htmls,
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery',
    }),
  ],
  ...config,
};