export default {
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
};
