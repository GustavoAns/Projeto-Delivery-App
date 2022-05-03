const JWT = require('jsonwebtoken');
const userService = require('../services/userService');

const userDenied = 'Usuario não autorizado';

const tokenValidation = (token) => {
  const retornoJWT = JWT.verify(token, process.env.JWT_SECRET);
  if (retornoJWT.role !== 'user') {
    return true;
  }
  return false;
};

const registerValidation = async (req, res) => {
  const { name, email, password } = req.body;
  const emailFind = await userService.registerValidation(name, email, password);
  if (emailFind.status !== 201) return res.status(emailFind.status).json(emailFind.error);
  return res.status(emailFind.status).json(emailFind.message);
};

const createSale = async (req, res) => {
  // const { userId, sellerId, deliveryAddress, deliveryNumber, listProducts } = req.body;
  const token = req.headers.authorization;
  const validation = tokenValidation(token);
  if (!validation) return res.status(401).json(userDenied);
  const emailFind = await userService.createSale(req.body);
  if (emailFind.status !== 201) return res.status(emailFind.status).json(emailFind.error);
  return res.status(emailFind.status).json(emailFind.message);
};

module.exports = {
  registerValidation,
  createSale,
};