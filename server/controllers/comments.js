var mongoose = require('mongoose');
var Comment = mongoose.model('Comment');
var Post = mongoose.model('Post');

module.exports = {

	create: function(request,response){
		Post.findById(request.params.id, function(error, post){
			var content = new Comment({name: request.body.name, comment: request.body.comment});
			content._post = post._id;
			content.save(function(error, comment){
				if(error){
					console.log("Danger");
					response.render('index', {title: "You have an error", errors: content.errors});
				}
				else{
					post.comments.push(content);
					post.save(function(error, post){
						if(error){
							console.log("Still No")
						}
						else{
							response.redirect('/');
						}
					})
				}
			})
		})
	}
}