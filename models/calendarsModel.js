var mongoose = require('mongoose');


// Schema Validation
var calendarSchema = mongoose.Schema({      
    groupId: String,
    startDate: Date,
    endDate: Date,
    title: String,
    url: String,
    textColor: String,
    backgroundColor: String,
    borderColor: String,
});

var CalendarModel = mongoose.model('calendars', calendarSchema);
module.exports = CalendarModel;