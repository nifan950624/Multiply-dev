const path = require('path');
const config = require('./webpack.common.js')
const router = require('./router.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin');
const entry = {}
const htmls = []

router.forEach((item) => {
  entry[item] = `./src/pages/${item}/index.js`
  htmls.push(
      new HtmlWebpackPlugin({
        template: `./src/pages/${item}.html`,
        chunks: [item],
        filename: `${item}.html`,
        inject: 'body'
      })
  )
})

module.exports = {
  mode: 'development',
  devServer: {
    clientLogLevel: 'warning',
    hot: true,
    contentBase: './dist',
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
    ...entry
  },
  output: {
    path: '/dist',
    filename: 'js/[name].[hash].js',
  },
  plugins: [...htmls, new CopyPlugin({
    patterns: [
      {
        from: 'static',
        to: 'static',
      },
    ],
  })],
  ...config,
};