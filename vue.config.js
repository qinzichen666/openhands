const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 52665,
    host: '0.0.0.0',
    allowedHosts: 'all'
  }
})
