var express = require('express');
var router = express.Router();
var User = require('../models/usersModel');
var _ = require('lodash');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//authentication
router.post('/login', (req ,res ,next)=>{
  
  //var search = _.omitBy(req.body ,_.isEmpty)
  User.findOne(req.body ,(err,data)=>{
    if(err) console.log(err)
    console.log('data is' + data)
    if(data){
      res.render('index',{user : data})
    }
    else{
      res.render('login',{message : 'Email or Password incorrect'})
    }
  })
})

module.exports = router;
