let express = require('express');
let router  = express.Router();

let User = require('../controllers/User');

router.get('/', User.list);

module.exports = router;