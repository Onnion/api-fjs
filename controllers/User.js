const User = require('../models/User');
const ObjectId = require("mongodb").ObjectId;

exports.create = function(req, res) {
    console.log(req);
    // User.insert(user, (err, docs) => {
    //     if(err){
    //         res.send({
    //             message: err.message,
    //             error: true
    //         }).status(501)
    //     }
    //     res.send({
    //         messsage: 'success',
    //         data: docs,
    //         error: false
    //     }).status(200)
    // });
}

exports.update = function(req, res) {
	const {id} = req.params;
	const b=
    User.updateOne({_id: new ObjectId(id)}, User, (err, docs) => {
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
    User.find({}, (err, docs) => {
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
    User.findOne({_id: new ObjectId(id)}, (err, docs) => {
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
    User.deleteOne({_id: new ObjectId(id)}, (err, docs) => {
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
