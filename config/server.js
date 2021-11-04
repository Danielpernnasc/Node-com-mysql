var express = require("express");
var consign = require('consign');
var validatorExpress  = require('express-validator');



var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(express.static('./app/public'));
app.use(express.urlencoded({extended: true}));
app.use(validatorExpress());
//bodyPraser foi depreciado só usar express mesmo


consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .then('app/models')
    .then('app/controllers')
    .into(app);
    

module.exports = app;

