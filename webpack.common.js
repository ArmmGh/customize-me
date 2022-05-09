import path from 'path';

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
        modules: ['node_modules', path.resolve('src')],
        extensions: ['.ts', '.js', '.css', '.scss']
    }
};
