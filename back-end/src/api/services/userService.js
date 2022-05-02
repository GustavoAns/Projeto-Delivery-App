const JWT = require('jsonwebtoken');
const { User } = require('../../database/models');

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

const registerValidation = async (name, email, password) => {
  const validations = await validEmailPassword(email, password);
  if (validations != null) return validations;
  const emailFind = await User.findOne({ where: { email }, raw: true });
  if (emailFind) {
    return {
      error: 'usuário ja existe.',
      status: 400,
    };
  }

  const createdUser = await User.create({ name, email, password, role: 'user' });
  const { id, role } = createdUser.dataValues;
  const token = generateToken({ id, role });
  return { status: 201, message: { id, token, role } };
};

module.exports = {
  registerValidation,
};
