'use strict';

// npx sequelize-cli seed:generate --name demo-user

module.exports = {
    async up (queryInterface) {
        return queryInterface.bulkInsert('institutes', [
            {
                name: 'utfpr-cm',
                city: 'Campo Mourão',
                telephone: '44123456789',
                opening_time: "08:00",
                closing_time: "23:00"
            },
            {
                name: 'utfpr-cb',
                city: 'Curitiba',
                telephone: '44123456798',
                opening_time: "09:00",
                closing_time: "00:00"
            }
        ]);
    },

    async down (queryInterface) {
        return queryInterface.bulkDelete('institutes', null, {});
    }
};
