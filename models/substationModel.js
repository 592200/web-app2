var mongoose = require('mongoose');


// Schema Validation
var subStationSchema = mongoose.Schema({
    id: Number,
    sub_name: String
});

var Subs = mongoose.model('substations', subStationSchema);
module.exports = Subs;