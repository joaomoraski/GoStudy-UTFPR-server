'use strict';

// npx sequelize-cli seed:generate --name demo-user

module.exports = {
    async up (queryInterface) {
        return queryInterface.bulkInsert('room_has_schedule', [
            {
                fk_id_room: 1,
                fk_id_schedule: 1
            },
            {
                fk_id_room: 1,
                fk_id_schedule: 2
            },
            {
                fk_id_room: 1,
                fk_id_schedule: 3
            },
            {
                fk_id_room: 2,
                fk_id_schedule: 1
            },
            {
                fk_id_room: 2,
                fk_id_schedule: 4
            },
            
        ]);
    },

    async down (queryInterface) {
        return queryInterface.bulkDelete('room_has_schedule', null, {});
    }
};
