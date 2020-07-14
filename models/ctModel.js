var mongoose = require('mongoose');

var ctSchema = mongoose.Schema({      
    equipment_id : String,
    serial_number : String,
    sub_id : Number,
    functional_location : String,
    phase_position : String,
    manufacturer: String,
    model_number: String,
    constructYear: String,
    start_date : String,
    description : String,
    description2 : String,
    descriptionTH: String,   
    system_voltage: Number,
    rated_voltage: Number,
    current_ratio: String,
    accuracy_class: String,
    core: String,
    max_ratio : String,
    rated_primary_current: String,
    rated_secondary_current: String,
    rf_factor: String,
    short_circuit_current: String
});

var CTModel = mongoose.model('cts', ctSchema);
module.exports = CTModel;