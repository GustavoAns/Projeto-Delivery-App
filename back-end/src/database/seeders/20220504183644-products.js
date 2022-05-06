'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('products', [
      {
        "name": "heineken",
        "price": 10,
        "url_image": "https://www.cellshop.com/7268697-thickbox_default/cerveja-heineken-premium-quality-650ml-garrafa.jpg"
      },
      {
        "name": "brahma",
        "price": 8,
        "url_image": "https://io.convertiez.com.br/m/superpaguemenos/shop/products/images/32341/large/cerveja-brahma-350ml-puro-malte_80752.png"
      }
    ])
  },

  async down (queryInterface, Sequelize) {
     await queryInterface.bulkDelete('products', null, {});
  }
};
