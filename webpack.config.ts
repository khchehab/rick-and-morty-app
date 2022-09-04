import path from 'path';
import webpack from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import 'webpack-hot-middleware';

const config: webpack.Configuration = {
    mode: 'development',
    entry: [
        'webpack-hot-middleware/client',
        path.resolve(__dirname, 'src', 'client.tsx')
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        // filename: '[name].[contenthash].js',
        // chunkFilename: '[name].[contenthash].js',
        // assetModuleFilename: '[name].[contenthash][ext]',
        filename: '[name].js',
        chunkFilename: '[name].js',
        assetModuleFilename: '[name][ext]',
        hashDigestLength: 8,
        publicPath: '/',
        clean: true
    },
    target: 'web',
    devtool: false,
    resolve: {
        extensions: [ '.ts', '.tsx', '.js', '.jsx', '.json' ]
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/i,
                exclude: /node_modules/i,
                use: 'babel-loader'
            },
            {
                test: /\.tsx?$/i,
                exclude: /node_modules/i,
                use: 'ts-loader'
            },
            {
                test: /\.css$/,
                use: [ MiniCssExtractPlugin.loader, 'css-loader' ]
            },
            {
                test: /\.(png|svg|jpe?g|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.(woff2?|eot|ttf|otf)$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].css'
        }),
        new ReactRefreshPlugin({
            overlay: {
                sockIntegration: 'whm'
            }
        }),
        new webpack.SourceMapDevToolPlugin({})
    ],
    optimization: {
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin()
        ]
    }
};

export default config;
