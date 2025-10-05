const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/auth-controller");
const auth = new AuthController();

router.post("/signup", (req, res, next) => auth.signup(req, res, next));
router.post("/login", (req, res, next) => auth.login(req, res, next));

module.exports = router;
