'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.createTable('reservation', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            fk_id_room: {
                type: Sequelize.INTEGER,
                allowNull: false,
                onDelete: "CASCADE",
                references: {
                    model: "room",
                    key: "id",
                    as: "fk_id_room"
                }
            },
            fk_id_schedule: {
                type: Sequelize.INTEGER,
                allowNull: false,
                onDelete: "CASCADE",
                references: {
                    model: "schedule",
                    key: "id",
                    as: "fk_id_schedule"
                }
            },
            fk_id_user: {
                type: Sequelize.INTEGER,
                allowNull: false,
                onDelete: "CASCADE",
                references: {
                    model: "user",
                    key: "id",
                    as: "fk_id_user"
                }
            },
            reservationDate: {
                type: Sequelize.STRING,
                allowNull: false
            }
        });
    },

    async down (queryInterface) {
        await queryInterface.dropTable('reservation');
    }
};
