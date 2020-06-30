var mongoose = require('mongoose');


// Schema Validation
var meterSchema = mongoose.Schema({
    _id : {type: Number, unique: true},
    name : String,
    multiplier : Number
});

var Meter = mongoose.model('meters', meterSchema);
module.exports = Meter;