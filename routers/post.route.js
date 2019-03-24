var express = require('express');
var postRouter = express.Router();
const shortid = require('shortid');


var postController = require('../controller/post.controller'); 
var postValidate = require('../validation/post.validation');

postRouter.get('/', postController.index);


postRouter.get('/search', postController.search)



postRouter.get('/create', function(req, res) {
	res.render('post/create');
});


postRouter.post('/create', postValidate.postValidation ,postController.postPost);


postRouter.get('/:id', postController.viewPost)


module.exports = postRouter;