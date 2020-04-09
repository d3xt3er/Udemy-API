const express = require('express');
const UserController = require('../src/app/controllers/UserController');

const routes = new express.Router();

//Rotas
routes.get('/users', (req, res) => {
    res.send('Servidor iniciado');
});

routes.post('/users', UserController.store);

// routes.put('/users/:id', (req, res) => {
//     const id = req.params.id;
//     const tipo = req.query.id;
//     res.send('Editar usuario'+id);
// });

// routes.delete('/users/:id', (req, res) => {
//     const id = req.params.id;
//     res.send('Deletar usuario'+id);
// });

module.exports = routes;
