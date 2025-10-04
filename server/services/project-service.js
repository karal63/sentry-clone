const db = require("../db");

class ProjectService {
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
