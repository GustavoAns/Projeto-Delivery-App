const JWT = require('jsonwebtoken');
const userService = require('../services/userService');

const getIdByToken = (token) => {
  const retornoJWT = JWT.verify(token, process.env.JWT_SECRET);
  return retornoJWT.id;
};

const registerValidation = async (req, res) => {
  const { name, email, password } = req.body;
  const emailFind = await userService.registerValidation(name, email, password);
  if (emailFind.status !== 201) return res.status(emailFind.status).json(emailFind.error);
  return res.status(emailFind.status).json(emailFind.message);
};

const createSale = async (req, res) => {
  const token = req.headers.authorization;
  const tokenId = getIdByToken(token);
  const createdSale = await userService.createSale(req.body, tokenId);
  if (createdSale.status !== 201) return res.status(createdSale.status).json(createdSale.error);
  return res.status(createdSale.status).json(createdSale.message);
};

const getAllSales = async (req, res) => {
  const token = req.headers.authorization;
  const tokenId = getIdByToken(token);
  const allSales = await userService.getAllSales(tokenId);
  if (allSales.status !== 200) return res.status(allSales.status).json(allSales.error);
  return res.status(allSales.status).json(allSales.message);
};

const getById = async (req, res) => {
  const token = req.headers.authorization;
  const { id } = req.params;
  const tokenId = getIdByToken(token);
  const allSales = await userService.getById(tokenId, id);
  if (allSales.status !== 200) return res.status(allSales.status).json(allSales.error);
  return res.status(allSales.status).json(allSales.message);
};

const updateById = async (req, res) => {
  const { status } = req.body;
  const { id } = req.params;
  const allSales = await userService.updateById(id, status);
  if (allSales.status !== 200) return res.status(allSales.status).json(allSales.error);
  return res.status(allSales.status).json(allSales.message);
};

module.exports = {
  registerValidation,
  createSale,
  getAllSales,
  getById,
  updateById,
};