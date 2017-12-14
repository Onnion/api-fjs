require('./db');
let express = require('express');
let app = express();
let bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/', require('./routes'));

process.on('uncaughtException', function (err) {
    console.log(err);
});

app.listen(3000, () => {console.log('Running...')});

