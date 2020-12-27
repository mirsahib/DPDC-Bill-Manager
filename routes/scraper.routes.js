const express = require("express");
const scraperController = require("../controller/scraper.controller");

const router = express.Router();

router.route("/scraper").get(scraperController.run);

module.exports = router;
