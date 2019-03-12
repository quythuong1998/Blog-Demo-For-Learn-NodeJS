var express = require('express');
var postRouter = express.Router();
const shortid = require('shortid');


var postController = require('../controller/post.controller'); 

postRouter.get('/', postController.index);


postRouter.get('/search', postController.search)



postRouter.get('/create', function(req, res) {
	res.render('post/create');
});


postRouter.post('/create', postController.postPost);


postRouter.get('/:id', postController.viewPost)


module.exports = postRouter;