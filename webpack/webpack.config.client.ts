import path from 'path';
import webpack from 'webpack';

const config: webpack.Configuration = {
    mode: 'development',
    entry: path.resolve(__dirname, '..', 'src', 'client.tsx'),
    output: {
        path: path.join(__dirname, '..', 'dist', 'public'),
        filename: 'bundle.js',
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
                use: [ 'style-loader', 'css-loader' ]
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
                    filename: '[name][ext]'
                }
            }
        ]
    },
    plugins: [
        new webpack.SourceMapDevToolPlugin({})
    ],
    optimization: {
        usedExports: true,
        minimize: true,
        nodeEnv: 'development'
    }
};

export default config;
