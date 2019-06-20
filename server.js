//use path module
const path = require('path');

//use express module
const express = require('express');

//use bodyParser middleware
const bodyParser = require('body-parser');

//use hbs view engine
const hbs = require('hbs');

// use model module
const model = require('./model.js');

const app = express();

// use pretty error for better error looking
const PrettyError = require('pretty-error');

// instantiate PrettyError, which can then be used to render error objects
let pe = new PrettyError();
pe.start();

//set dynamic views file
app.set('views', path.join(__dirname,'views'));

//set view engine
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: false }));

//set public folder as static folder for static file
app.use(express.static('public'));

app.get('/', (req, res) => {
    model.getAllProducts((results) => {
        res.render('product_view', {
            results: results
        });
    });
});

app.post('/store', (req, res) => {
    let data = {
        productName: req.body.product_name,
        productPrice: req.body.product_price
    };
    model.saveProduct(data, (result) => {
        result.affectedRows > 0 ? res.redirect('/') : null;
    });
});

app.post('/update', (req, res) => {
    let data = {
        productId: req.body.product_id,
        productName: req.body.product_name,
        productPrice: req.body.product_price
    };
    model.updateProduct(data, (result) => {
        result.affectedRows > 0 ? res.redirect('/') : null;
    })
});

app.post('/delete', (req, res) => {
    data = {
        productId: req.body.product_id,
    }
    model.deleteProduct(data, (result) => {
        result.affectedRows > 0 ? res.redirect('/') : null;
    })
});

app.listen(8000, () => {
    console.log("The server is running on port 8000");
});
