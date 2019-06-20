//use path module
const path = require('path');

//use express module
const express = require('express');

//use bodyParser middleware
const bodyParser = require('body-parser');

//use hbs view engine
const hbs = require('hbs');

// use mysql dbms
const mysql = require('mysql');

const app = express();

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',   
    database: 'node_mysql_learn'
})

conn.connect((err) => {
    if (err) throw err;
    console.log("Database Connected..");
});

//set dynamic views file
app.set('views', path.join(__dirname,'views'));

//set view engine
app.set('view engine', 'hbs');

app.use(bodyParser.urlencoded({ extended: false }));

//set public folder as static folder for static file
app.use(express.static('public'));

app.get('/', (req, res) => {
    let sql = "SELECT * FROM products";
    let query = conn.query(sql, (err, results) => {
        if (err) throw err;
        res.render('product_view', {
            results: results
        });
    });
});

app.post('/store', (req, res) => {
    let data = {
        product_name: req.body.product_name,
        product_price: req.body.product_price
    };
    let sql = "INSERT INTO products SET ?";
    let query = conn.query(sql, data, (err, result) => {
        if (err) throw err;
        res.redirect('/');
    });
});

app.post('/update', (req, res) => {
    let sql = "UPDATE products SET product_name = '" + req.body.product_name + "', product_price = '" + req.body.product_price + "' WHERE product_id = '" + req.body.product_id + "'" ;
    let query = conn.query(sql, (err, result) => {
        if (err) throw err;
        res.redirect('/');
    });
});

app.post('/delete', (req, res) => {
    let sql = "DELETE FROM products WHERE product_id = '" + req.body.product_id + "'" ;
    let query = conn.query(sql, (err, result) => {
        if (err) throw err;
        res.redirect('/');
    });
});

app.listen(8000, () => {
    console.log("The server is running on port 8000");
});
