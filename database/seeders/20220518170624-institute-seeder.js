'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        return queryInterface.bulkInsert('institutes', [{
            name: 'utfpr-cm',
            city: 'Campo Mourão',
            telephone: '44123456789',
            opening_time: "08:00",
            closing_time: "23:00"
        }]);
    },

    async down (queryInterface, Sequelize) {
        return queryInterface.bulkDelete('institutes', null, {});
    }
};
