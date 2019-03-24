var mongoose = require('mongoose');

var postSchema = new mongoose.Schema({

	name: String,
	author: String,
	description: String,
	content: String

});

var post = mongoose.model('post', postSchema, 'posts');

module.exports = post;