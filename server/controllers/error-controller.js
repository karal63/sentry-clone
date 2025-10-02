module.exports = class ErrorController {
    async addError(req, res, next) {
        res.status(200).json({ message: "Error added!" });
    }
};
