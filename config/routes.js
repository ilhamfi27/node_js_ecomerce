const express = require('express');

const productRoutes = require('../routes/productRoutes.js');
const landingRoutes = require('../routes/landingRoutes.js');

const router = express.Router();

router.use("/", landingRoutes);
router.use("/products", productRoutes);

module.exports = router;
