var express = require('express');
var router = express.Router();
const storage = require('node-sessionstorage')
/* GET home page. */
router.get('/', function(req, res, next) {
  var loginToken = storage.getItem("loginToken");
  if(loginToken){
    res.render('index', { title: 'Express' });
  }else{
    res.redirect('login');
  }
});

// login
router.get('/login', function(req, res, next) {
  res.render('login');
});



module.exports = router;
