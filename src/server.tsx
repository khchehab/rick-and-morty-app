import fs from 'fs';
import path from 'path';
import express from 'express';
import favicon from 'serve-favicon';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

const app = express();

app.use(express.static('dist'));
app.use(favicon(path.resolve(__dirname, '..', 'public', 'favicon.ico')));
app.get('/', (req, res) => {
    const content = renderToString(
        <StaticRouter location={req.path}>
            <App />
        </StaticRouter>
    );

    const htmlFile = fs.readFileSync(path.resolve(__dirname, '..', 'public', 'index.html'), { encoding: 'utf-8' })
        .replace('<div id="root"></div>', `<div id="root">${content}</div>`);

    res.send(htmlFile);
});

app.listen(3000, () => console.log('Server is listening on port 3000!'));

