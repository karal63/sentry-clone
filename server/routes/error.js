const express = require("express");
const router = express.Router();

const ErrorController = require("../controllers/error-controller");
const errorController = new ErrorController();

const verifyToken = require("../middlewares/verify-token");

router.post("/error", (req, res) => errorController.addError(req, res));
router.delete("/error/:id", (req, res) =>
    errorController.removeError(req, res)
);
router.get("/errors/:projectId", verifyToken, (req, res, next) =>
    errorController.getErrors(req, res, next)
);

module.exports = router;
