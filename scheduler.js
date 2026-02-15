const cron = require("node-cron");

function isOddDay() {
    const today = new Date();
    return today.getDate() % 2 !== 0;
}

cron.schedule("0 7 * * *", () => {
    if (isOddDay()) {
        console.log("Today is odd. Run tasks.");
    }
});
