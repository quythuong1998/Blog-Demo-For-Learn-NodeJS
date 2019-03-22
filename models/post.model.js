var mongoose = require('mongoose');

var postSchema = new mongoose.Schema(
	{
		name: String,
		author: String,
		description: String,
		image: String,
		content: String
	}
)

var Post = mongoose.model('Post', postSchema, 'testPost');

module.exports = Post;