import nodeExternals from 'webpack-node-externals';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import 'webpack-dev-server';
import generateWebpackConfiguration from './webpack.config.common';
import path from 'path';

const config = generateWebpackConfiguration(
    'development',
    'server.tsx',
    'node',
    {
        output: {
            path: path.resolve(__dirname, '..', 'dist'),
            filename: 'server.js',
            clean: true
        },
        externals: [ nodeExternals() ]
    },
    [{
        test: /\.css$/,
        use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
    }],
    [
        new MiniCssExtractPlugin()
    ]
);

export default config;
