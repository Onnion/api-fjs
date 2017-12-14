const Category = require('../models/CategoryModel');

exports.list = function(req, res) {
    Category.find({}, (err, docs) => {
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
