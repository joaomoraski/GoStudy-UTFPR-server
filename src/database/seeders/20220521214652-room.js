'use strict';

// npx sequelize-cli seed:generate --name demo-user

module.exports = {
    async up (queryInterface) {
        return queryInterface.bulkInsert('room', [
            {
                fk_id_institute: 1,
                number: 1
            },
            {
                fk_id_institute: 1,
                number: 2
            },
            {
                fk_id_institute: 1,
                number: 3
            },
            {
                fk_id_institute: 2,
                number: 1
            },
            {
                fk_id_institute: 2,
                number: 1
            },
        ]);
    },

    async down (queryInterface) {
        return queryInterface.bulkDelete('room', null, {});
    }
};
