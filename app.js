let express = require('express');
let mongoose = require('mongoose');
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', require('./routes'));

app.use(function(req, res, next) {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handler
app.use(function(err, req, res, next) {
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

mongoose.connect('mongodb://127.0.0.1:27017/dbfjs', { useMongoClient: true});
app.listen(3000, function () {
	console.log('Example app listening on port 3000!');
});

