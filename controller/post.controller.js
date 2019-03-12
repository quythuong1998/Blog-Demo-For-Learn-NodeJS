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
	
	var errors = [];

	if(!req.body.name){
		errors.push('Name of the post is required !');
	}

	if(!req.body.author){
		errors.push('Author of the post is required !');
	}
	if(!req.body.content){
		errors.push('Content of the post is required !');
	}

	if(errors.length){
		res.render('post/create', {
			errors: errors,
			values: req.body
		});
	return;
	}
	
	//console.log(errors)

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