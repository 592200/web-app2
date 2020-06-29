var mongoose = require('mongoose');


// Schema Validation
var meterSchema = mongoose.Schema({
    name : String,
    multiplier : Number
});

var Meter = mongoose.model('meters', meterSchema);
module.exports = Meter;