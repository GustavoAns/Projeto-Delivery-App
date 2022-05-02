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

const createProduct = async (name, price, urlImage) => {
  await Product.create({ name, price, urlImage });
  return { status: 201, message: 'produto criado' };
};
module.exports = {
  getAllProducts,
  createProduct,
};
