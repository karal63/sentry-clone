const ErrorService = require("../services/error-service");
const errorService = new ErrorService();

module.exports = class ErrorController {
    async addError(req, res, next) {
        try {
            const { projectId, userId, error } = req.body;
            await errorService.addError(projectId, userId, error);
            res.status(200).json({ message: "Error added!" });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: "Something went wrong" });
        }
    }
};
