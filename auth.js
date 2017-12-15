const User = require('./models/UserModel');
const jwt = require("jsonwebtoken");
const cfg = require('./config');
const crypto = require('crypto-js');

exports.authenticate = (req, res, next) => {
    let token = req.headers['authorization'];
    if (token) {
        try {
            let decoded = jwt.decode(token, cfg.secretOrKey);
            if (decoded.exp <= Date.now()) {
                res.status(400).send({
                        message: 'Acesso Expirado, faça login novamente',
                        error: true
                    }).status(500);
            }
            User.findOne({email: decoded.email}, (err, user) => {
                if (err) {
                    res.send({
                        message: err.message,
                        error: true
                    }).status(500);
                }
                next();
            });
        } catch (err) {
            res.send({
                message: 'Seu token é inválido.',
                error: true
            }).status(401);
        }
    }
};

exports.token = function (req, res) {
    const {email, password} = req.body;
    const passMD5 = crypto.MD5(password).toString();
    User.findOne({email: email}, (err, user) => {
        if (err) {
            res.send({
                message: err.message,
                error: true
            }).status(501)
        }
        if (!user) {
            res.send({
                message: 'Usuário inválido',
                error: true
            }).status(501)
        }
        if (user.password !== passMD5) {
            res.send({
                message: 'Senha incorreta.',
                error: true
            }).status(501)
        }
        const date = new Date();
        const token = jwt.sign({email: user.email, exp:new Date().setHours(date.getHours()+1)}, cfg.secretOrKey);
        res.send({
            message: 'success',
            tokens: {token:token, expires_in:new Date().setHours(date.getHours()+1)},
            user: user,
            error: false
        }).status(200);
    });


}
