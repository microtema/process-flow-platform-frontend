module.exports = {
  runtimeCompiler: true,
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:30081',
        changeOrigin: true,
        logLevel: 'debug'
      }
    }
  }
}
