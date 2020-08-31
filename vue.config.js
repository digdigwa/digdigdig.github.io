module.exports = {
  // build后的文件从dist转为docs目录
  outputDir: 'docs',
  // mock及代理
  devServer: {
    disableHostCheck: true,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    proxy: {
      '/node': {
        target: 'http://127.0.0.1:10001',
        changeOrigin: true,
        ws: false
      }
    }
  }
}
