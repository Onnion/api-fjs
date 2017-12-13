const Book = require('../models/Book')
const ObjectId = require("mongodb").ObjectId;

exports.create = function(req, res) {
	const book = req.body;
	Book.create(book, (err, docs) => {
		if(err){
			res.send({
				message: err.message,
				error: true
			}).status(501)
		}
		res.send({
			messsage: 'success',
			data: docs,
			error: false
		}).status(200)
	});
}

exports.update = function(req, res) {
    const {id} = req.params;
    const book = req.body;
    Book.update({_id: new ObjectId(id)}, book, (err, docs) => {
		if(err){
			res.send({
				message: err.message,
				error: true
			}).status(501)
		}
		res.send({
			messsage: 'success',
			data: docs,
			error: false
		}).status(200)
	});
}

exports.list = function(req, res) {
	Book.find({}, (err, docs) => {
		if(err){
			res.send({
				message: err.message,
				error: true
			}).status(501)
		}
		res.send({
			messsage: 'success',
			data: docs,
			error: false
		}).status(200)
	});
}

exports.find = function(req, res) {
	const {id} = req.params;
	Book.findOne({_id: new ObjectId(id)}, (err, docs) => {
		if(err){
			res.send({
				message: err.message,
				error: true
			}).status(501)
		}
		res.send({
			messsage: 'success',
			data: docs,
			error: false
		}).status(200)
	});
}

exports.delete = function(req, res) {
	const {id} = req.params;
	Book.deleteOne({_id: new ObjectId(id)}, (err, docs) => {
		if(err){
			res.send({
				message: err.message,
				error: true
			}).status(501)
		}
		res.send({
			messsage: 'success',
			data: docs,
			error: false
		}).status(200)
	});
}
