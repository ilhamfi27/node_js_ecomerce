// require database config
const db = require('../config/database');

let productModel = {
    getAllProducts: (callback) => {
        let sql = `SELECT * FROM products`;
        let query = db.conn.query(sql, (err, results) => {
            if (err) throw err;
            callback(results);
        });
    }, 
    saveProduct: (data, callback) => {
        let sql = `INSERT INTO products (product_name, product_price) 
                    VALUES (?,?)`;
        let dataValues = [data.productName, data.productPrice];
        let query = db.conn.query(sql, dataValues, (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },
    updateProduct: (data, callback) => {
        let sql = `UPDATE products SET 
                        product_name = ?, 
                        product_price = ? 
                    WHERE product_id = ?` ;
        let dataValues = [data.productName, data.productPrice, data.productId];
        let query = db.conn.query(sql, dataValues, (err, result) => {
            if (err) throw err;
            callback(result);
        });
    },
    deleteProduct: (data, callback) => {
        let sql = `DELETE FROM products 
                    WHERE product_id = ?` ;
        let dataValues = [data.productId];
        let query = db.conn.query(sql, dataValues, (err, result) => {
            if (err) throw err;
            callback(result);
        });
    } 
}

module.exports = productModel;
