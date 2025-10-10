const db = require("../db");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

const TokenService = require("./token-service");
const ApiError = require("../exceptions/api-error");
const token = new TokenService();

class UserService {
    async signup(email, password, name) {
        const result = await db.query(
            "SELECT * FROM users WHERE email = $1 OR username = $2",
            [email, name]
        );
        if (result.rows.length > 0) {
            throw ApiError.BadRequest("User already exists");
        }

        const id = uuidv4();
        const hashPassword = await bcrypt.hash(password, 10);

        await db.query(
            "INSERT INTO users (id, username, email, password_hash) VALUES ($1, $2, $3, $4)",
            [id, name, email, hashPassword]
        );
    }

    async login(email, password) {
        const result = await db.query("SELECT * FROM users WHERE email = $1", [
            email,
        ]);
        if (result.rows.length === 0) {
            throw ApiError.BadRequest("User not found");
        }

        const user = result.rows[0];
        const isPasswordValid = await bcrypt.compare(
            password,
            user.password_hash
        );
        if (!isPasswordValid) {
            throw ApiError.BadRequest("Invalid password or email");
        }

        const readyUser = {
            id: user.id,
            email: user.email,
            name: user.username,
        };

        const tokens = token.generateTokens(
            readyUser.id,
            readyUser.email,
            readyUser.name
        );

        return {
            tokens,
            user: readyUser,
        };
    }

    async refresh(refreshToken) {
        if (!refreshToken) throw ApiError.UnauthorizedError();
        const userDto = await token.validateRefreshToken(refreshToken);
        if (!userDto) throw ApiError.UnauthorizedError();

        const tokens = token.generateTokens(
            userDto.id,
            userDto.email,
            userDto.name
        );

        const result = await db.query(
            "SELECT id, username, email FROM users WHERE id = $1",
            [userDto.id]
        );
        if (result.rows.length === 0) {
            throw ApiError.BadRequest("User not found");
        }

        return {
            tokens,
            user: result.rows[0],
        };
    }
}

module.exports = UserService;
