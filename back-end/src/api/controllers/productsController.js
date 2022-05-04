const JWT = require('jsonwebtoken');
const productsService = require('../services/productsService');

const userDenied = 'Usuario não autorizado';

const tokenValidation = (token) => {
  const retornoJWT = JWT.verify(token, process.env.JWT_SECRET);
  if (retornoJWT.role !== 'cliente') {
    return true;
  }
  return false;
};

const getAllProducts = async (_req, res) => {
  const emailFind = await productsService.getAllProducts();
  if (emailFind.status !== 200) return res.status(emailFind.status).json(emailFind.error);
  return res.status(emailFind.status).json(emailFind.message);
};

const createProduct = async (req, res) => {
  const { name, price, urlImage } = req.body;
  const token = req.headers.authorization;
  const validation = tokenValidation(token);
  if (!validation) return res.status(401).json(userDenied);
  const emailFind = await productsService.createProduct(name, price, urlImage);
  if (emailFind.status !== 201) return res.status(emailFind.status).json(emailFind.error);
  return res.status(emailFind.status).json(emailFind.message);
};

const updateProduct = async (req, res) => {
  const { name, price, urlImage } = req.body; 
  const { id } = req.params;
  const token = req.headers.authorization;
  const validation = tokenValidation(token);
  if (!validation) return res.status(401).json(userDenied);
  const emailFind = await productsService.updateProduct(name, price, urlImage, id);
  if (emailFind.status !== 201) return res.status(emailFind.status).json(emailFind.error);
  return res.status(emailFind.status).json(emailFind.message);
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const token = req.headers.authorization;
  const validation = tokenValidation(token);
  if (!validation) return res.status(401).json(userDenied);
  const emailFind = await productsService.deleteProduct(id);
  if (emailFind.status !== 200) return res.status(emailFind.status).json(emailFind.error);
  return res.status(emailFind.status).json();
};

// const getById = async (req, res) => {
//   const { id } = req.params;
//   const token = req.headers.authorization;
//   const validation = tokenValidation(token);
//   if (!validation) return res.status(401).json(userDenied);
//   const emailFind = await productsService.deleteProduct(id);
//   if (emailFind.status !== 200) return res.status(emailFind.status).json(emailFind.error);
//   return res.status(emailFind.status).json();
// };

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};