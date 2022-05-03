'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales_products', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      saleId: {
        allowNull: false,
        field: 'sale_id',
        type: Sequelize.INTEGER,
        references: {
          model: "sales",
          key: "id"
        }
      },
      productId: {
        allowNull: false,
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