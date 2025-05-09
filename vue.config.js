const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    devServer: {
        port: 8000, // 确保端口号正确
        host: '0.0.0.0', // 确保主机地址正确
        proxy: {
            '/api': {
                target: 'http://localhost:8080', // 确保后端服务地址正确
                changeOrigin: true,
                pathRewrite: {'^/api': ''} // 确保路径重写规则正确
            }
        }
    }
})
