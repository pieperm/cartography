const { Pool } = require('pg');
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'cartography_db',
    password: '',  // Fill with your own password for the DB, DO NOT COMMIT TO REPO
    port: 5432
});

const getAllProducts = (req, res) => {
    pool.query('SELECT * FROM PRODUCT', (err, result) => {
        if (err) {
            console.error(err);
            throw err;
        }
        res.status(200).json(result.rows);
    })
}

const getProduct = (id, req, res) => {
    pool.query(`SELECT * FROM PRODUCT WHERE PRODUCT.ID=${id}`, (err, result) => {
        if (err) {
            console.error(err);
            throw err;
        }
        res.status(200).json(result.rows);
    })
}

const getAllCarts = (req, res) => {
    pool.query('SELECT * FROM CART', (err, result) => {
        if (err) {
            console.error(err);
        }
        res.status(200).json(result.rows);
    });
}

const getCart = (id, req, res) => {
    pool.query(`SELECT * FROM CART WHERE CART.CARTID=${id}`, (err, result) => {
        if (err) {
            console.error(err);
            throw err;
        }
        res.status(200).json(result.rows);
    });
}

const getAllOrders = (req, res) => {
    pool.query('SELECT * FROM ORDERS', (err, result) => {
        if (err) {
            console.error(err);
            throw err;
        }
        res.status(200).json(result.rows);
    });
}

const getOrder = (id, req, res) => {
    pool.query(`SELECT * FROM ORDERS WHERE ORDERS.ID=${id}`, (err, result) => {
        if (err) {
            console.error(err);
            throw err;
        }
        res.status(200).json(result.rows);
    })
}

module.exports = {
    getAllCarts,
    getAllProducts,
    getProduct,
    getCart,
    getAllOrders,
    getOrder
}