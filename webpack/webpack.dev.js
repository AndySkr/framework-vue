const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseConfig = require('./webpack.config');
const webpackMerge = require('webpack-merge');
module.exports = webpackMerge(baseConfig, {
    mode: 'development',
    devtool: 'cheap-eval-source-map',
    output: {
        filename: '[name].js',
        chunkFilename: '[name].chunk.js'
    },
    devServer: {
        overlay: true, // eslint-loader 将报错信息以弹窗形式展示
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        hot: true,
        port: 9000,
        proxy: {
            '/api': {
                target: 'http://www.andy.com',
                pathRewrite: { '^/api': '' },
                changeOrigin: true,
                secure: false
            }
        }
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css'
        })
    ]
});
