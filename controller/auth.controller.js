// var db = require('../db')
var user = require('../models/user.model');


module.exports.login = function (req, res) {
	res.render('auth/login');
}

module.exports.loginPOST = function (req, res) {
	
	var uname = req.body.username; //nguoi dung nhap vao username
	var pwd = req.body.password;

	//var user = db.get('posts').find({username: username}).value(); //tim trong database, tra ve nguyen object tat ca tong tin cua nguyen cai do :)
	user.find({username: uname}).then(function (n) {

		var isFind = n[0];

		if(!isFind){ //neu khong co user
			res.render('auth/login', {
				errors: ['User does not exist !'],
				values: res.body
			});
			return;
		}

		if(isFind.password !== pwd){
			res.render('auth/login', {
				errors: ['Wrong password !'],
				values: res.body
			});
			return;
		}
		
		res.cookie('userId', isFind._id, {
			signed: true
		});

		res.redirect('/post');

	});
	
	

	

	
}
