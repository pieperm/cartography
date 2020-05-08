const express = require('express');
const router = express.Router();
const db = require('../queries');

router.get('/', (req, res) => {
    db.getAllCarts(req, res);
})

router.get('/:cartId', (req, res) => {
    if(req.params.cartId) {
        const cartId = req.params.cartId;
        db.getCart(cartId, req, res);
    } else {
        console.log(req.params);
    }
})

router.get('/:cartId/products', (req, res) => {
    if(req.params.cartId) {
        const cartId = req.params.cartId;
        db.getProductsInCart(cartId, req, res);
    } else {
        console.log(req.params);
    }
})

module.exports = router;