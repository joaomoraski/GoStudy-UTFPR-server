'use strict';

// npx sequelize-cli seed:generate --name demo-user

module.exports = {
    async up (queryInterface) {
        return queryInterface.bulkInsert('schedule', [
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
            },
            {
                label: "M4",
                initial_time: "10:20",
                final_time: "11:10"
            },
            {
                label: "M5",
                initial_time: "11:10",
                final_time: "12:00"
            },
            {
                label: "M6",
                initial_time: "12:00",
                final_time: "12:50"
            },
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
                label: "T4",
                initial_time: "15:50",
                final_time: "16:40"
            },
            {
                label: "T5",
                initial_time: "16:40",
                final_time: "17:30"
            },
            {
                label: "T6",
                initial_time: "17:30",
                final_time: "18:20"
            },
            {
                label: "N1",
                initial_time: "18:40",
                final_time: "19:30"
            },
            {
                label: "N2",
                initial_time: "19:30",
                final_time: "20:20"
            },
            {
                label: "N3",
                initial_time: "20:20",
                final_time: "21:10"
            },
            {
                label: "N4",
                initial_time: "21:20",
                final_time: "22:10"
            },
            {
                label: "N5",
                initial_time: "22:10",
                final_time: "23:00"
            },
        ]);
    },

    async down (queryInterface) {
        return queryInterface.bulkDelete('schedule', null, {});
    }
};
