var express = require('express');
var router = express.Router();
const storage = require('node-sessionstorage');
var _ = require('lodash');
var CBModel = require('../models/cbModel');
var Subs = require('../models/substationModel');

/* GET equipment first page. */
router.get('/', function(req, res, next) {
    
    Subs.find().exec((err,Sub_data)=>{
        if(err) console.log(err)
        //console.log(Sub_data)
        CBModel.aggregate(([
            {
                $lookup: {
                from : 'substations', 
                localField : 'sub_id', 
                foreignField : 'id', 
                as : 'nameOfSub'
                }
            }
            
        ]),(err,CB_data)=>{
            if(err) console.log(err)
            //console.log(CB_data)
            //console.log(CB_data[0].nameOfSub)
        
            res.render('equipment',{obj : 
                {
                page : 'data_z3_eq',
                CB_datas : CB_data
                }
            })
        })
    })

})

/* GET equipment ADD of EDIT CB page. */
router.get('/CB', function(req, res, next) {

    Subs.find().exec((err,sub_data)=>{
        if(err) console.log(err)
        console.log(sub_data)
        res.render('equipmentCB',{obj : 
            {
            page : 'data_z3_eq',
            sub_datas : sub_data
            }
        })
    })
})

// post add
router.post('/addCB', function(req, res, next) {

    //console.log(req.body)
    var doc = new CBModel(req.body);

    doc.save((err,data)=>{
    if(err) console.log(err)
    //console.log(data)
    res.redirect("/equipment")
    })
    
    
})
// post delete
router.post('/deleteCB/:_id', function(req, res, next){
    CBModel.findByIdAndRemove(req.params._id, (err,data)=>{
      if(err) console.log(err)
      res.redirect('/equipment')
  
    })
  })

//update 
router.get('/editCB/:_id', function(req, res, next){
    console.log(req.params._id)
    Subs.find().exec((err,sub_data)=>{
        if(err) console.log(err)
        CBModel.findById(req.params._id, (err,CB_data)=>{
            if(err) console.log(err)
            res.render('equipmentCB',{obj : 
                {
                page : 'data_z3_eq',
                sub_datas : sub_data,
                CB_datas : CB_data
                }
            })
        })
    })
})
//update post
router.post('/editCB/:_id', function(req, res, next){
    //console.log(req.body)
    CBModel.findByIdAndUpdate(req.params._id, req.body, (err,data)=>{
      if(err) console.log(err)
     
      res.redirect("/equipment")
    })
  })



module.exports = router;