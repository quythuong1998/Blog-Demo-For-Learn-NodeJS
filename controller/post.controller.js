
const shortid = require('shortid');


var post = require('../models/post.model');



module.exports.index = function (req, res) {
	//cach cu~ dung` low db`
	// res.render('post/index', {
	// 	posts: db.get('posts').value()
	// })
	post.find().then(function (post) {
		res.render('post/index', {
			posts: post,
			arr: post
		})
	})
}


module.exports.search = function (req, res) {

	var q = req.query.q; //query cua user 

	// var finded = db.get('posts').value().filter(function (post) {
	// 	return post.name.indexOf(q) !== -1;
	// });

	// res.render('post/index', {
	// 	posts: finded
	// })


	post.find().then(function(post) {
		
		res.render('post/index',{
			posts: post.filter(function(p){
			return p.name.indexOf(q) !== -1;
			})
		})
	})



}

module.exports.postPost = function (req, res) {
	// req.body.id = shortid.generate();
	// db.get('posts').push(req.body).write();
	// res.redirect('/post');

	//console.log(req.body.name);

	var postdetail = new post({name: req.body.name, author: req.body.author, description: req.body.description, content: req.body.content});
	postdetail.save();
	res.redirect('/post');
}

module.exports.viewPost = function (req, res) {
	
	var id = req.params.id;
	// var post = db.get('posts').find({id: id}).value();

	// res.render('post/view', {
	// 	post: post
	// })
//b.getCollection('posts').find({_id: ObjectId("5c9504343f230d1a1fa8b153")})

	post.find({_id: id}).then(function  (p) {
		res.render('post/view',{
			posts: p[0]
		})

		//console.log(p[0].name);
	})
} 

