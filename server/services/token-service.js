const jwt = require("jsonwebtoken");
require("dotenv").config();

class TokenService {
    generateTokens(id, email, name) {
        const accessToken = jwt.sign(
            { id, email, name },
            process.env.ACCESS_TOKEN,
            { expiresIn: "15min" }
        );

        const refreshToken = jwt.sign(
            { id, email, name },
            process.env.REFRESH_TOKEN,
            { expiresIn: "30d" }
        );

        return { accessToken, refreshToken };
    }
}

module.exports = TokenService;
