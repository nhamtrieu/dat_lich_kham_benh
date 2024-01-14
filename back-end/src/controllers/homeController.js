const db = require("../models/index");
const { createUser, getAllUsers } = require("../services/CRUDService");

const getHomePage = async (req, res) => {
    try {
        const data = await db.User.findAll();
        return res.render("homepage.ejs", {
            data: JSON.stringify(data),
        });
    } catch (error) {
        console.log(error);
    }
};

const getCRUD = async (req, res) => {
    try {
        return res.render("crud.ejs");
    } catch (error) {
        console.log(error);
    }
};

const postCrud = async (req, res) => {
    let message = await createUser(req.body);
    console.log(message);
    return res.send(req.body);
};

const displayGetCRUD = async (req, res) => {
    try {
        const data = await getAllUsers();
        return res.render("displayCrud.ejs", {
            dataTable: data,
        });
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCrud: postCrud,
    displayGetCRUD: displayGetCRUD,
};
