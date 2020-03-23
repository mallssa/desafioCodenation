const express = require('express');
const cifraController = require('./controllers/cifraController');

const routes = express.Router();

routes.get('/cifra', cifraController.index);

module.exports = routes;