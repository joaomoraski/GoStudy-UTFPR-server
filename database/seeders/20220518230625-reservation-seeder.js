'use strict';

// npx sequelize-cli seed:generate --name demo-user

module.exports = {
    async up (queryInterface) {
        return queryInterface.bulkInsert('reservations', [
            {
                fk_id_room: 1,
                fk_id_user: 1,
                fk_id_schedule: 1,
                reservationDate: "2022-03-24"
            },
            {
                fk_id_room: 1,
                fk_id_user: 3,
                fk_id_schedule: 2,
                reservationDate: "2022-03-24"
            },
            
            
        ]);
    },

    async down (queryInterface) {
        return queryInterface.bulkDelete('reservations', null, {});
    }
};
