var mongoose = require('mongoose');

var ptSchema = mongoose.Schema({      
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
    accuracy_class: String,
    core: String,
    voltage_ratio: String,
    total_capacitance : Number,
    c1_capacitance : Number,
    c2_capacitance : Number
});

var PTModel = mongoose.model('pts', ptSchema);
module.exports = PTModel;