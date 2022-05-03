const JWT = require('jsonwebtoken');
const { User, Product, Sale, SalesProduct } = require('../../database/models');

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

const generateTotalPrice = async (listProducts) => {
  let acumulador = 0;
  await Promise.all(
    listProducts.map(async (obj) => {
      const findProd = await Product.findOne({ where: { id: obj.id }, raw: true });
      acumulador += (Number(findProd.price) * obj.quantity);
    }),
  );
  return acumulador;
};

const generateSale = async (body, totalPrice) => {
  const { userId, sellerId, deliveryAddress, deliveryNumber } = body;
  const tipo = typeof userId;
  console.log(tipo);
  const createdSele = await Sale.create({
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    saleDate: new Date(),
    status: 'em progresso',
  });
  return createdSele;
};

const generateSaleProd = async (listProducts, saleId) => {
  await Promise.all(
    listProducts.map(async (obj) => {
      await SalesProduct.create({ saleId, productId: obj.id, quantity: obj.quantity });
    }),
  );
};

const createSale = async (body) => {
  const { listProducts } = body;
  const totalPrice = await generateTotalPrice(listProducts);

  const createdSele = await generateSale(body, totalPrice);
  
  await generateSaleProd(listProducts, createdSele.id);

  return { status: 201, message: 'Criado' };
};

module.exports = {
  registerValidation,
  createSale,
};
