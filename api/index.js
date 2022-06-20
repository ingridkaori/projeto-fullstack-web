'use strict'

var mongoose = require('mongoose');

// Conexão com Banco de Dados
mongoose.Promisse = global.Promisse;
mongoose.connect('mongodb://localhost:27017/projeto-fullstack-web', {useMongoClient: true})
	.then(() => {
    console.log("Conexão realizada com sucesso!");
})
        .catch(err => console.log(err));
