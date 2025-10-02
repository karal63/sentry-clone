const express = require("express");
const router = express.Router();
const ErrorController = require("../controllers/error-controller");
const errorController = new ErrorController();

router.post("/user", (req, res) => errorController.addError(req, res));

module.exports = router;
