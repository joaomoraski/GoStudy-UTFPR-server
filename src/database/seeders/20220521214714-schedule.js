'use strict';

// npx sequelize-cli seed:generate --name demo-user

module.exports = {
    async up (queryInterface) {
        return queryInterface.bulkInsert('schedule', [
            {
                label: "T1",
                initial_time: "13:00",
                final_time: "13:50"
            },
            {
                label: "T2",
                initial_time: "13:50",
                final_time: "14:40"
            },
            {
                label: "T3",
                initial_time: "14:40",
                final_time: "15:30"
            },
            {
                label: "M1",
                initial_time: "07:30",
                final_time: "08:20"
            },
            {
                label: "M2",
                initial_time: "08:20",
                final_time: "09:10"
            },
            {
                label: "M3",
                initial_time: "09:10",
                final_time: "10:00"
            }
        ]);
    },

    async down (queryInterface) {
        return queryInterface.bulkDelete('schedule', null, {});
    }
};
