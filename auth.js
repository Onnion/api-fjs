const User = require('./models/UserModel');
const jwt = require("jsonwebtoken");
const cfg = require('./config');

exports.authenticate = (req, res, next) => {
    let token = req.headers['authorization'];
    if (token) {
        try {
            let decoded = jwt.decode(token, cfg.secretOrKey);
            if (decoded.exp <= Date.now()) {
                res.json(400, {error: 'Acesso Expirado, faça login novamente'});
            }
            User.findOne({_id: decoded.iss}, (err, user) => {
                if (err) {
                    console.log(err.message)
                    res.send({
                        message: err.message,
                        error: true
                    }).status(500);
                }
                next();
            });
        } catch (err) {
            res.status(401).send({message: 'Erro: Seu token é inválido'});
        }
    }
};

exports.token = function (req, res) {
    const {email, password} = req.body;
    User.findOne({email: email}, (err, user) => {
        if (err) {
            res.send({
                message: err.message,
                error: true
            }).status(501)
        }
        if (!user) {
            res.send({
                message: 'Invalid User',
                error: true
            }).status(501)
        }
        if (user.password !== password) {
            res.send({
                message: 'Invalid Password',
                error: true
            }).status(501)
        }

        const token = jwt.sign({id: user.id}, cfg.secretOrKey);
        res.send({
            message: 'success',
            token: token,
            user: user,
            error: false
        }).status(200);
    });


}
