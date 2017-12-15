const User = require('../models/UserModel');
const ObjectId = require("mongodb").ObjectId;
const jwt = require('jsonwebtoken');
const cfg = require('../config')
const crypto = require('crypto-js');

exports.create = function(req, res) {
    const user = {
        email: req.body.email,
        name: req.body.name,
        password: crypto.MD5(req.body.password)
    };
    User.create(user, (err, docs) => {
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
    const user = req.body;
    User.update({_id: new ObjectId(id)}, user, (err, docs) => {
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



