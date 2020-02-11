const baseConfig = require('./webpack.config');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const path = require('path');
const merge = require('webpack-merge');
module.exports = merge(baseConfig, {
    mode: 'production',
    devtool: 'cheap-module-source-map',
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: '[name].[contenthash:5].js',
        chunkFilename: '[name].[contenthash:5].js'
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: 'css/[name].css', ////都提到build目录下的css目录中
            chunkFilename: 'css/[name].css'
        }),
        new HardSourceWebpackPlugin([
            {
                test: /mini-css-extract-plugin[\\/]dist[\\/]loader/
            }
        ])
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserJSPlugin({
                include: /\/src/,
                cache: true,
                parallel: 4 //多进程并行运行次数
            }),
            new OptimizeCSSAssetsPlugin()
        ],
        splitChunks: {
            chunks: 'all',
            automaticNameDelimiter: '~',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        }
    }
});
