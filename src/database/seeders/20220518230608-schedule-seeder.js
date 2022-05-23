'use strict';

// npx sequelize-cli seed:generate --name demo-user

module.exports = {
    async up (queryInterface) {
        return queryInterface.bulkInsert('schedules', [
            {
                label: "T1",
                initialTime: "13:00",
                finalTime: "13:50"
            },
            {
                label: "T2",
                initialTime: "13:50",
                finalTime: "14:40"
            },
            {
                label: "T3",
                initialTime: "14:40",
                finalTime: "15:30"
            },
            {
                label: "M1",
                initialTime: "07:30",
                finalTime: "08:20"
            },
            {
                label: "M2",
                initialTime: "08:20",
                finalTime: "09:10"
            },
            {
                label: "M3",
                initialTime: "09:10",
                finalTime: "10:00"
            },
            
        ]);
    },

    async down (queryInterface) {
        return queryInterface.bulkDelete('schedules', null, {});
    }
};
