module.exports = {
  configureWebpack: {
    devtool: 'source-map'
  },
  css: {
    sourceMap: true
  },
  devServer: {
    host: '0.0.0.0',
    port: 8080,
    https: false,
    open: true,
    hotOnly: true,
    proxy: {
      '/api/': {
        target: 'https://raw.githubusercontent.com/ReddLin/Redd_Lin/master/src/assets/',
        secure: true,
        changeOrigin: true,
        logLevel: 'debug',
        pathRewrite: {
          '/api/': ''
        }
      }
    }
  }
}
