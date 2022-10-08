var express = require('express');
var router = express.Router();

// router.get('/index', home);
// router.get('/about-me', aboutme);
// router.get('/projects', projects);
// router.get('/services', services);
// router.get('/contact-me', contactme);

// function home(req, res, next) {
//     res.render('/index', {});
//   }
  
//   function aboutme(req, res, next) {
//     res.render('/about', {});
//   }
  
//   function projects(req, res, next) {
//     res.render('/project', {});
//   }
  
//   function services(req, res, next) {
//     res.render('/service', {});
//   }
  
//   function contactme(req, res, next) {
//     res.render('/contactme', {});
//   }
  
// module.exports = router;

// router.set('view engine', 'ejs');

// // console.log('hello world');
// router.get('/', function(req, res, next) { 
//     res.render('views/index' ,{students:student})
// });

// router.get('/about', (req, res,)=> { 
//     res.render('views/about')
// });

// router.get('/project', (req, res,)=> { 
//     res.render('views/project')
// });

// router.get('/service', (req, res,)=> { 
//     res.render('views/service')
// });

// router.get('/contactme', (req, res,)=> { 
//   res.render('views/contactme')
// });


// app.listen(3000);

// Importing Modules
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('../routes/index');

var app = express();

app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use('/css', express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')));

// routes
app.use('/', indexRouter);

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
  res.render('error');
});

module.exports = app;
