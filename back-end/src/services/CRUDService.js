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

const getUserById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({
                where: { id: id },
                raw: true,
            });
            if (user) resolve(user);
            else resolve([]);
        } catch (error) {
            reject(error);
        }
    });
};

const updateUser = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let user = await db.User.findOne({ where: { id: data.id } });
            if (!user) resolve({ message: "User not found" });
            await db.User.update(
                {
                    firstName: data.firstName,
                    lastName: data.lastName,
                    address: data.address,
                },
                {
                    where: {
                        id: data.id,
                    },
                }
            );
            let allUser = await db.User.findAll();
            resolve(allUser);
        } catch (error) {
            reject(error);
        }
    });
};

module.exports = {
    createUser: createUser,
    getAllUsers: getAllUsers,
    getUserById: getUserById,
    updateUser: updateUser,
};
