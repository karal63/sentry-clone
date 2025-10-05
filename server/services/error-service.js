const db = require("../db");
const uuid = require("uuid");

module.exports = class ErrorService {
    async addError(projectId, userId, error) {
        const id = uuid.v4();

        await db.query(
            "INSERT INTO errors (id, project_id, user_id, error) VALUES ($1, $2, $3, $4) RETURNING *",
            [id, projectId, userId, error]
        );
    }

    async removeError(id) {
        await db.query("DELETE FROM errors WHERE id = $1", [id]);
    }

    async getErrors(projectId) {
        const result = await db.query(
            "SELECT * FROM errors WHERE project_id = $1",
            [projectId]
        );
        return result.rows;
    }
};
