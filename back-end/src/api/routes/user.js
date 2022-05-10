const express = require('express');
const { jwtController } = require('../controllers/auth/JwtController');

const router = express.Router();
const {
  registerValidation,
  createSale,
  getAllSales,
  getById,
  updateById,
  getSellers,
} = require('../controllers/userController');

router.post('/register', registerValidation);

router.use(jwtController);

router.get('/sellers', getSellers);

router.post('/sales', createSale);

router.get('/sales', getAllSales);

router.get('/sales/:id', getById);

router.put('/sales/:id', updateById);

module.exports = router;
