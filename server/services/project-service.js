const db = require("../db");

class ProjectService {
    async getAll(userId) {
        const res = await db.query(
            "SELECT * FROM projects WHERE owner_id = $1",
            [userId]
        );
        return res.rows;
    }

    async create(id, name, platform, notifyViaEmail, ownerId) {
        const res = await db.query(
            "INSERT INTO projects (id, name, platform, notifyViaEmail, owner_id) VALUES ($1, $2, $3, $4, $5) RETURNING *",
            [id, name, platform, notifyViaEmail, ownerId]
        );
        return res.rows[0];
    }

    async deleteProject(id) {
        await db.query("DELETE FROM projects WHERE id = $1", [id]);
    }
}

module.exports = ProjectService;
