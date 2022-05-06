const bcrypt = require('bcryptjs');
const JWT = require('jsonwebtoken');
const { User } = require('../../database/models');

const generateToken = (data) => JWT.sign(data, process.env.JWT_SECRET,
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
  const validations = await validEmailPassword(email, password);
  if (validations != null) return validations;
  const emailFind = await User.findOne({ where: { email }, raw: true });
  if (!emailFind) {
    return {
      error: 'usuário ou senha invalida',
      status: 400,
    };
  }
  const isValid = await bcrypt.compare(password, emailFind.password);
  if (isValid) {
    const token = generateToken({ id: emailFind.id, role: emailFind.role });
    return { status: 200, message: { id: emailFind.id, token, role: emailFind.role } };
  }
  return {
    error: 'usuário ou senha invalida',
    status: 400,
  };
};

module.exports = {
  loginValidation,
};
