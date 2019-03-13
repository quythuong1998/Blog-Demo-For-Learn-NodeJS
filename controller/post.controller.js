var db = require('../db')
const shortid = require('shortid');

module.exports.index = function (req, res) {
	res.render('post/index', {
		posts: db.get('posts').value()
	})
}

module.exports.search = function (req, res) {

	var q = req.query.q;

	var finded = db.get('posts').value().filter(function (post) {
		return post.name.indexOf(q) !== -1;
	});

	res.render('post/index', {
		posts: finded
	})
}

module.exports.postPost = function (req, res) {
	req.body.id = shortid.generate();
	db.get('posts').push(req.body).write();
	res.redirect('/post');
}

module.exports.viewPost = function (req, res) {
	
	var id = req.params.id;
	var post = db.get('posts').find({id: id}).value();

	res.render('post/view', {
		post: post
	})
} 