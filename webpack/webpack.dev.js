const path = require('path');
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const smp = new SpeedMeasurePlugin(); // 分析记录打包时间
const DashboardPlugin = require('webpack-dashboard/plugin');
const baseConfig = require('./webpack.config');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
module.exports = smp.wrap(
    webpackMerge(baseConfig, {
        mode: 'development',
        devtool: 'cheap-module-eval-source-map',
        output: {
            path: path.resolve(__dirname, '../dist'),
            filename: '[name].[hash:5].js',
            chunkFilename: '[name].[hash:5].chunk.js'
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
            // new DashboardPlugin() // 编译过程输出表格化
            new webpack.HotModuleReplacementPlugin()
        ]
    })
);
