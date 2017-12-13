var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
    discription: {
    type: String,
    required: false
  },
    category: {
    type: String,
    required: true
  }
}, { collection: 'books'});

module.exports = mongoose.model('books', bookSchema);