const merge = require('webpack-merge')
const path = require('path')

const webpackConfigFilePath = path.join(__dirname, '.', `./build/webpack.dev.js`)

const exportConfig = merge(require(webpackConfigFilePath), {
  runtimeCompiler: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Redd_Lin/'
    : '/'
})

module.exports = exportConfig
