var mongoose = require('mongoose');

var disconSchema = mongoose.Schema({      
    equipment_id : String,
    serial_number : String,
    sub_id : Number,
    functional_location : String,
    phase_position : String,
    manufacturer: String,
    model_number: String,
    constructYear: String,
    start_date : String,
    description1 : String,
    description2 : String,
    descriptionTH: String,   
    system_voltage: Number,
    rated_voltage: Number,
    rated_current: String,
    operating_type: String,
    breaking_type: String
});

var DSModel = mongoose.model('discons', disconSchema);
module.exports = DSModel;