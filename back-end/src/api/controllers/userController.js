const userService = require('../services/userService');

const registerValidation = async (req, res) => {
  const { name, email, password } = req.body;
  const emailFind = await userService.registerValidation(name, email, password);
  console.log(emailFind);
  if (emailFind.status !== 201) return res.status(emailFind.status).json(emailFind.error);
  return res.status(emailFind.status).json(emailFind.message);
};

module.exports = {
  registerValidation,
};