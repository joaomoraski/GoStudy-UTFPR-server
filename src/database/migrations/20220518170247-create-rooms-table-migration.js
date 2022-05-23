'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        return queryInterface.createTable('rooms', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            fk_id_institute: {
                type: Sequelize.INTEGER,
                allowNull: false
            },
            roomNumber: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        });
    },

    async down (queryInterface) {
        await queryInterface.dropTable('rooms');
    }
};
