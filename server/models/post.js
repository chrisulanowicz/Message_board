var mongoose = require('mongoose');

var PostSchema = new mongoose.Schema({
	name: String,
	message: String,
	comments: [{type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});

PostSchema.path('name').required(true, 'User name cannot be blank');
PostSchema.path('message').required(true, 'Message cannot be blank');

var Post = mongoose.model('Post', PostSchema);