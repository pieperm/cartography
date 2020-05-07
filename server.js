const express = require('express');
const app = express();
const port = 3000;
const createError = require('http-errors');

const cartRouter = require('./src/routes/cart');

app.use('/carts', cartRouter);

// catch 404 with error handler
app.use(function(req, res, next) {
    next(createError(404));
})

app.get('/getList', (req, res) => {
    const list = ["i1", "i2", "i3"];
    res.json(list);
    console.log('Sent list');
});

app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;