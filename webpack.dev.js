const path = require('path'),
    webpack = require('webpack'),
    config = require('./webpack.common.js'),
    router = require('./router.js'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    CopyPlugin = require('copy-webpack-plugin'),
    entry = {},
    htmls = []

for (let key in router) {
  let isInject = true

  if (key === 'header') {
    isInject = false
  } else if (key === 'footer') {
    isInject = false
  } else {
    entry[key] = path.join(__dirname, router[key])
  }
  htmls.push(
      new HtmlWebpackPlugin({
        template: `./${key}.html`,
        chunks: [key],
        filename: `${key}.html`,
        inject: isInject
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