const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const viewEngine = require("./src/config/viewEngine");
const initWebRoutes = require("./src/routes");
const connectDB = require("./src/config/connectDb");
require("dotenv").config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

viewEngine(app);
initWebRoutes(app);

connectDB();

const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log(`App is running at the port ${port}`);
});
