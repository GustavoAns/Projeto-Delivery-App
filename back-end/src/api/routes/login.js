const express = require('express');

const router = express.Router();
const { loginValidation } = require('../controllers/loginController');

router.post('/', loginValidation);

module.exports = router;
