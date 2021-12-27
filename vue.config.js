const path = require('path')
const webpack = require("webpack");

module.exports = {
    chainWebpack: config => {
        config.module.rules.delete('eslint');
        config.resolve.alias.set(
          'vue$',
          path.resolve(__dirname, 'node_modules/vue/dist/vue.runtime.esm.js')
        )
    },
    configureWebpack: {
        //支持jquery
        plugins: [
            new webpack.ProvidePlugin({
                $:"jquery",
                jQuery:"jquery",
                "windows.jQuery":"jquery"
            })
        ]
    },
    pages: {
        index: {
            entry: 'src/main.js',
            title: 'EyebrowTattoo紋繡'
        }
    },
    // publicPath: process.env.NODE_ENV === 'production' ? '/' : '/'
    publicPath: './'
    // transpileDependencies: [/node_modules[/\\\\](element-ui|vuex|)[/\\\\]/],
}