'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales_products', {
      saleId: {
        allowNull: false,
        primaryKey: true,
        field: 'sale_id',
        type: Sequelize.INTEGER,
        references: {
          model: "sales",
          key: "id"
        }
      },
      productId: {
        allowNull: false,
        primaryKey: true,
        field: 'product_id',
        type: Sequelize.INTEGER,
        references: {
          model: "products",
          key: "id"
        }
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('salesProducts');
  }
};