'use strict';

// npx sequelize-cli seed:generate --name demo-user

module.exports = {
    async up (queryInterface) {
        return queryInterface.bulkInsert('users', [
            { 
                fk_id_institute: 1,
                name: "Moraski",
                ra: "2000000",
                telephone: "44912345678",
                email: "joaolunkes@alunos.utfpr.edu.br",
                password: 'coxinha123',
                isAdmin: false
            },
            {
                fk_id_institute: 2,
                name: "José",
                ra: "2312300",
                telephone: "44123568749",
                email: "joserenan@alunos.utfpr.edu.br",
                password: 'banana123',
                isAdmin: false
            },
            {
                fk_id_institute: 1,
                name: "Flavio",
                ra: "1814000",
                telephone: "4491857478",
                email: "flavios@alunos.utfpr.edu.br",
                password: 'senhamuitoboa',
                isAdmin: true
            },
            {
                fk_id_institute: 2,
                name: "Caio",
                ra: "18550000",
                telephone: "44964345678",
                email: "caioluiz@alunos.utfpr.edu.br",
                password: 'aloaloaloalo',
                isAdmin: true
            }
        ]);
    },

    async down (queryInterface) {
        return queryInterface.bulkDelete('users', null, {});
    }
};
