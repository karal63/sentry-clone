const UserService = require("../services/user-service");
const userService = new UserService();

class AuthController {
    async signup(req, res) {
        try {
            const { email, password, name } = req.body;
            await userService.signup(email, password, name);

            res.status(201).json({ message: "User created" });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "signup error" });
        }
    }

    async login(req, res) {
        try {
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
            res.status(500).json({ message: "login error" });
        }
    }
}

module.exports = AuthController;
