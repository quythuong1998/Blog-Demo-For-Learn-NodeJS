var mongoose = require('mongoose');

var testPostSchema = new mongoose.Schema(
	{
		name: String,
		author: String,
		description: String,
		image: String,
		content: String
	}
)

var Post = mongoose.model('testPost', testPostSchema, 'testPost');

module.exports = Post;