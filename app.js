const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 3000;

app.use(express.json());

// Home route
app.get("/", (req, res) => {
    res.send("Chronox is running");
});

// Get all tasks
app.get("/tasks", (req, res) => {
    const tasks = JSON.parse(fs.readFileSync("tasks.json"));
    res.json(tasks);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
