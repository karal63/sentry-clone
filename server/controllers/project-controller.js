const ProjectService = require("../services/project-service");
const projectService = new ProjectService();
const { v4: uuidv4 } = require("uuid");

class ProjectController {
    async getProject(req, res, next) {
        console.log(req.user.id);
        try {
            const projects = await projectService.getAll(req.user.id);
            res.status(200).json(projects);
        } catch (error) {
            next(error);
        }
    }

    async createProject(req, res, next) {
        try {
            const { platform, notifyViaEmail, name } = req.body;
            const id = uuidv4();
            const newProject = await projectService.create(
                id,
                name,
                platform,
                notifyViaEmail,
                req.user.id
            );
            res.status(200).json(newProject);
        } catch (error) {
            next(error);
        }
    }
}

module.exports = ProjectController;
