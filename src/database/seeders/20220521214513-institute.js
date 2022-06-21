'use strict';

// npx sequelize-cli seed:generate --name demo-user

module.exports = {
    async up (queryInterface) {
        return queryInterface.bulkInsert('institute', [
            {
                name: 'utfpr-cm',
                city: 'Campo Mourão',
                telephone: '44123456789',
                openingTime: "08:00",
                closingTime: "23:00"
            },
            {
                name: 'utfpr-cb',
                city: 'Curitiba',
                telephone: '44123456798',
                openingTime: "09:00",
                closingTime: "00:00"
            }
        ]);
    },

    async down (queryInterface) {
        return queryInterface.bulkDelete('institute', null, {});
    }
};
