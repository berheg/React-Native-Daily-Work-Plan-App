const express = require("express");
const app = express();
const dailyPlanRouter = require("./api/dailyPlans");

const port = process.env.PORT || 5000;

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
// Public folder setup
app.use(express.static('public'));
app.use("/api/dailyPlans", dailyPlanRouter);


app.listen(port, () => console.log(`Server listening on port ${port}!`));