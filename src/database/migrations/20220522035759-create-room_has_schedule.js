'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        return queryInterface.createTable('room_has_schedule', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            fk_id_room: {
                type: Sequelize.INTEGER,
                onDelete: "CASCADE",
                references: {
                    model: "Room",
                    key: "id",
                    as: "fk_id_room"
                }
            },
            fk_id_schedule: {
                type: Sequelize.INTEGER,
                onDelete: "CASCADE",
                references: {
                    model: "Schedule",
                    key: "id",
                    as: "fk_id_schedule"
                }
            },
        });
    },

    async down (queryInterface) {
        await queryInterface.dropTable('room_has_schedule');
    }
};
