'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        return queryInterface.createTable('user', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            fk_id_institute:{
                type: Sequelize.INTEGER,
                allowNull: false,
                onDelete: "CASCADE",
                references: {
                    model: "Institute",
                    key: "id",
                    as: "fk_id_institute"
                }
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            ra: {
                type: Sequelize.STRING,
                allowNull: false

            },
            telephone: {
                type: Sequelize.STRING,
                allowNull: false
            },
            email: {
                type: Sequelize.STRING,
                allowNull: false
            },
            password: {
                type: Sequelize.STRING,
                allowNull: false
            },
            isAdmin: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            }
        });
    },

    async down (queryInterface) {
        await queryInterface.dropTable('user');
    }
};
