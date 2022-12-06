const router = require('express').Router();

router.use('/users', require('./users')); // matches all requests to /api/users/
router.use('/products', require('./products')); // matches all requests to  /api/puppies/
router.use('/order', require('./order')); // matches all requests to  /api/kittens/


router.use(function (req, res, next) {
    const err = new Error('Not found.');
    err.status = 404;
    next(err);
  });

module.exports = router;