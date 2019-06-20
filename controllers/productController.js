// use model module
const model = require('../model/product');

let productController = {
    index (req, res) {
        model.getAllProducts((results) => {
            res.render('product_view', {
                results: results
            });
        });
    },
    store (req, res) {
        let data = {
            productName: req.body.product_name,
            productPrice: req.body.product_price
        };
        model.saveProduct(data, (result) => {
            result.affectedRows > 0 ? res.redirect('/products') : null;
        });
    },
    update (req, res){
        let data = {
            productId: req.body.product_id,
            productName: req.body.product_name,
            productPrice: req.body.product_price
        };
        model.updateProduct(data, (result) => {
            result.affectedRows > 0 ? res.redirect('/products') : null;
        });
    },
    delete (req, res){
        data = {
            productId: req.body.product_id,
        };
        model.deleteProduct(data, (result) => {
            result.affectedRows > 0 ? res.redirect('/products') : null;
        });
    }
}
module.exports = productController;
