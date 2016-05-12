var posts = require('../controllers/posts.js');
var comments = require('../controllers/comments.js');

module.exports = function(app){

	app.get('/', function(request,response){
		posts.show(request,response);
	})

	app.post('/add_post', function(request, response){
		posts.create(request,response);
	})

	app.post('/add_comment/:id', function(request,response){
		comments.create(request,response);
	})
}