var express = require('express');
var router = express.Router();

var countries = require('../../../data/countries');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Humanwire Refugee Application' });
});

router.get('/personal-info', function(req, res, next) {
  res.render('personal-info', { title: 'Humanwire Refugee Application', countries: countries });
});

router.get('/background', function(req, res, next) {
  res.render('background', { title: 'Humanwire Refugee Application' });
});

router.get('/financial', function(req, res, next) {
  res.render('financial', { title: 'Humanwire Refugee Application' });
});


router.get('/private-info', function(req, res, next) {
  res.render('private-info', { title: 'Humanwire Refugee Application' });
});

module.exports = router;
