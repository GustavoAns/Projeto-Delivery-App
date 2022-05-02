const JWT = require('jsonwebtoken');
const loginModel = require('../models/loginModel');

const generateToken = (data) => JWT.sign(data, process.env.JWT_SECRET || 'secret_key',
{
  algorithm: 'HS256',
  expiresIn: '31d',
});

const validEmailPassword = async (email, password) => {
  const validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (!validEmail.test(email)) {
    return {
      error: 'Email invalido.',
      status: 400,
    };
  }
    
  if (password.length < 6) {
    return {
      error: 'A senha deve ter no minimo 6 caracteres.',
      status: 400,
    };
  }
  return null;
};

const loginValidation = async (email, password) => {
  const validations = validEmailPassword(email, password);
  if (validations != null) return validations;
  const emailFind = await loginModel.loginValidation(email, password);
  if (emailFind === null) {
    return {
      error: 'usuário ou senha invalida',
      status: 400,
    };
  }
  const token = generateToken({ id: emailFind.id, role: emailFind.role });
  return { status: 200, message: token };
};

module.exports = {
  loginValidation,
};
