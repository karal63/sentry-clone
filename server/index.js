const express = require("express");
const issueRoutes = require("./routes/issue");
const projectRouter = require("./routes/project");
const userRoutes = require("./routes/user");
const errorMiddleware = require("./middlewares/error-middleware");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const IssueController = require("./controllers/issue-controller");
require("dotenv").config();
const issueController = new IssueController();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());

const publicCors = cors({
    origin: "*",
    methods: ["POST"],
    credentials: false,
});

const protectedCors = cors({
    origin: process.env.ORIGIN_URL,
    credentials: true,
});

// --- Apply routes selectively --- //

// only POST /api/issue
app.options("/api/issue", publicCors); // handle preflight requests
app.post("/api/issue", publicCors, (req, res, next) => {
    issueController.addIssue(req, res, next);
});

// all other issue routes (e.g. GET /api/issue, PUT /api/issue/:id)
app.use("/api", protectedCors, issueRoutes);

app.use("/api", protectedCors, projectRouter);
app.use("/api", protectedCors, userRoutes);
// app.use("/api/refresh", protectedCors);

// Error handler
app.use(errorMiddleware);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
