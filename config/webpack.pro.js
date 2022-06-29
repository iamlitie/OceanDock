const { merge } = require('webpack-merge')

const commonConfig = require('./webpack.common')

productionConfig = {
    mode: 'production',
    // devtool: 'source-map',
    // 不提示警告
    performance: false,
    output: {
        publicPath: ''
    }
}


module.exports = merge(commonConfig , productionConfig)