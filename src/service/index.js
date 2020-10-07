var express = require('express');
var AccountHandler = require('./AccountHandler');
var logger = require('morgan');

const app = new express();
app.use(logger('dev'));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

AccountHandler(app);

module.exports = app;
