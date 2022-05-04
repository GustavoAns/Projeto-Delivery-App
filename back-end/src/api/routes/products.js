const express = require('express');
const { jwtController } = require('../controllers/auth/JwtController');

const router = express.Router();
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require('../controllers/productsController');

router.get('/', getAllProducts);

router.use(jwtController);

router.post('/', createProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct);

module.exports = router;
