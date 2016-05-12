var mongoose = require('mongoose');
var Post = mongoose.model('Post');
var Comment = mongoose.model('Comment');

module.exports = {

	create: function(request,response){
		var content = new Post({name: request.body.name,message: request.body.message})
		content.save(function(error){
			if(error){
				response.render('index', {title: "You have an error", errors: content.errors})
			}
			else{
				response.redirect('/');
			}
		})
	},
	show: function(request,response){
		Post.find({})
			.populate('comments')
			.exec(function(error,posts){
			if(error){
				console.log('Nope');
			}
			else{
				response.render('index', {posts: posts});	
			}
		})
	}

}