import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config';

const app = express();

const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output?.publicPath
}));
app.use(webpackHotMiddleware(compiler, {
    path: '/__webpack_hmr',
    heartbeat: 5000
}));

app.listen(3000, () => console.log('Server listening on port 3000!'));
