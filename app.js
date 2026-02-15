require("./scheduler");
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

// Add new task
app.post("/tasks", (req, res) => {
    const tasks = JSON.parse(fs.readFileSync("tasks.json"));

    const newTask = {
        id: Date.now(),
        title: req.body.title,
        active: true
    };

    tasks.push(newTask);

    fs.writeFileSync("tasks.json", JSON.stringify(tasks, null, 2));

    res.json(newTask);
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
