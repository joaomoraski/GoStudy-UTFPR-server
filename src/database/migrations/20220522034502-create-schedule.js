'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.createTable('schedule', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            label: {
                type: Sequelize.STRING,
                allowNull: false,
            },
            initial_time: {
                type: Sequelize.TIME,
                allowNull: false
            },
            final_time: {
                type: Sequelize.TIME,
                allowNull: false
            },
        });
    },

    async down (queryInterface) {
        await queryInterface.dropTable('schedule');
    }
};
