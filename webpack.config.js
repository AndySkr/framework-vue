const path = require('path');
const MyPlugin = require('./webpackPlugin/MyPlugin');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    {
                        loader: path.resolve('./loaders/loader.js'),
                        options: {
                            name: 'sherlock',
                        },
                    },
                ],
            },
        ],
    },
    plugins: [
        new MyPlugin(
            () => {
                console.log('构建完成');
            },
            (err) => {
                console.log(err);
            },
            {
                url: 'https://www.jianshu.com/',
            }
        ),
    ],
};
