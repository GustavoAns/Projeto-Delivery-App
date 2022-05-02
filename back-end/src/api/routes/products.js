const express = require('express');
const JWT = require('jsonwebtoken');

const router = express.Router();
const {
  getAllProducts,
  createProduct,
  updateProduct,
} = require('../controllers/productsController');

router.get('/', getAllProducts);

router.use((request, response, next) => {
  const token = request.headers.authorization;
  if (!token) return response.status(401).json({ message: 'Token not found' });
  try {
    const { id } = JWT.verify(token, process.env.JWT_SECRET);
    request.body = { userId: id, ...request.body };
    next();
  } catch (error) {
    return response.status(401).json({ message: 'Expired or invalid token' });
  }
});

router.post('/', createProduct);

router.put('/:id', updateProduct);

module.exports = router;
