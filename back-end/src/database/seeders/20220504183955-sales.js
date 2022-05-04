'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('sales', [
      {
        "user_id": 1,
        "seller_id": 3,
        "delivery_address": "Rua das alamedas de são joao",
        "delivery_number": "136",
        "total_price": 48.00,
        "sale_date": "2022-05-03 21:58:49",
        "status": "pendente"
      },
      {
        "user_id": 2,
        "seller_id": 3,
        "delivery_address": "Rua das araras azul",
        "delivery_number": "54",
        "total_price": 80,
        "sale_date": "2022-05-03 21:58:49",
        "status": "entregue"
      },
      {
        "user_id": 1,
        "seller_id": 3,
        "delivery_address": "Av. paulista",
        "delivery_number": "74",
        "total_price": 100,
        "sale_date": "2022-05-03 21:58:49",
        "status": "saiu para entrega"
      },
      {
        "user_id": 1,
        "seller_id": 3,
        "delivery_address": "Av. paulista",
        "delivery_number": "74",
        "total_price": 200,
        "sale_date": "2022-05-03 21:58:49",
        "status": "preparando"
      }
    ])
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('sales', null, {});
  }
};
