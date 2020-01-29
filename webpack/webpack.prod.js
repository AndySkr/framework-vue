const baseConfig = require('./webpack.config');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const merge = require('webpack-merge');
module.exports = merge(baseConfig, {
    mode: 'production',
    output: {
        filename: '[name].js',
        chunkFilename: '[name].[contenthash:5].js'
    },
    plugins: [],
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
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    priority: -10
                }
            }
        }
    }
});
