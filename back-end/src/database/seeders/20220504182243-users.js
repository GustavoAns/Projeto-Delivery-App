'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Gustavo',
        email: 'cliente@email.com',
        password: '123456',
        role: 'cliente'
      },
      {
        name: 'irineu',
        email: 'cliente@email.com',
        password: '123456',
        role: 'cliente'
      },
      {
        name: 'matheus',
        email: 'vendedor@email.com',
        password: '123456',
        role: 'vendedor'
      },
      {
        name: 'felipão',
        email: 'adm@email.com',
        password: '123456',
        role: 'adm'
      }
    ])
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('users', null, {});
  }
};
