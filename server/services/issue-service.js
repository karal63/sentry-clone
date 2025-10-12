const db = require("../db");
const uuid = require("uuid");

module.exports = class IssueService {
    async addIssue(projectId, title, culprit, level, type, message) {
        const id = uuid.v4();

        await db.query(
            "INSERT INTO issues (id, project_id, title, culprit, level, type, message) VALUES ($1, $2, $3, $4, $5, $6, $7)",
            [id, projectId, title, culprit, level, type, message]
        );
    }

    async removeIssue(id) {
        await db.query("DELETE FROM issues WHERE id = $1", [id]);
    }

    async getIssues(projectId) {
        const result = await db.query(
            "SELECT * FROM issues WHERE project_id = $1",
            [projectId]
        );
        return result.rows;
    }
};
