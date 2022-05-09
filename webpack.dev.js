import { merge } from 'webpack-merge';
import common from './webpack.common.js';
import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';

export default merge(common, {
    entry: {
        example: './example/index.ts'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(path.dirname('dist'))
    },
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './example/index.html',
            inject: 'body'
        })
    ]
});
