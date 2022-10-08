
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

var express = require("express");
var router = express.Router();

let MainController = require('../controller/index');

router.get("/", MainController.home);

router.get("views/index", MainController.home);

router.get("views/about", MainController.about);

router.get("/project", MainController.project);

router.get("/service", MainController.service);

router.get("/contactme", MainController.contactme);

module.exports = router;
