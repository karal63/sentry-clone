const { validationResult } = require("express-validator");
const UserService = require("../services/user-service");
const userService = new UserService();

class AuthController {
    async signup(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    message: "Validation error",
                    errors: errors.array(),
                });
            }
            const { email, password, name } = req.body;
            await userService.signup(email, password, name);

            res.status(201).json({ message: "User created" });
        } catch (error) {
            next(error);
        }
    }

    async login(req, res, next) {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    message: "Validation error",
                    errors: errors.array(),
                });
            }
            const { email, password } = req.body;
            const userData = await userService.login(email, password);

            const { tokens, user } = userData;

            res.cookie("refreshToken", tokens.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
            });

            res.status(200).json({
                accessToken: tokens.accessToken,
                user,
            });
        } catch (error) {
            next(error);
        }
    }

    async logout(req, res, next) {
        try {
            res.clearCookie("refreshToken");
            res.status(200).json({ message: "Logged out" });
        } catch (error) {
            next(error);
        }
    }

    async refresh(req, res, next) {
        try {
            const refreshToken = req.cookies.refreshToken;
            const userData = await userService.refresh(refreshToken);
            res.cookie("refreshToken", userData.tokens.refreshToken, {
                maxAge: 30 * 24 * 60 * 60 * 1000,
                httpOnly: true,
            });

            res.status(200).json({ accessToken: userData.tokens.accessToken });
        } catch (error) {
            next(error);
        }
    }
}

module.exports = AuthController;
