var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/personal-info', function(req, res, next) {
  res.render('personal-info', { title: 'Express' });
});

module.exports = router;
