var mongoose = require('mongoose');

var CommentSchema = new mongoose.Schema({
	_post: {type: mongoose.Schema.Types.ObjectId, ref: 'Post'},
	name: String,
	comment: String
});

CommentSchema.path('name').required(true, 'User name cannot be blank');
CommentSchema.path('comment').required(true, 'Comment cannot be blank');

var Comment = mongoose.model('Comment', CommentSchema);