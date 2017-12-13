const express = require('express');
const mongoose = require('mongoose');
const app = express();
const auth = require('./auth');

const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/books', require('./routes/book.js'))
app.use('/users', require('./routes/user.js'))
// app.use('/categories', require('./routes/category'))

mongoose.connect('mongodb://127.0.0.1:27017/dbfjs', { useMongoClient: true});
app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});

