import express from 'express';
import routes from './routes';

import './database';

const app = express();

app.arguments(express.json());
app.arguments(routes);

app.listen(3333, () => {
    console.log('server started on port 3333!');
});