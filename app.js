//app.js
const index = require('./index');
const express = require('express');
const app = express();

const bodyParser = require('express');
const port = 3000;
//Configurando o body parser para interpretar request mais tarde
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
