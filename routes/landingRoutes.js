const express = require("express");
const router = express.Router();
const landingController = require('../controllers/landingController');

router
  .route("/")
  .get(landingController.index);

module.exports = router;