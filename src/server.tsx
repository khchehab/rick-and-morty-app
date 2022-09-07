import path from 'path';
import express from 'express';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import webpackConfig from '../webpack.config.client';
import App from './App';

const app = express();

const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
    publicPath: webpackConfig.output?.publicPath,
    serverSideRender: true
}));
app.use(webpackHotMiddleware(compiler));

app.set('views', path.resolve(__dirname, 'public'));
app.set('view engine', 'ejs');
app.get('*', (req, res) => {
    const content = renderToString(<StaticRouter location={req.url}>
        <App />
    </StaticRouter>);
    res.render('index', {
        content
    });
});

app.listen(3000, () => console.log('Server listening on port 3000!'));
