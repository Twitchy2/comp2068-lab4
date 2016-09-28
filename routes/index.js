var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'The Sikora-Beder Family' });
});

/* GET all the people */
router.get('/logan', function(req, res, next) {
  res.render('logan', { title: 'Logan Sikora-Beder'});
});
router.get('/jaclyn', function(req, res, next) {
  res.render('jaclyn', { title: 'Jaclyn Beder'});
});
router.get('/peter', function(req, res, next) {
  res.render('peter', { title: 'Peter Sikora'});
});
router.get('/john', function(req, res, next) {
  res.render('john', { title: 'John McFadden'});
});
router.get('/mickey', function(req, res, next) {
  res.render('mickey', { title: 'Albert Sikora'});
});


module.exports = router;
