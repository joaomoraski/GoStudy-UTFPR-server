'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        return queryInterface.createTable('room', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            fk_id_institute: {
                type: Sequelize.INTEGER,
                allowNull: false,
                onDelete: "CASCADE",
                references: {
                    model: "Institute",
                    key: "id",
                    as: "fk_id_institute"
                }
            },
            roomNumber: {
                type: Sequelize.INTEGER,
                allowNull: false,
            },
        });
    },

    async down (queryInterface) {
        await queryInterface.dropTable('room');
    }
};
