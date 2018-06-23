var express = require('express');
var app = express ();
var db = require ('./db');
var UserController = require('./Users/UserController');
  app.use('/Users', UserController);
module.exports = app ;
