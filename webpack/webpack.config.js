const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
module.exports = {
	resolve: {
		extensions: ['.vue', '.tsx', '.ts', '.js'],
		alias: {
			'@': path.resolve(__dirname, '../src/*')
		}
	},
	entry: {
		main: path.resolve(__dirname, '../src/index.ts')
	},
	module: {
		rules: [
			{
				test: /\.vue$/,
				loader: 'vue-loader',
				include: /src/
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				options: {
					babelrc: true,
					cacheDirectory: true
				}
			},
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
				options: {
					transpileOnly: true
				}
			},
			{
				test: /\.css$/,
				use: [
					{
						loader: !process.env.npm_config_mode ? 'vue-style-loader' : MiniCssExtractPlugin.loader
					},
					'css-loader'
				]
			},
			{
				test: /\.less$/,
				use: [
					{
						loader: !process.env.npm_config_mode ? 'vue-style-loader' : MiniCssExtractPlugin.loader
					},
					'css-loader',
					{
						loader: 'postcss-loader',
						options: {
							ident: 'postcss'
						}
					},
					'less-loader'
				]
			},
			{
				test: /(\.jpg)|(\.png)|(\.jpeg)|(\.gif)$/,
				use: {
					loader: 'url-loader',
					options: {
						esModule: false
					}
				}
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin(),
		new htmlWebpackPlugin({
			template: 'index.ejs',
			filename: 'index.html',
			environment: process.env.npm_config_mode || 'dev'
		}),
		new VueLoaderPlugin(),
		new MiniCssExtractPlugin({
			filename: 'styles/[name].[hash:5].css',
			chunkFilename: 'styles/[id].[hash:5].css'
		}),
		new WebpackBuildNotifierPlugin({
			// 全局提示webpack打包完成结果
			title: 'Andy`s project',
			logo: path.resolve('../src/assets/images/blackManba.jpg'),
			suppressSuccess: true
		}),
		new ForkTsCheckerWebpackPlugin({
			async: false
		})
	]
};
