
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

router.get("/", function (req, res, next) {
  res.render("index", { title: "Home" });
});

router.get("/index", function (req, res, next) {
  res.render("index", { title: "Home" });
});

router.get("/about", function (req, res, next) {
  res.render("index", { title: "About me" });
});

router.get("/project", function (req, res, next) {
  res.render("index", { title: "Projects" });
});

router.get("/service", function (req, res, next) {
  res.render("index", { title: "Services" });
});

router.get("/contactme", function (req, res, next) {
  res.render("index", { title: "Contact me" });
});

module.exports = router;
