const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("dat_lich_kham_benh", "root", "1903", {
    host: "localhost",
    dialect: "mysql",
    logging: false,
});

const connectDB = async () => {
    try {
        await sequelize.authenticate();
        console.log("Kết nối thành công tới " + sequelize.config.database);
    } catch (error) {
        console.log("Kết nối thất bại", error);
    }
};

module.exports = connectDB;
