const loginService = require('../services/loginService');

const loginValidation = async (req, res) => {
  const { email, password } = req.body;
  const emailFind = await loginService.loginValidation(email, password);
  if (emailFind.status !== 200) return res.status(emailFind.status).json(emailFind.error);
  return res.status(emailFind.status).json(emailFind.message);
};

module.exports = {
  loginValidation,
};