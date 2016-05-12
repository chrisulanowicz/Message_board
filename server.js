var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, './client/static')));
app.set('views', path.join(__dirname + '/client/views'));
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');

var routes = require('./server/config/routes.js');
routes(app);


app.listen(8000, function(){
	console.log('listening on port 8000');
})

