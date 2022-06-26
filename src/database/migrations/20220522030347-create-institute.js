'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.createTable('institute', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            city: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            telephone: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            openingTime: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            closingTime: {
                type: Sequelize.STRING,
                allowNull: false,
            },
        });
    },

    async down (queryInterface, ) {
        await queryInterface.dropTable('institute');
    }
};
