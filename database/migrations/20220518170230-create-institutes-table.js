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
            opening_time: {
                type: Sequelize.STRING
            },
            closing_time: {
                type: Sequelize.STRING
            },
        });
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.dropTable('institutes');
    }
};
