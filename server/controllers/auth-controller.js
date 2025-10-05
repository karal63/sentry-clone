const UserService = require("../services/user-service");
const user = new UserService();

class AuthController {
    async signup(req, res) {
        try {
            const { email, password, name } = req.body;
            await user.signup(email, password, name);
            res.status(201).json({ message: "User created" });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Server error" });
        }
    }
}

module.exports = AuthController;
