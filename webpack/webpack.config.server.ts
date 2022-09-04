import path from 'path';
import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

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
                type: 'asset/resource',
                generator: {
                    filename: 'public/[name][ext]'
                }
            },
            {
                test: /\.ttf$/i,
                type: 'asset/resource',
                generator: {
                    filename: 'public/[name][ext]'
                }
            }
        ]
    },
    plugins: [
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
