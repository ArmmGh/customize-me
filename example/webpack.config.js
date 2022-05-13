/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

exports.default = {
    mode: 'development',
    entry: {
        example: './index.ts'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve('../', 'dist')
    },
    devtool: 'inline-source-map',
    devServer: {
        static: './lib'
    },
    module: {
        rules: [
            {
                test: /.ts$/,
                use: ['ts-loader'],
                exclude: /node_modules/
            },
            {
                test: /.(scss)$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
                exclude: /node_modules/
            }
        ]
    },
    resolve: {
        modules: ['node_modules', path.resolve('src')],
        extensions: ['.ts', '.js', '.css', '.scss']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            inject: 'body'
        })
    ]
};
