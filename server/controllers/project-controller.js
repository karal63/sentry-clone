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

    async createProject(req, res) {
        try {
            const { name, description, ownerId } = req.body;
            const id = uuidv4();
            await projectService.create(id, name, description, ownerId);
            res.status(200).json({ projectId: id });
        } catch (error) {
            res.status(500).json({ message: "Something went wrong" });
        }
    }
}

module.exports = ProjectController;
