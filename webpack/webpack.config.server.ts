import path from 'path';
import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import 'webpack-dev-server';

const config: webpack.Configuration = {
    mode: 'development',
    entry: path.resolve(__dirname, '..', 'src', 'server.tsx'),
    output: {
        path: path.join(__dirname, '..', 'dist'),
        filename: 'server.js',
        clean: true
    },
    target: 'node',
    externals: [ nodeExternals() ],
    // devServer: {
    //     port: 3000,
    //     static: {
    //         directory: path.join(__dirname, '.., 'public')
    //     },
    //     open: true,
    //     hot: true,
    //     liveReload: true
    // },
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
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource'
            },
            {
                test: /\.ttf$/i,
                type: 'asset/resource'
            }
        ]
    },
    plugins: [
        // new HtmlWebpackPlugin({
        //     template: path.join(__dirname, '.., 'public', 'index.html')
        // }),
        new MiniCssExtractPlugin(),
        new webpack.SourceMapDevToolPlugin({})
    ],
    optimization: {
        usedExports: true,
        minimize: true,
        nodeEnv: 'development'
    }
};

export default config;
