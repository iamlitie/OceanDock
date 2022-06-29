const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin')

module.exports = {
    entry: {
        'scripts/app': path.join(__dirname, '../src/index.js'),
    },

    output: {
        path: path.join(__dirname, '../dist'),
        // publicPath: '/',
        filename: '[name]-[chunkHash:8].js',
    },

    module: {
        rules: [
            {
                test: /\.jsx?$/,
                // 不打包的文件
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            [
                                '@babel/preset-env',
                                {
                                    "targets": {
                                        "chrome": "58",
                                        "ie": "11"
                                    },
                                    useBuiltIns: 'usage',
                                    corejs: 3
                                }
                            ],
                            '@babel/preset-react'
                        ],
                        plugins: [
                            // 解析装饰器
                            ["@babel/plugin-proposal-decorators", { "legacy": true }],
                            // 解析类组件
                            ["@babel/plugin-proposal-class-properties", { "loose": true }],
                            ["import", { libraryName: "antd-mobile", style: "css" }],
                            ["babel-plugin-styled-components"]
                        ]
                    }
                }
            },
            {
                test: /\.(scss|sass)$/,
                exclude: /(node_modules|bower_components)/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: process.env.NODE_ENV === 'development',
                        },
                    },
                    {
                        loader: 'css-loader'
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: "postcss",
                            plugins: () => [require("postcss-preset-env")()]
                        }
                    },
                    {
                        loader: 'sass-loader'
                    }
                ]
            },
            {
                test: /\.less$/,
                loaders: ['style-loader', 'css-loader', 'less-loader']
            },
            {
                test: /\.css/,
                loaders: ['style-loader' , 'css-loader']
            },
            {
                test: /\.(jpg|jpeg|png|gif)$/,
                use: {
                    loader: 'file-loader',
                    options: {
                        limit: 8000000,
                        name: '[name]-[hash:6].[ext]',
                        outputPath: 'images/'
                    }
                }
            },
        ]
    },

    plugins: [
        // 解析html文件
        new HtmlWebpackPlugin({
            // 输出的变量
            title: 'webpack-demo',
            // 入口文件
            template: path.join(__dirname, '../public/index.ejs'),
            // 打包后的文件
            filename: 'index.html'
        }),
        // 解析scss、css
        new MiniCssExtractPlugin({
            // 文件名
            filename: '[name]-[hash:6].css',
            // 因为文件都是打包成js文件的
            // 将scripts文件名改成styles文件名
            moduleFilename: ({
                name
            }) => {
                return `${name.replace('scripts', 'styles')}-[hash:6].css`
            },
        }),
        // 每次启动时的清除dist文件夹
        new CleanWebpackPlugin()
    ],
    // 代码分割 映射 第三方包用cdn加载
    externals: {
        jquery: 'jQuery'
    },
    // 代码分割 SplitChunksPlugin自动配置
    optimization: {
        splitChunks: {
          chunks: 'all',
        }
    },
    resolve: {
        alias: {
          '@': path.resolve(__dirname, '../src/components'),
          'assets': path.join(__dirname , '../src/assets'),
          'utils': path.join(__dirname , '../src/utils')
        },
        // 当引入文件不写扩展名
        extensions: [".js", ".json", ".jsx" , 'css']
      },
}