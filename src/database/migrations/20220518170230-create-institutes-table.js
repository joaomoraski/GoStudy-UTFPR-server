'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        return queryInterface.createTable('institutes', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING
            },
            city: {
                type: Sequelize.STRING
            },
            telephone: {
                type: Sequelize.STRING
            },
            openingTime: {
                type: Sequelize.STRING
            },
            closingTime: {
                type: Sequelize.STRING
            },
        });
    },

    async down (queryInterface, ) {
        await queryInterface.dropTable('institutes');
    }
};
