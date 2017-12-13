let express = require('express');
let router  = express.Router();
let auth = require('../auth');

let Book = require('../controllers/Book');

router.get('/', Book.list)
router.get('/:id', Book.find)
router.post('/', Book.create)
router.put('/:id', Book.update)
router.delete('/:id', Book.delete)

module.exports = router;