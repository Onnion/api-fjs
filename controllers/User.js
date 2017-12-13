const User = require('../models/User');
const ObjectId = require("mongodb").ObjectId;
const jwt = require('jsonwebtoken');

const passportJWT = require("passport-jwt");

const ExtractJwt = passportJWT.ExtractJwt;

const jwtOptions = {
    secretOrKey: "FJS",
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};

exports.create = function(req, res) {
    const user = req.body;
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

exports.token = function(req, res) {
    const {email, password} = req.body;
    User.find({email: email}, (e, user) => {

        if(!user){
            res.send({
                message: 'Invalid User',
                error: true
            }).status(501)
        }
        res.send({password, pass: user.password});
        if(user.password !== password){
            res.send({
                message: 'Invalid Password',
                error: true
            }).status(501)
        }

        const token = jwt.sign({id: user.id}, jwtOptions.secretOrKey);

        res.send({
            message: 'success',
            token: token,
            error: false
        }).status(200);
        res.send({data:user})
    });



}



