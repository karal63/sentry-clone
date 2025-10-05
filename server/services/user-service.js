const db = require("../db");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

const TokenService = require("./token-service");
const token = new TokenService();

class UserService {
    async signup(email, password, name) {
        const result = await db.query(
            "SELECT * FROM users WHERE email = $1 OR username = $2",
            [email, name]
        );
        if (result.rows.length > 0) {
            throw new Error("User already exists");
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
            throw new Error("User not found");
        }

        const user = result.rows[0];
        const isPasswordValid = await bcrypt.compare(
            password,
            user.password_hash
        );
        if (!isPasswordValid) {
            throw new Error("Invalid password or email");
        }

        const readyUser = {
            id: user.id,
            email: user.email,
            name: user.username,
        };

        // generate tokens
        const tokens = token.generateTokens({ ...readyUser });

        return {
            tokens,
            user: readyUser,
        };
    }
}

module.exports = UserService;
