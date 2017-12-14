const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true,
        required: true
    },
}, {collection: 'categories'});

module.exports = mongoose.model('categories', categorySchema);