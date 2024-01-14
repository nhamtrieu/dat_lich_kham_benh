const bcrypt = require("bcrypt");
import db from "../models";

const saltRounds = 10;

const createUser = async (user) => {
    return new Promise(async (resolve, reject) => {
        try {
            let _hashUserPassword = await hashUserPassword(user.password);
            await db.User.create({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                password: _hashUserPassword,
                address: user.address,
                gender: user.gender === "1",
                roleId: user.roleId,
                phoneNumber: user.phoneNumber,
            });
            resolve({ message: "ok" });
        } catch (error) {
            reject(error);
        }
    });
};

const hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            const salt = await bcrypt.genSalt(saltRounds);
            const hash = await bcrypt.hash(password, salt);
            resolve(hash);
        } catch (error) {
            reject(error);
        }
    });
};

const getAllUsers = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let users = await db.User.findAll({
                raw: true,
            });
            resolve(users);
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    createUser: createUser,
    getAllUsers: getAllUsers,
};
