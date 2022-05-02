// const JWT = require('jsonwebtoken');
const { Product } = require('../../database/models');

const getAllProducts = async () => {
  const emailFind = await Product.findAll();
  if (emailFind.length <= 0) {
    return {
      error: 'Não ha usuarios criados.',
      status: 400,
    };
  }

  return { status: 200, message: emailFind };
};

module.exports = {
  getAllProducts,
};
