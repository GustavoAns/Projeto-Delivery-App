const productsService = require('../services/productsService');

const getAllProducts = async (_req, res) => {
  const emailFind = await productsService.getAllProducts();
  if (emailFind.status !== 200) return res.status(emailFind.status).json(emailFind.error);
  return res.status(emailFind.status).json(emailFind.message);
};

module.exports = {
  getAllProducts,
};