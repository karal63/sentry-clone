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

    validateRefreshToken(token) {
        try {
            const userData = jwt.verify(token, process.env.REFRESH_TOKEN);
            return userData;
        } catch (error) {
            return null;
        }
    }
}

module.exports = TokenService;
