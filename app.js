/**
 * Module dependencies.
 */

var express = require('express');

var db = require('./model/db');
var routes = require('./routes');
var user = require('./routes/user');
var http = require('http');
var path = require('path');
var morgan  = require('morgan')
var bodyParser = require('body-parser')
//var favicon = require('serve-favicon');
var methodOverride = require('method-override');
var errorhandler = require('errorhandler');

var app = express();

//app.configure(function(){
  app.set('port', process.env.PORT || 3000);
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  //app.use(express.serve-favicon());
  //app.use(favicon(__dirname + '/public/favicon.ico'));
  app.use(morgan());
  //app.use(express.logger('dev'));
  app.use(bodyParser.json());
  app.use(methodOverride());
  //app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
//);

//app.configure('development', function(){
  app.use(errorhandler());
//});

app.get('/', routes.index);
app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log("Express server listening on port " + app.get('port'));
});