import path from 'path';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import 'webpack-dev-server';
import generateWebpackConfiguration from './webpack.config.common';

const config = generateWebpackConfiguration(
    'development',
    'client.tsx',
    'web',
    {
        output: {
            path: path.resolve(__dirname, '..', 'dist', 'public'),
            filename: 'bundle.js',
            clean: true
        }
    },
    [{
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]
    }],
    []
);

export default config;
