function index () {
    model.getAllProducts((results) => {
        res.render('product_view', {
            results: results
        });
    });
}