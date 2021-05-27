const path = require('path');
const RefreshWebPackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
    name: 'fetchinf-frontend-interview',
    mode: 'development',
    devtool: 'eval',
    resolve: {
        extensions: ['.js', '.jsx', '.css']
    },
    entry: {
        app: ['./client']
    },

    module: {
        rules: [
            {
                test: /\.jsx?/,
                loader: 'babel-loader',
                options: {
                    presets:
                        [
                            "@babel/preset-env",
                            '@babel/preset-react'
                        ],
                        plugins: [
                        ['react-refresh/babel'],
                    ],
                },
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader'],
            },
        ],
    },
    plugins: [
        new RefreshWebPackPlugin(),
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/dist/',
    },
    devServer: {
        publicPath: '/dist/',
        hot: true,
    },
}

