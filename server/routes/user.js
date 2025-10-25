const express = require("express");
const { body } = require("express-validator");

const router = express.Router();
const AuthController = require("../controllers/auth-controller");
const auth = new AuthController();

router.post(
    "/signup",
    body("email").isEmail(),
    body("password").isLength({ min: 3, max: 25 }),
    body("name").isLength({ min: 3, max: 25 }),
    (req, res, next) => auth.signup(req, res, next)
);
router.post(
    "/login",
    body("email").isEmail(),
    body("password").isLength({ min: 3, max: 25 }),
    (req, res, next) => auth.login(req, res, next)
);

router.get("/logout", (req, res, next) => auth.logout(req, res, next));

router.get("/refresh", (req, res, next) => auth.refresh(req, res, next));

module.exports = router;
