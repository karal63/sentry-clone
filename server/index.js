const express = require("express");
const errorRoutes = require("./routes/error");

const app = express();
const port = 3000;

app.use(express.json());
app.use("/api", errorRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
