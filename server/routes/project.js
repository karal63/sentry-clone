const express = require("express");
const router = express.Router();
const ProjectController = require("../controllers/project-controller");
const projectController = new ProjectController();

router.post("/project", (req, res) =>
    projectController.createProject(req, res)
);

module.exports = router;
