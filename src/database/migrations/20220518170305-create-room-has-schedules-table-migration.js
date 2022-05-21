'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        return queryInterface.createTable('room_has_schedules', {
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
        });
    },

    async down (queryInterface) {
        await queryInterface.dropTable('room_has_schedules');
    }
};
