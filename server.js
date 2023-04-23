// Exemplificação dos comandos git
// biblioteca js que faz o mapeamento das pastas em função do server.js
require('rootpath')(); 
// Inicialização do express. 
var express = require('express');
// essa biblioteca será utilizada na API para fazer autenticaçao seguindo o método JWT. 
// Se quiser estudar um pouco mais sobre JWT, pesquise aqui
// https://jwt.io/introduction/
var config = require("./config.json");

// Criação da API e indicação que trabalha com JSON
var api = express();
api.use(express.urlencoded());
api.use(express.json());


api.use('/api/discursiva04', require('./controllers/api/discursiva04.controller'));
api.use('/api/about', require('./controllers/api/about.controller'));

// process.env.PORT é uma variável injetada pelo Azure Web App. Caso ela não exista, será utilizada a porta fixa (6000)
var apiPort = process.env.PORT || config.port;


// start server API
var serverAPI = api.listen(apiPort, function () {
    console.log('Server API listening at http://' + serverAPI.address().address + ':' + serverAPI.address().port);
});

console.log('Application started');
