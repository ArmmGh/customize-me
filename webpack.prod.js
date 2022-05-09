import { merge } from 'webpack-merge';
import common from './webpack.common.js';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import path from 'path';

export default merge( {
	mode: 'production',
    entry: './src/index.ts',
	output: {
		path: path.resolve('lib'),
		filename: 'index.js',
        library: 'CustomizeMe'
	},
    
	plugins: [new CleanWebpackPlugin()]
}, common);
