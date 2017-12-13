let express = require('express');
let router  = express.Router();
let auth = require('../auth');

let Book = require('../controllers/Book');

router.get('/', Book.list);
router.get('/:id', auth.authenticate, Book.find);
router.post('/', auth.authenticate, Book.create);
router.put('/:id', auth.authenticate, Book.update);
router.delete('/:id', auth.authenticate, Book.delete);

module.exports = router;