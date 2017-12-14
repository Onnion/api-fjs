let express = require('express');
let router  = express.Router();

router.use('/books', require('./routes/book'));
router.use('/users', require('./routes/user'));
router.get('/categories', require('./controllers/CategoryController').list);

module.exports = router;