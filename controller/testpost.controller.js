//var db = require('../db')
var post = require('../models/post.model');

module.exports.testpost = function (req, res) {
	
	// var page = parseInt((req.query.page)) || 1; 
	// var postPerPage = 8;

	// var start = (page - 1) * postPerPage;
	// var end = page * postPerPage;
	// var postsLength = Math.ceil(db.get('testPost').value().length / postPerPage); //de chia trang  //trả về số nguyên nhỏ nhất có giá trị lớn hơn hoặc bằng số đã cho.
	// res.render('testpost/testpost', {
	// 		posts: db.get('testPost').value().slice(start, end),
	// 		pages: postsLength,
	// 		currentPage: page
	// });


	post.find().then(function (post) {
		res.render('testpost/testpost', {
			posts: post
		})

		//console.log(posts);
	})



}