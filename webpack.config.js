const HtmlWebPackPlugin = require('html-webpack-plugin')
const DynamicCdnWebpackPlugin = require('dynamic-cdn-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = (env, options) => {
  let webpackConfig = {
    module: {
      rules: [
        { test: /\.js$/, exclude: /node_modules/, use: ['babel-loader', 'eslint-loader'] },
        { test: /\.html$/, use: 'html-loader' }
      ]
    },
    plugins: [
      new HtmlWebPackPlugin({
        template: 'src/index.html',
        filename: 'index.html',
        minify: options.mode === 'production' && {
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
      minimize: options.mode === 'production',
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
