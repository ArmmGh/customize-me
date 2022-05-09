import { merge } from 'webpack-merge';
import common from './webpack.common.js';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import path from 'path';

export default merge(
    {
        mode: 'production',
        entry: './src',
        output: {
            path: path.resolve('lib'),
            filename: 'index.js',
            library: '$',
            libraryTarget: 'commonjs2'// 'umd'
        },

        plugins: [new CleanWebpackPlugin()]
    },
    common
);
