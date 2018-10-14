var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'login' });
});

router.post('/loginform', function(req, res, next) {
	let data = req.body
	console.log(data)
  res.render('dashboard', { title: 'dashboard', name : data.name });
});

module.exports = router;
