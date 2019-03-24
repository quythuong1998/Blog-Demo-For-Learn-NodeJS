var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	username: String,
	password: String,
	name: String
});

var user = mongoose.model('User', userSchema, 'Users');

//exports nho phai co s neu khong bi loi sml ~~
module.exports = user;