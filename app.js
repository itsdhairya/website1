// let createError = require('http-error');
let cookieParser = require('cookie-parser');
// let logger = require('logger');
// const app = require("./server");
var express = require('express');
let path = require('path');
var port = 3000;

let mainRoute = require('./routes/index')

var app = express();

app.set('views', path.join(__dirname, './views'));
app.set('view engine', 'ejs'); 

// app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//for static files only
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules')));

// routes
app.use('/', mainRoute);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error',);
});

app.listen(port, function(){
  console.log('Server Active on', port);
}); 

module.exports = app;
