import path from 'path';
import webpack from 'webpack';

export default function config(
    mode: 'development' | 'production',
    entryFilename: string,
    target: 'web' | 'node',
    additionalConfiguration: webpack.Configuration,
    additionalModuleRules: webpack.RuleSetRule[],
    additionalPlugins: webpack.WebpackPluginInstance[]
): webpack.Configuration {
    const sourceDirectory = path.join(__dirname, '..', 'src');

    return {
        mode,
        entry: path.resolve(sourceDirectory, entryFilename),
        // output -> from additional configurations
        target,
        devtool: false,
        resolve: {
            extensions: [ '.tsx', '.ts', '.jsx', '.js', '.json' ]
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
                    test: /\.(png|svg|jpg|jpeg|gif)$/i,
                    type: 'asset/resource'
                },
                {
                    test: /\.ttf$/i,
                    type: 'asset/resource'
                },
                ...additionalModuleRules
            ]
        },
        plugins: [
            ...additionalPlugins,
            new webpack.SourceMapDevToolPlugin({})
        ],
        optimization: {
            usedExports: true,
            minimize: true,
            nodeEnv: mode
        },
        ...additionalConfiguration
    };
}
