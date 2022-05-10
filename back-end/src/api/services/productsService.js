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

const getProductById = async (id) => {
  const product = await Product.findOne({ where: { id } });
  return product;
};

const createProduct = async (name, price, urlImage) => {
  await Product.create({ name, price, urlImage });
  return { status: 201, message: 'produto criado' };
};

const updateProduct = async (name, price, urlImage, id) => {
  await Product.update({ name, price, urlImage }, { where: { id } });
  return { status: 201, message: 'atualizado' };
};

const deleteProduct = async (id) => {
  await Product.destroy({ where: { id } });
  return { status: 200, message: 'atualizado' };
};

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductById,
};
