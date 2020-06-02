const path = require('path'),
    webpack = require('webpack'),
    router = require('./router.js'),
    common = require('./webpack.common.js'),
    CopyPlugin = require('copy-webpack-plugin'),
    UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
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
        inject: isInject,
        minify: {
          removeAttributeQuotes: true,
          removeComments: true,
          collapseWhitespace: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        }
      })
  )
}

module.exports = {
  mode: "production",
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  entry: {
    ...entry
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name][hash:7].js',
  },
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          output: {
            beautify: false,
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
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      'window.$': 'jquery',
    }),
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