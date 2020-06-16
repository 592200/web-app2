var express = require('express');
var router = express.Router();
var User = require('../models/usersModel');
var _ = require('lodash');
const storage = require('node-sessionstorage')

/* GET users listing. */
router.get('/', function(req, res, next) {
  var loginToken = storage.getItem("loginToken");
  if(loginToken){
  res.send('respond with a resource');
}else{
  res.redirect('login');
}
});

//authentication
router.post('/login', (req ,res ,next)=>{
  var loginToken = storage.getItem("loginToken");
  //var search = _.omitBy(req.body ,_.isEmpty)
  User.findOne(req.body ,(err,data)=>{
    if(err) console.log(err)
    if(data){
      //console.log('data is' + data)
      storage.setItem("loginToken", true);
      storage.setItem("loginUserData", data);
      res.render('index',{user : data})
    }
     
    else{
      res.render('login',{message : 'Email or Password incorrect'})
    }
  })
})

module.exports = router;
