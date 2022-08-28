import express from 'express';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import App from './App';

const app = express();

app.use(express.static('dist'));
app.get('/', (req, res) => {
    const content = renderToString(
        <StaticRouter location={req.path}>
            <App />
        </StaticRouter>
    );
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Rick and Morty App</title>
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet">
    </head>
    <body>
        <div id="root">${content}</div>
        <script src="./public/bundle.js"></script>
    </body>
    </html>`);
});

app.listen(3000, () => console.log('Server is listening on port 3000!'));
