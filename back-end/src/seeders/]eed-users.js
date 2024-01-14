"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        return queryInterface.bulkInsert("Users", [
            {
                firstName: "John",
                lastName: "Doe",
                email: "admin@gmail.com",
                password: "1234",
                address: "hanoi",
                gender: 1,
                typeRole: "ROLE",
                keyRole: "R1",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        ]);
    },

    async down(queryInterface, Sequelize) {
        /**
         * Add commands to revert seed here.
         *
         * Example:
         * await queryInterface.bulkDelete('People', null, {});
         */
    },
};
