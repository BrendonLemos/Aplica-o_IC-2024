const express = require('express');

const app = express();

app.get('/projects', (request, response) => {
    return response.send('hello World');
});

app.listen(3333);

