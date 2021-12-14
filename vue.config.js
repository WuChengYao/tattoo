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
    publicPath: './'
}