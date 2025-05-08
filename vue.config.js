const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
        '/api': {
            target: 'http://localhost:8080', // 确保后端服务地址正确
            changeOrigin: true,
            pathRewrite: { '^/api': '' } // 确保路径重写规则正确
        }
    }
  }
})
