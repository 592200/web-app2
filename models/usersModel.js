var mongoose = require('mongoose');

// Schema Validation
var userSchema = mongoose.Schema({
    username: {type: String, unique: true},
    password: String
});

var User = mongoose.model('users', userSchema);
module.exports = User;