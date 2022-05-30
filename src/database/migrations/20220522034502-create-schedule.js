'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        return queryInterface.createTable('schedule', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            label: {
                type: Sequelize.STRING,
            },
            initialTime: {
                type: Sequelize.TIME,
                allowNull: false
            },
            finalTime: {
                type: Sequelize.TIME,
                allowNull: false
            },
        });
    },

    async down (queryInterface) {
        await queryInterface.dropTable('schedule');
    }
};
