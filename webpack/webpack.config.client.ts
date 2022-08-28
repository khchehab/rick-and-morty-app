import path from 'path';
import webpack from 'webpack';
// import HtmlWebpackPlugin from 'html-webpack-plugin';
// import 'webpack-dev-server';

const config: webpack.Configuration = {
    mode: 'development',
    entry: path.resolve(__dirname, '..', 'src', 'client.tsx'),
    output: {
        path: path.join(__dirname, '..', 'dist', 'public'),
        filename: 'bundle.js',
        clean: true
    },
    target: 'web',
    // devServer: {
    //     port: 3000,
    //     static: {
    //         directory: path.join(__dirname, '..', 'public')
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
                use: [ 'style-loader', 'css-loader' ]
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
        new webpack.SourceMapDevToolPlugin({})
    ],
    optimization: {
        usedExports: true,
        minimize: true,
        nodeEnv: 'development'
    }
};

export default config;
