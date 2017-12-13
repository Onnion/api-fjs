let express = require('express');
let router  = express.Router();

let User = require('../controllers/User');

router.get('/', User.list);
router.post('/:id', User.find);
router.put('/:id', User.update);
router.delete('/:id', User.delete);

module.exports = router;