const merge = require('webpack-merge')
const webpack = require('webpack')

const common = require('./webpack.common.js')

module.exports = merge(
  common,
  {
    entry: {
      main: ['react-hot-loader/patch', './index.js']
    },
    output: {
      filename: '[name].js'
    },
    devtool: 'inline-source-map',
    devServer: {
      contentBase: './dist',
      compress: true,
      host: '0.0.0.0',
      port: 8080,
      hot: true,
      watchOptions: {
        poll: 1000
      }
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  }
)
