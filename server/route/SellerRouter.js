const { Router } = require('express');
const SellerController = require('../controller/sellerController');

let router = new Router();

router.get('/show', SellerController.show_get);

module.exports = router;
