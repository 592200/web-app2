var mongoose = require('mongoose');


// Schema Validation
var lineMessageSchema = mongoose.Schema({      
    id: String,
    type: String,
    name: String,
    message: String,
    data: String,
    createTime: Date,
    updateTime: Date,
    packageId: String,
    stickerId: String,
    originalContentUrl: String,
    previewImageUrl: String,
    duration: String,
    title: String,
    address: String,
    latitude: String,
    longitude: String,
    continue: String,
    status: String
});

var lineMessageModel = mongoose.model('linemessages', lineMessageSchema);
module.exports = lineMessageModel;