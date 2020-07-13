var mongoose = require('mongoose');

var cbSchema = mongoose.Schema({      
    equipment_id : String,
    serial_number : String,
    sub_id : Number,
    functional_location : String,
    manufacturer: String,
    model_number: String,
    mechanical_model: String,
    description1 : String,
    description2 : String,
    descriptionTH: String,
    constructYear: String,
    start_date : String,
    system_voltage: Number,
    rated_voltage: Number,
    rated_current: Number,
    interrupter_type: String,
    single_or_three_pole: String,
    closing_device : String,
    tripping_device: String
});

var CBModel = mongoose.model('cbs', cbSchema);
module.exports = CBModel;