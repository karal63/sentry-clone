const db = require("../db");
const { v4: uuidv4 } = require("uuid");
const bcrypt = require("bcrypt");

class UserService {
    async signup(email, password, name) {
        const [rows] = await db.query(
            "SELECT * FROM users WHERE email = ? OR name = ?",
            [email, name]
        );
        if (rows.length > 0) {
            throw new Error("User already exists");
        }

        const id = uuidv4();
        const hashPassword = bcrypt.hash(password, 10);

        await db.query(
            "INSERT INTO users (id, username, email, password_hash) VALUES ($1, $2, $3, $4)",
            [id, name, email, hashPassword]
        );
    }
}

module.exports = UserService;
