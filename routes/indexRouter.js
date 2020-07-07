var express = require('express');
var router = express.Router();
const storage = require('node-sessionstorage');
var _ = require('lodash');
var CalendarModel = require('../models/calendarsModel');
var Meter = require('../models/meterModel');
var MeterMonth = require('../models/meterMonthModel');
var YearData = require('../models/yearsModel');


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
        console.log(meter_data)
        
        YearData.find().exec((err,year_data)=>{
          var old_index_year = 0    
          for(var i=0;i<year_data.length;i++){
            if(req.params._year==year_data[i].year)
              old_index_year = i-1
          }
          console.log("old_id_year = "+old_index_year)
          if(req.params._month==1){
            var old_month = 12
            old_index_year = old_index_year
          }
          else{
            var old_month = req.params._month-1
            old_index_year = old_index_year+1
          }
          console.log("find old year : "+year_data[old_index_year].year)
          console.log("find old month : "+old_month)
          MeterMonth.find({
            year:year_data[old_index_year].year,
            month:old_month
          },(err,old_meterMonth_data)=>{

            console.log(old_meterMonth_data)
            res.render('stationServiceDetail',{obj : 
              {
                month : req.params._month,
                year : req.params._year,
                meter_datas : meter_data,
                meterMonth_datas : meterMonth_data,
                old_meterMonth_datas : old_meterMonth_data,
                page : "sta_ser"
              }
            })
          })
        })

      })
    })
  
});


// Station service detail ADD
router.post('/station_service_detail/add', function(req, res, next) {
  console.log(req.body);
  var doc = new MeterMonth(
    {
      meter_id : req.body.meterID,
      month : req.body.month,
      year : req.body.year,
      meter_value : req.body.meterValue,
      kWH_house : req.body.kwhHouse,
      kWH_trans_office : req.body.kwhTransOffice,
      kWH_outside_person : req.body.kwhOutsidePerson,
      kWH_other : req.body.kwhOther,
      update_date : Date.now()
    });
  doc.save((err,data)=>{
    if(err) console.log(err)
    res.redirect("/station_service_detail/"+ req.body.month+req.body.year)
  })

})

// Station service detail EDIT
router.post('/station_service_detail/edit', function(req, res, next) {
  console.log(req.body);

  MeterMonth.findByIdAndUpdate(req.body.meterMonthID, {
      meter_id : req.body.meterID,
      month : req.body.month,
      year : req.body.year,
      meter_value : req.body.meterValue,
      kWH_house : req.body.kwhHouse,
      kWH_trans_office : req.body.kwhTransOffice,
      kWH_outside_person : req.body.kwhOutsidePerson,
      kWH_other : req.body.kwhOther,
      update_date : Date.now()
    }, (err,data)=>{
    if(err) console.log(err)
    res.redirect("/station_service_detail/"+ req.body.month+req.body.year)
  })

})



router.post('/test', function(req, res, next) {
  console.log(req.body.firstname)
  res.render('stationService',{page : 'sta_ser'} )

});

module.exports = router;
