import path from 'path';
import webpack from 'webpack';
import nodeExternals from 'webpack-node-externals';
import TerserPlugin from 'terser-webpack-plugin';

const config: webpack.Configuration = {
    mode: 'development',
    entry: {
        server: path.resolve(process.cwd(), 'src', 'server.tsx')
    },
    output: {
        path: path.join(process.cwd(), 'dist'),
        filename: '[name].js',
        chunkFilename: '[name].js',
        clean: true
    },
    target: 'node',
    externals: [ nodeExternals() ],
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
            }
        ]
    },
    optimization: {
        usedExports: true,
        minimizer: [
            new TerserPlugin()
        ]
    }
};

export default config;
