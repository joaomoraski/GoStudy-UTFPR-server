'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        return queryInterface.createTable('reservations', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            fk_id_room: {
                type: Sequelize.INTEGER,
            },
            fk_id_schedule: {
                type: Sequelize.INTEGER,
            },
            fk_id_user: {
                type: Sequelize.INTEGER,
            },
            reservationDate: {
                type: Sequelize.DATE,
                allowNull: false
            }
        });
    },

    async down (queryInterface) {
        await queryInterface.dropTable('reservations');
    }
};
