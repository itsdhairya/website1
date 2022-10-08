var express = require('express');
var body_parser = require('body-parser');
var app = express()
const path = require('path');

// Port config
var port = 3000;

app.use(body_parser.json());

app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'ejs');


app.listen(port, function(){
  console.log('Server Active on', port);
});

module.exports = app;