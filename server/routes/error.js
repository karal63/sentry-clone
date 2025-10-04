const express = require("express");
const router = express.Router();
const ErrorController = require("../controllers/error-controller");
const errorController = new ErrorController();

router.post("/error", (req, res) => errorController.addError(req, res));
router.delete("/error/:id", (req, res) =>
    errorController.removeError(req, res)
);

module.exports = router;
