const IssueService = require("../services/issue-service");
const issueService = new IssueService();

module.exports = class IssueController {
    async addIssue(req, res, next) {
        try {
            const { projectId, title, culprit, level, type, message } =
                req.body;
            await issueService.addIssue(
                projectId,
                title,
                culprit,
                level,
                type,
                message
            );
            res.sendStatus(200);
        } catch (error) {
            next(error);
        }
    }

    async removeIssue(req, res, next) {
        try {
            const { id } = req.params;
            await issueService.removeIssue(id);
            res.sendStatus(200);
        } catch (error) {
            next(error);
        }
    }

    async getIssues(req, res, next) {
        try {
            const { projectId } = req.params;
            const issues = await issueService.getIssues(projectId);
            res.status(200).json(issues);
        } catch (error) {
            next(error);
        }
    }
};
