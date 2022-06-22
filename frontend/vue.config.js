const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  pages: {
    register: {
      entry: './src/pages/Register/main.js',
      template: 'public/index.html',
      title: 'Register',
      chunks: ['chunk-vendors', 'chunk-common', 'register']
    }
  }
}
