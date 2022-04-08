import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

export default {
	entry: {
		example: './example/index.ts'
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(path.dirname('dist'))
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
		extensions: ['.ts', '.js', '.css', '.scss']
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: './example/index.html',
			inject: 'body'
		})
	]
};
