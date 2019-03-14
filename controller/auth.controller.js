var db = require('../db')

module.exports.login = function (req, res) {
	res.render('auth/login');
}

module.exports.loginPOST = function (req, res) {
	
	var username = req.body.username; //nguoi dung nhap vao username
	var password = req.body.password;

	var user = db.get('posts').find({username: username}).value(); //tim trong database, tra ve nguyen object tat ca tong tin cua nguyen cai do :))

	if(!user){ //neu khong co user
		res.render('auth/login', {
			errors: ['User does not exist !'],
			values: res.body
		});
		return;
	}

	if(user.password !== password){
		res.render('auth/login', {
			errors: ['Wrong password !'],
			values: res.body
		});
		return;
	}

	res.cookie('userId', user.id, {
		signed: true
	});
	res.redirect('/post');
}
