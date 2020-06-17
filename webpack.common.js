const entry = {},
    htmls = [],
    ENV = process.env.NODE_ENV,
    router = require('./router'),
    path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ProgressBarPlugin = require('progress-bar-webpack-plugin'),
    MiniCssExtractPlugin = require('mini-css-extract-plugin')


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
        chunks: [key, 'vendors', 'common'],
        filename: `${key}.html`,
        inject: isInject,
        minify: ENV === 'production' ? {
          removeAttributeQuotes: true,
          removeComments: true,
          collapseWhitespace: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true
        } : false
      })
  )


  module.exports = {
    entry,

    rules: [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'sass-loader']
      }
    ],
    optimization: {
      splitChunks: {
        chunks: "all",
        cacheGroups: {
          vendors: {
            minChunks: 1,
            test: /[\\/]node_modules[\\/]/,
            priority: 2
          },
          common: {
            test: /[\\/]src[\\/]/,
            minChunks: 2,
            priority: 1,
            reuseExistingChunk: true
          }
        }
      }
    },
    plugins: [
      new MiniCssExtractPlugin({
        filename: 'css/[name][hash].css',
        publicPath: ENV === 'production' ? './' : '/'
      }),
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        'window.$': 'jquery',
      }),
      new ProgressBarPlugin(),
      ...htmls
    ]
  }
}
