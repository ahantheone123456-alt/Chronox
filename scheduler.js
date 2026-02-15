Scheduler loaded
const cron = require("node-cron");
const fs = require("fs");

function isOddDay() {
    return new Date().getDate() % 2 !== 0;
}

cron.schedule("0 7 * * *", () => {
    if (!isOddDay()) {
        console.log("Even day. No tasks executed.");
        return;
    }

    const tasks = JSON.parse(fs.readFileSync("tasks.json"));

    tasks.forEach(task => {
        if (task.active) {
            console.log("Executing task:", task.title);
        }
    });
});
