const express = require("express");
const errorRoutes = require("./routes/error");
const projectRouter = require("./routes/project");

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api", errorRoutes);
app.use("/api", projectRouter);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
