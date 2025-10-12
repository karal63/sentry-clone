const express = require("express");
const router = express.Router();
const ProjectController = require("../controllers/project-controller");
const projectController = new ProjectController();
const verifyToken = require("../middlewares/verify-token");

router.get("/project", verifyToken, (req, res, next) =>
    projectController.getProject(req, res, next)
);
router.post("/project", (req, res) =>
    projectController.createProject(req, res)
);

module.exports = router;
