let express = require('express');
let router  = express.Router();
let auth = require('../auth');

let User = require('../controllers/UserController');

router.get('/', auth.authenticate, User.list);
router.get('/:id', auth.authenticate, User.find);
router.post('/', auth.authenticate, User.create);
router.put('/:id', auth.authenticate, User.update);
router.delete('/:id', auth.authenticate, User.delete);
router.post('/token', auth.token);

module.exports = router;
