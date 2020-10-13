var express = require('express');
var AccountHandler = require('./AccountHandler');
var AccountDbHandler = require('./AccountDbHandler');
var DataSource = require('./DataSource')
var logger = require('morgan');

const app = new express();
app.use(logger('dev'));
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

// Switch between mysql db and in-memory database based off environment variable
if(DataSource.useDatabase){
    console.log("Using mysql database");
    AccountDbHandler(app);
} else {
    console.log("Using in-memory database");
    AccountHandler(app);
}

module.exports = app;