const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Servidor iniciado');
});

app.listen(3333,() => {
    console.log('Servidor iniciado em http://localhost:3333');
});