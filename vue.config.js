module.exports = {
  runtimeCompiler: true,
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:30080',
        changeOrigin: true,
        logLevel: 'debug'
      }
    }
  }
}
