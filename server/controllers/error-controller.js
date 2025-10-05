const ErrorService = require("../services/error-service");
const errorService = new ErrorService();

module.exports = class ErrorController {
    async addError(req, res, next) {
        try {
            const { projectId, userId, error } = req.body;
            await errorService.addError(projectId, userId, error);
            res.status(200).json({ message: "Error added!" });
        } catch (error) {
            next(error);
        }
    }

    async removeError(req, res, next) {
        try {
            const { id } = req.params;
            console.log("Removing error with ID:", id);
            await errorService.removeError(id);
            res.status(200).json({ message: "Error removed!" });
        } catch (error) {
            next(error);
        }
    }
};
