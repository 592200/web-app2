var express = require('express');
var router = express.Router();
const storage = require('node-sessionstorage');
var CalendarModel = require('../models/calendarsModel');


/* GET home page. */
router.get('/', function(req, res, next) {

  CalendarModel.find().exec((err,calendar) =>{
    if(err) console.log(err)
    //console.log(calendar[0])
    // for(let i=0;i<calendar.length;i++){
    //   delete calendar[i]._id
    // }

    // calendar.push('1')

    //console.log(calendar)
    res.render('index',{page :'1'} )
  })
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

router.get('/calendarEdit', function(req, res, next) {
  CalendarModel.find().exec((err,calendar) =>{
    if(err) console.log(err)
    console.log(calendar)
    // console.log(obj)
    // console.log('page '+obj.page)
    // console.log('title :'+obj.calendar[0].title)
    res.render('calendarEdit',{page : '2'} )
  })

});

router.get('/station_service', function(req, res, next) {
  
    res.render('stationService',{page : 'sta_ser'} )

});

module.exports = router;
