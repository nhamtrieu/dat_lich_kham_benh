import express from "express";
const homeController = require("../controllers/homeController");

let route = express.Router();

let initWebRoutes = (app) => {
    route.get("/crud", homeController.getCRUD);
    route.post("/post-crud", homeController.postCrud);
    route.get("/", homeController.getHomePage);

    return app.use("/", route);
};

module.exports = initWebRoutes;
