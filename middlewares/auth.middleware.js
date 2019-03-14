var db = require('../db');

module.exports.requireAuth = function (req, res, next) {
	if(!req.signedCookies.userId){ //day chi la demo cach hoat dong khi co cookies, khong dung trong bai toan thuc te
		// console.log(req.cookies);
		res.redirect('auth/login');
		return;
	}

	var user = db.get('posts').find({id: req.signedCookies.userId}).value();

	if(!user){
		//res.redirect('/auth/login');		
		return;
	}

	res.locals.user = user;

	 next();
}