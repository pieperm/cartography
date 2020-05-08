const express = require('express');
const router = express.Router();
const db = require('../queries');

router.get('/', (req, res) => {
    db.getAllProducts(req, res);
});

router.get('/:productId', (req, res) => {
    if(req.params.productId) {
        const productId = req.params.productId;
        db.getProduct(productId, req, res);
    } else {
        console.log(req.params);
    }
})

module.exports = router;