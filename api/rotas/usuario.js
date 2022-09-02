'use strict'

var express = require('express');
var usuarioControle = require('../controle/usuario');

var api = express.Router();

api.get('/usuario', usuarioControle.inicio);
api.get('/usuario/teste', usuarioControle.teste);

module.exports = api;