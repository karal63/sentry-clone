const express = require("express");
const errorRoutes = require("./routes/error");
const projectRouter = require("./routes/project");
const userRoutes = require("./routes/user");
const errorMiddleware = require("./middlewares/error-middleware");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
        origin: process.env.ORIGIN_URL,
        credentials: true,
    })
);
app.use("/api", errorRoutes);
app.use("/api", projectRouter);
app.use("/api", userRoutes);

app.use(errorMiddleware);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
