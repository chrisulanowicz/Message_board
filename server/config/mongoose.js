var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/message_board');

require('../models/post.js');
require('../models/comment.js');