var path = require('path');
var webpack = require('webpack');
const router = require('./router.js')
const common = require('./webpack.common.js')
const CopyPlugin = require('copy-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const entry = {}
const htmls = []

router.forEach((item) => {
  entry[item] = `./src/pages/${item}/index.js`
  htmls.push(
      new HtmlWebpackPlugin(
          {
            template: `./src/pages/${item}.html`,
            filename: `${item}.html`,
            chunks: [item],
            minify: {
              removeAttributeQuotes: true,
              removeComments: true,
              collapseWhitespace: true,
              removeScriptTypeAttributes: true,
              removeStyleLinkTypeAttributes: true
            }
          }
      )
  )
})

module.exports = {
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  mode: "production",
  entry: {
    ...entry
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[hash:7].js',
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            beautify: true,
            comments: false
          },
          warnings: false,
          compress: {
            drop_console: true,
          },
        },
      }),
    ],
  },
  ...common,
  plugins: [
    ...htmls,
    new CopyPlugin({
      patterns: [
        {
          from: 'static',
          to: 'static'
        },
      ]
    })
  ]
};