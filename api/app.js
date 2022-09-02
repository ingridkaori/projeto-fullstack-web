'use strict'

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Carregar Rotas

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors


// Rotas
const rotasIndex = require('./rotas/index');
app.use(rotasIndex);

const rotasUsuario = require('./rotas/usuario');
app.use(rotasUsuario);

// Exportações
module.exports = app;