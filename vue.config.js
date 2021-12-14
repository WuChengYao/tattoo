const path = require('path')

module.exports = {
    chainWebpack: config => {
        config.module.rules.delete('eslint');
    },
    chainWebpack: config => {
        config.resolve.alias.set(
          'vue$',
          path.resolve(__dirname, 'node_modules/vue/dist/vue.runtime.esm.js')
        )
    },
    pages: {
        index: {
            entry: 'src/main.js',
            title: '紋繡'
        }
    },
    // publicPath: process.env.NODE_ENV === 'production' ? '/' : '/'
    // publicPath: './'
    transpileDependencies: [/node_modules[/\\\\](element-ui|vuex|)[/\\\\]/],
}