const express = require('express');

const router = express.Router();
const { registerValidation } = require('../controllers/userController');

router.post('/register', registerValidation);

module.exports = router;
