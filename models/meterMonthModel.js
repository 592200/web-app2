var mongoose = require('mongoose');


// Schema Validation
var meterMonthSchema = mongoose.Schema({
    meter_id : Number,
    month : Number,
    year : Number,
    meter_value : Number,
    kWH_house : Number,
    kWH_trans_office : Number,
    kWH_outside_person : Number,
    kWH_other : Number,
    update_date : Date
});

var MeterMonth = mongoose.model('meter_months', meterMonthSchema);
module.exports = MeterMonth;