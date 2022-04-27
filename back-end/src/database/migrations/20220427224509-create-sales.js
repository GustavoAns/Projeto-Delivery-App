'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('sales', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        fields: "userId",
        references: {
          model: "users",
          key: "id"
        }
      },
      seller_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        fields: "sellerId",
        references: {
          model: "users",
          key: "id"
        }
      },
      total_price: {
        type: Sequelize.DECIMAL(9,2),
        fields: "totalPrice",
        allowNull: false,
      },
      delivery_address: {
        type: Sequelize.STRING,
        allowNull: false,
        fields: "deliveryAddress",
      },
      delivery_number: {
        type: Sequelize.STRING,
        allowNull: false,
        fields: "deliveryNumber",
      },
      sale_date: {
        type: Sequelize.DATE,
        allowNull: false,
        fields: "saleDate"
      },
      status: {
        allowNull: false,
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('sales');
  }
};