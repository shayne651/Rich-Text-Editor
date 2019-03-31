var mongoose = require('mongoose');

loginsSchema = new mongoose.Schema({
	username:String,
	password:String
});

module.exports = mongoose.model('logins',loginsSchema);