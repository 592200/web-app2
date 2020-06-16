var express = require('express');
var router = express.Router();
const storage = require('node-sessionstorage')
/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index')
  // var loginToken = storage.getItem("loginToken");
  // var loginUserData = storage.getItem("loginUserData");
  // if(loginToken&&(loginUserData!=null)){
  //   res.render('index', { title: 'Express',user : loginUserData });
  // }else{
  //   res.redirect('login');
  // }
});

// login
router.get('/login', function(req, res, next) {
  res.render('login');
});



module.exports = router;
