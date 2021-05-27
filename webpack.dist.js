const path = require('path');

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
                },
            },
            {
                test:/\.css$/,
                use:['style-loader','css-loader'],
            },
        ],
    },
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
        publicPath: '/dist/',
    },
}
