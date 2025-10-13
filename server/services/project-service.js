const db = require("../db");

class ProjectService {
    async getAll(userId) {
        const res = await db.query(
            "SELECT * FROM projects WHERE owner_id = $1",
            [userId]
        );
        return res.rows;
    }

    async create(id, name, description, userId) {
        await db.query(
            "INSERT INTO projects (id, name, description, owner_id) VALUES ($1, $2, $3, $4) RETURNING *",
            [id, name, description, userId]
        );
    }

    async deleteProject(id) {
        await db.query("DELETE FROM projects WHERE id = $1", [id]);
    }
}

module.exports = ProjectService;
