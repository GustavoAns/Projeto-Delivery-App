const loginService = require('../service/login');

const loginValidation = async (req, res) => {
  const { email, password } = req.body;
  const validEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  if (!validEmail.test(email)) return res.status(400).json({ error: 'Email invalido.' });
  if (password.length === 6) return res.status(400).json({ error: 'A senha deve ter no minimo 6 caracteres.' });
  const emailFind = await loginService.emailExist(email, password);
  if (emailFind === null) return res.status(400).json({ error: 'Email ou Senha incorreta.' });
  return res.status(200).json(emailFind);
};

module.exports = {
  loginValidation,
};