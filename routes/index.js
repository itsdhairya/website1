var express = require('express');
var router = express.Router();
let controlerIndex = require('../controllers/index');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home' });
});
router.get('/service', function(req, res, next) {
  res.render('service', { title: 'Services' });
});
router.get('/contact', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});
router.get('/project', function(req, res, next) {
  res.render('project', { title: 'Projects' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});


module.exports = router;
