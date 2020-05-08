const express = require('express');
const router = express.Router();
const db = require('../queries');

router.get('/', (req, res) => {
    db.getAllOrders(req, res);
});

router.get('/:orderId', (req, res) => {
    if(req.params.orderId) {
        const orderId = req.params.orderId;
        db.getOrder(orderId, req, res);
    } else {
        console.log(req.params);
    }
});

module.exports = router;