const express = require("express");

const { GetHelloWorldMessage } = require("../controllers/BaseControllers");

const router = express.Router();

router.route("/").get(GetHelloWorldMessage);

module.exports = router;
