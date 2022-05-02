module.exports = (sequelize, DataTypes) => {
  const SalesProducts = sequelize.define('salesProducts', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    saleId: {
      type: DataTypes.INTEGER,
      field: 'sale_id',
    },
    productId: {
      type: DataTypes.INTEGER,
      field: 'product_id',
    },
    quantity: {
      type: DataTypes.INTEGER,
      field: 'quantity',
    },
  }, {
    timestamps: false,
  });
  return SalesProducts;
}