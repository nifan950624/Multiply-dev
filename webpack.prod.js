const path = require('path'),
    webpack = require('webpack'),
    config = require('./webpack.common.js'),
    CopyPlugin = require('copy-webpack-plugin'),
    UglifyJsPlugin = require('uglifyjs-webpack-plugin'),
    OptimizeCssPlugin = require('optimize-css-assets-webpack-plugin'),
    {CleanWebpackPlugin} = require('clean-webpack-plugin')


module.exports = {
  mode: "production",
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },
  entry: {
    ...config.entry
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].js',
    publicPath: "./"
  },
  optimization: {
    ...config.optimization,
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
      new OptimizeCssPlugin()
    ],
  },
  module: {
    rules: [
      {
        test: /\.html$/i,
        use: {
          loader: 'html-loader',
          options: {
            attributes: {
              list: [
                {
                  tag: 'img',
                  attribute: 'src',
                  type: 'src',
                }
              ]
            }
          }
        }
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        loader: 'url-loader',
        options: {
          limit: 5000,
          name: 'static/img/[name].[ext]',
          publicPath: './'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 5000,
          name: 'static/media/[name].[ext]',
          publicPath: './'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 5000,
          name: 'static/fonts/[name].[ext]',
          publicPath: './'
        }
      },
      ...config.rules
    ],
  },
  plugins: [
    ...config.plugins,
    new CleanWebpackPlugin(),
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