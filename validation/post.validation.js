module.exports.postValidation = function (req, res, next) {
	
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

	next();

}