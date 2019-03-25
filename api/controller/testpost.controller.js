var testPost = require('../../models/testPost.model'); //require model o ben ngoai

module.exports.testpost = function (req, res) {
	testPost.find().then(function (post) {
		res.json(post);

	})
}

//phuong thuc POST
module.exports.postpost = function (req, res) {
	testPost.create(req.body).then(function(p){
		res.json(p); //xem thang vua duoc them vao
	})
};
//cach ben duoi dung Async 
// module.exports.postpost = async function (req, res) {
// 	var post = await testPost.create(req.body);
// 	res.json(post);
// };

//phuong thuc PUT
module.exports.putpost = function(req, res){
	var id = req.params.id;
	testPost.findByIdAndUpdate({_id: id},req.body).then(function (p) {
		res.json(p);
	})
}

/* Test PUT noi dung nhu vay`
	{
		"name" : "test PUT2",
		"author" : "test PUT",
		"description" : "test PUT",
		"content" : "test PUT",
		"image" : "test PUT"
	} 
*/

module.exports.patchpost = function  (req, res){
	var id = req.params.id;
	testPost.update({_id: id}, req.body).then(function (p) {
		res.json(p);
	})
}

/* Test PATCH noi dung nhu vay`
	{
		"content": "test patch"
	}
*/

module.exports.deletepost = function  (req, res){
	var id = req.params.id;
	testPost.findByIdAndRemove({_id: id}).then(function (p) {
		res.json(p);
	})
}
//test binh thuong bang postman, method delete :)

