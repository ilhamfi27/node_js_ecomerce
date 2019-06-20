const express = require("express");
const productController = require('../controllers/productController');
const router = express.Router();

router.route("/").get(productController.index);
router.route("/store").post(productController.store);
router.route("/update").post(productController.update);
router.route("/delete").post(productController.delete);

module.exports = router;