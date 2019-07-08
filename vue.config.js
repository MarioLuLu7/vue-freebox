module.exports = {
  publicPath: '/',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': 'api'
        }
      }
    }
  }
  // configureWebpack: {
  //   externals: {
  //     'vue': 'Vue',
  //     'vuex': 'Vuex',
  //     'vue-router': 'VueRouter',
  //     'axios': 'axios',
  //     'element-ui': 'ELEMENT'
  //   }
  // }
}