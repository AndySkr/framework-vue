const baseConfig = require('./webpack.config');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const HardSourceWebpackPlugin = require('hard-source-webpack-plugin');
const path = require('path');
const merge = require('webpack-merge');
module.exports = merge(baseConfig, {
	mode: 'production',
	devtool: 'cheap-module-source-map',
	output: {
		path: path.resolve(__dirname, '../dist'),
		filename: 'scripts/[name].[contenthash:5].js',
		chunkFilename: 'scripts/[name].[contenthash:5].js'
	},
	plugins: [
		new HardSourceWebpackPlugin([
			{
				test: /mini-css-extract-plugin[\\/]dist[\\/]loader/
			}
		])
	],
	performance: false,
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
		runtimeChunk: true,
		splitChunks: {
			chunks: 'all',
			minSize: 30000, // 形成一个新代码块最小的体积
			maxAsyncRequests: 5, // 按需加载时候最大的并行请求数
			maxInitialRequests: 3, // 最大初始化请求数
			automaticNameDelimiter: '~',
			cacheGroups: {
				vendors: {
					// 项目基本框架等
					chunks: 'all',
					test: /(vue|vuex|axios|vue-router)/,
					priority: 100,
					name: 'vendors'
				},
				elementUI: {
					chunks: 'all',
					test: /(element-ui)/,
					priority: 95,
					name: 'element-ui'
				},
				'async-commons': {
					// 异步加载公共包、组件等
					chunks: 'async',
					minChunks: 2,
					name: 'async-commons',
					priority: 90
				},
				commons: {
					// 其他同步加载公共包
					chunks: 'all',
					test: /(element-ui)/,
					minChunks: 2,
					name: 'commons',
					priority: 80
				}
			}
		}
	}
});
