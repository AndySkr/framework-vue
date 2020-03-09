const path = require('path');
const WorkboxPlugin = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
module.exports = env => {
    return {
        mode: 'none',
        entry: {
            app: './src/index.js'
        },
        output: {
            filename: '[name].bundle.js',
            path: path.resolve(__dirname, 'dist')
        },
        devServer: {
            open: true,
            contentBase: 'dist',
            hot: true, //启用热更新 第一步
            host: '0.0.0.0'
        },
        plugins: [
            new HtmlWebpackPlugin({
                title: 'pwa',
                meta: {
                    viewport: (content =
                        'width=device-width,height=device-height,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no')
                },
                favicon: path.resolve('./src/assets/icons/dao.gif')
            }),
            new WorkboxPlugin.GenerateSW({
                // 这些选项帮助 ServiceWorkers 快速启用
                // 不允许遗留任何“旧的” ServiceWorkers
                clientsClaim: true,
                skipWaiting: true
            }),
            new WebpackPwaManifest({
                name: "Andy's PWA Page",
                short_name: 'Page',
                description: 'An isomorphic progressive Page built by React & Node',
                background_color: '#333',
                theme_color: '#333',
                filename: 'manifest.[hash:8].json',
                publicPath: '/',
                icons: [
                    {
                        src: path.resolve('src/assets/icons/dao.gif'),
                        sizes: [96, 128, 192, 256, 384, 512],
                        destination: path.join('icons')
                    }
                ],
                ios: {
                    'apple-mobile-web-app-title': "Andy's Page",
                    'apple-mobile-web-app-status-bar-style': '#000',
                    'apple-mobile-web-app-capable': 'yes',
                    'apple-touch-icon': '//xxx.com/icon.png'
                }
            }),
            new webpack.HotModuleReplacementPlugin()
        ],
        module: {
            rules: [
                {
                    test: /\.(png|jpg|gif)$/i,
                    use: [
                        {
                            loader: 'url-loader',
                            options: {
                                esModule: false
                            }
                        }
                    ]
                }
            ]
        }
    };
};
