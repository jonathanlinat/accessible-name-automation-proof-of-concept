const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const DynamicCdnWebpackPlugin = require('dynamic-cdn-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = (env, options) => {
  const isProduction = options.mode === 'production'

  let webpackConfig = {
    output: {
      path: path.resolve('./dist')
    },
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader', 'eslint-loader'] },
        { test: /\.html$/, use: 'html-loader' }
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebPackPlugin({
        template: 'src/index.html',
        filename: 'index.html',
        minify: isProduction && {
          collapseWhitespace: true,
          removeComments: true,
          removeRedundantAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          useShortDoctype: true
        }
      }),
      new DynamicCdnWebpackPlugin()
    ],
    optimization: {
      minimize: isProduction,
      minimizer: [
        new TerserPlugin({
          parallel: true,
          cache: true,
          sourceMap: true,
          terserOptions: {
            output: {
              comments: false
            }
          }
        })
      ],
      splitChunks: {
        chunks: 'all'
      }
    }
  }

  return webpackConfig
}
