const express = require("express");
const app = express();
const dailyPlanRouter = require("./api/dailyPlans");
//const router = express.Router();

const port = process.env.PORT || 5000;
// For week4 no need to look into this!
/* const path = require("path"); */
/* // Serve the built client html
const buildPath = path.join(__dirname, "../../dist");
app.use(express.static(buildPath)); */

// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());
// Public folder setup
app.use(express.static('public'));
app.use("/api/dailyPlans", dailyPlansRouter);


app.listen(port, () => console.log(`Server listening on port ${port}!`));