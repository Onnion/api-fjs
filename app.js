var express = require('express');
var mongoose = require('mongoose');
var app = express();
var router = express.Router();
// var auth = require('./auth');

app.use('/books', require('./routes/book'))
app.use('/users', require('./routes/users'))
app.use('/categories', require('./routes/category'))

mongoose.connect('mongodb://127.0.0.1:27017/dbfjs', { useMongoClient: true});
app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});

