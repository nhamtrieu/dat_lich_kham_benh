"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Docter_Clinics_Specialty extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    Docter_Clinics_Specialty.init(
        {
            docterId: DataTypes.INTEGER,
            clinicsId: DataTypes.INTEGER,
            specialtyId: DataTypes.INTEGER,
        },
        {
            sequelize,
            modelName: "Docter_Clinics_Specialty",
        }
    );
    return Docter_Clinics_Specialty;
};
