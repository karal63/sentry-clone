const express = require("express");
const router = express.Router();

const IssueController = require("../controllers/issue-controller");
const issueController = new IssueController();

const verifyToken = require("../middlewares/verify-token");

router.post("/issue", (req, res) => issueController.addIssue(req, res));

router.delete("/issue/:id", (req, res) =>
    issueController.removeIssue(req, res)
);

router.get("/issue/:projectId", verifyToken, (req, res, next) =>
    issueController.getIssues(req, res, next)
);

module.exports = router;
