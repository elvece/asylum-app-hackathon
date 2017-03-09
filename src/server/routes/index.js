var express = require('express');
var router = express.Router();
//this is some data we found that shows the number of refugees accepted into countries and the country of origin
var parsedJSON = require('../data/byCountryOfOrigin.json');

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

router.post('/match', function(req, res, next) {
  var userData = req.body;
  if(parsedJSON.Country === userData.Country){

  }
});

module.exports = router;
