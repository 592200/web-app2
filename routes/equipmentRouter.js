var express = require('express');
var router = express.Router();
const storage = require('node-sessionstorage');
var _ = require('lodash');
var CBModel = require('../models/cbModel');
var Subs = require('../models/substationModel');
var LineMessage = require('../models/lineMessageModel');
var CTModel = require('../models/ctModel');

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
            CTModel.aggregate(([
                {
                    $lookup: {
                    from : 'substations', 
                    localField : 'sub_id', 
                    foreignField : 'id', 
                    as : 'nameOfSub'
                    }
                }
                
            ]),(err,CT_data)=>{
                if(err) console.log(err)
                console.log(CT_data)
            //console.log(CB_data[0].nameOfSub)
        
                res.render('equipment',{obj : 
                    {
                    page : 'data_z3_eq',
                    CB_datas : CB_data,
                    CT_datas : CT_data
                    }
                })
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

        //add to Linemessage
        var lineMessageDoc = new LineMessage(
            {
                id : data.functional_location,
                type : "text",
                name : "info("+data.functional_location+")",
                message : "FL : "+data.functional_location+"\n"+"Manufacturer : "+data.manufacturer+"\n"+"Model No. : "+data.model_number+"\n"+"Mechanism : "+data.mechanical_model+"\n"+"วันที่เริ่มใช้งาน : "+data.start_date+"\n"+"Description : "+data.description2,
                data : "",
                createTime : Date.now(),
                updateTime : Date.now(),
                packageId : "",
                stickerId : "",
                originalContentUrl : "",
                previewImageUrl : "",
                duration : "0",
                title : "",
                address : "",
                latitude : "0",
                longitude : "0",
                continue : "",
                status : "Active"
            });
        lineMessageDoc.save((err,dataLine)=>{
            if(err) console.log(err)
            //console.log(dataLine)
            res.redirect("/equipment")
        })
    })
    
})
// post delete
router.post('/deleteCB/:_id', function(req, res, next){
    CBModel.findByIdAndRemove(req.params._id, (err,data)=>{
      if(err) console.log(err)
      console.log(data)
      LineMessage.findOneAndDelete({"id":data.functional_location},(err,delete_data)=>{
          if(err) console.log(err)
          console.log(delete_data)
            res.redirect('/equipment')
        })
  
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
    CBModel.findByIdAndUpdate(req.params._id, req.body, (err,old_data)=>{
        if(err) console.log(err)
        CBModel.findOne({"_id":req.params._id},(err,data)=>{
            if(err) console.log(err)
            console.log(data)
            LineMessage.findOneAndUpdate({"id":old_data.functional_location},{
                id : data.functional_location,
                type : "text",
                name : "info("+data.functional_location+")",
                message : "FL : "+data.functional_location+"\n"+"Manufacturer : "+data.manufacturer+"\n"+"Model No. : "+data.model_number+"\n"+"Mechanism : "+data.mechanical_model+"\n"+"วันที่เริ่มใช้งาน : "+data.start_date+"\n"+"Description : "+data.description2,
                data : "",
                createTime : Date.now(),
                updateTime : Date.now(),
                packageId : "",
                stickerId : "",
                originalContentUrl : "",
                previewImageUrl : "",
                duration : "0",
                title : "",
                address : "",
                latitude : "0",
                longitude : "0",
                continue : "",
                status : "Active"
            },(err,update_data)=>{
                res.redirect("/equipment")
            })
        })
    })
  })



module.exports = router;