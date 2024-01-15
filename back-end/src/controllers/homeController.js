const db = require("../models/index");
const {
    createUser,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser,
} = require("../services/CRUDService");

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

const getEditCRUD = async (req, res) => {
    try {
        const userId = req.query.id;
        if (userId) {
            const userData = await getUserById(userId);
            res.render("editCrud.ejs", {
                userData: userData,
            });
        } else {
            return res.send("User not found");
        }
    } catch (error) {
        console.log(error);
    }
};

const putCRUD = async (req, res) => {
    let data = req.body;
    let allUser = await updateUser(data);
    return res.render("displayCrud.ejs", {
        dataTable: allUser,
    });
};

const deleteCRUD = async (req, res) => {
    const id = req.query.id;
    console.log(id);
    const allUser = await deleteUser(id);
    return res.render("displayCrud.ejs", {
        dataTable: allUser,
    });
};

module.exports = {
    getHomePage: getHomePage,
    getCRUD: getCRUD,
    postCrud: postCrud,
    displayGetCRUD: displayGetCRUD,
    getEditCRUD: getEditCRUD,
    putCRUD: putCRUD,
    deleteCRUD: deleteCRUD,
};
