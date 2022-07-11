'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = 3800;

// Conexão com o banco de dados
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/projeto-web-fullstack')
    .then(() => {
        console.log("++ Conexão realizada com sucesso!");
    })
    .catch(err => console.log(err));