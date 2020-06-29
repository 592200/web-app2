var express = require('express');
var router = express.Router();
const storage = require('node-sessionstorage');
var _ = require('lodash');
var CalendarModel = require('../models/calendarsModel');
var Meter = require('../models/meterModel');
var MeterMonth = require('../models/meterMonthModel');


/* GET home page. */
router.get('/', function(req, res, next) {

  CalendarModel.find().exec((err,calendar) =>{
    if(err) console.log(err)

    res.render('index',{obj : 
      {
      page : 'index'
      }
    })

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
    res.render('calendarEdit',{obj : 
      {
        page : 'calenEdit'
      }
    })
  })
});

// Station service home
router.get('/station_service', function(req, res, next) {
 
  MeterMonth.aggregate(([
    {
      $match: { year: "2563" }
    },
    {
      $group: {
        _id: "$month",
        total: { $sum:1}
      }
    },
    
  ]),(err,meterMonth_data)=>{
    if(err) console.log(err)
    console.log(meterMonth_data)
    Meter.find().exec((err,meter_data) =>{
      if(err) console.log(err)
      console.log(meter_data.length)

      res.render('stationService',{obj : 
          {
          year:"2563",
          page:"sta_ser",
          meter_length: meter_data.length,
          month_datas : meterMonth_data
          }
        })
    })
  })


});

// Station service home post
router.post('/station_service', function(req, res, next) {
  var year = req.body.year
  console.log("year : "+year)
  MeterMonth.aggregate(([
    {
      $match: { year: year }
    },
    {
      $group: {
        _id: "$month",
        total: { $sum:1}
      }
    },
    
  ]),(err,meterMonth_data)=>{
    if(err) console.log(err)
    console.log(meterMonth_data)
    Meter.find().exec((err,meter_data) =>{
      if(err) console.log(err)
      console.log(meter_data.length)

      res.render('stationService',{obj : 
          {
          year: year,
          page:"sta_ser",
          meter_length: meter_data.length,
          month_datas : meterMonth_data
          }
        })
    })
  })
});

// Station service detail get param from edit
router.get('/station_service_detail/:_month:_year', function(req, res, next) {
  console.log("params : " + req.params._month)
  console.log("year : " + req.params._year)
 
  MeterMonth.find({year:req.params._year,month:req.params._month},(err,meterMonth_data)=>{
      if(err) console.log(err)
      console.log("find : "+ meterMonth_data)
      Meter.find().exec((err,meter_data) =>{
        if(err) console.log(err)
        console.log(meter_data.length)

        res.render('stationServiceDetail',{obj : 
          {
            month : req.params._month,
            year : req.params._year,
            meter_datas : meter_data,
            meterMonth_datas : meterMonth_data,
            page : "sta_ser"
          }
        })
      })
    })
  
});


router.post('/test', function(req, res, next) {
  console.log(req.body.firstname)
  res.render('stationService',{page : 'sta_ser'} )

});

module.exports = router;
