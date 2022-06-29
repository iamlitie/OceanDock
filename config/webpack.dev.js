const { merge } = require('webpack-merge')
const path = require('path')
const commonConfig = require('./webpack.common')

const developmentConfig = {
    mode: 'development',
    devtool: 'source-map',
    output: {
        publicPath: '/',
    },

    // 开启本地服务
    devServer: {
        contentBase: path.join(__dirname, '../dist'),
        compress: true,
        port: 9000,
        historyApiFallback: true,
        proxy: {
            '/api': {
              target: 'https://m.ymatou.com/',
              changeOrigin: true,
              pathRewrite: {'^/api' : ''},
            }
        }
    }
}

module.exports = merge(commonConfig , developmentConfig)