import path from 'path';
import webpack from 'webpack';
import TerserPlugin from 'terser-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
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
        filename: '[name].js',
        chunkFilename: '[name].js',
        assetModuleFilename: '[name][ext]',
        hashDigestLength: 8,
        publicPath: '/',
        clean: true
    },
    target: 'web',
    devtool: 'inline-source-map',
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
            },
            {
                test: /\.ejs$/i,
                use: 'raw-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'public', 'index.ejs'),
            favicon: path.resolve(__dirname, 'public', 'favicon.ico'),
            filename: 'index.ejs',
            inject: true
        }),
        new webpack.HotModuleReplacementPlugin(),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[name].css'
        }),
        new ReactRefreshPlugin({
            overlay: {
                sockIntegration: 'whm'
            }
        })
    ],
    optimization: {
        usedExports:true,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin()
        ]
    }
};

export default config;
