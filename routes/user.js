let express = require('express');
let router  = express.Router();

let User = require('../controllers/User');

router.get('/', User.list);
router.get('/:id', User.find);
router.post('/token', User.token);
router.post('/', User.create);
router.put('/:id', User.update);
router.delete('/:id', User.delete);

module.exports = router;