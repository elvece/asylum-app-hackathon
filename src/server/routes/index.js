var express = require('express');
var router = express.Router();
//this is some data we found that shows the number of refugees accepted into countries and the country of origin
var parsedJSON = require('../data/byCountryOfOrigin.json');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/personal-info', function(req, res, next) {
  res.render('personal-info', { title: 'Express' });
});

router.post('/match', function(req, res, next) {
  var userData = req.body;
  if(parsedJSON.Country === userData.Country){

  }
});

module.exports = router;
