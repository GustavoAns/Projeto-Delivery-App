const md5 = require('md5');
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
  const passwordMd5 = md5(password);
  const userFind = await User.findOne({ where: { email, password: passwordMd5 }, raw: true });
  if (!userFind) {
    return {
      error: 'usuário ou senha invalida',
      status: 404,
    };
  }
  const token = generateToken({ id: userFind.id, role: userFind.role });
  return { status: 200, message: { id: userFind.id, token, role: userFind.role } };
};

module.exports = {
  loginValidation,
};
