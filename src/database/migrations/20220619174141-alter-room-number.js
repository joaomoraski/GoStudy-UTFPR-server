'use strict';

module.exports = {
    async up (queryInterface) {
        await queryInterface.renameColumn('room', 'roomNumber', 'number');
    },

    async down (queryInterface) {
        await queryInterface.renameColumn('room', 'number', 'roomNumber');
    }
};
