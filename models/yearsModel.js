var mongoose = require('mongoose');


// Schema Validation
var yearSchema = mongoose.Schema({
    _id : {type: Number, unique: true},
    year : String
});

var YearData = mongoose.model('years', yearSchema);
module.exports = YearData;